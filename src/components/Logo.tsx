import React, { useState, useEffect, useRef } from "react";
import { Check, Camera } from "lucide-react";

interface LogoProps {
  className?: string; // custom classes for height/scaling (e.g. "h-8 sm:h-10 md:h-11")
  iconOnly?: boolean;  // toggle to show only the logo badge/mark
  colorLight?: boolean; // toggle to shift text to white/teal for dark backgrounds
  showUploadTrigger?: boolean; // optional camera/upload trigger icon
  align?: "left" | "center"; // optical alignment for object-position
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-8 sm:h-10 md:h-11",
  iconOnly = false,
  colorLight = true,
  showUploadTrigger = false,
  align = "left",
}) => {
  const [customLogoSrc, setCustomLogoSrc] = useState<string | null>(() => {
    try {
      let stored =
        localStorage.getItem("companyLogo") ||
        localStorage.getItem("growdons_custom_logo");
      if (stored && stored.includes("SERVICES LTD")) {
        stored = stored.replace(/SERVICES LTD/g, "SERVICES");
        try {
          localStorage.setItem("companyLogo", stored);
          localStorage.setItem("growdons_custom_logo", stored);
        } catch {
          // ignore quota
        }
      }
      return stored || "/companyLogo.svg";
    } catch {
      return "/companyLogo.svg";
    }
  });

  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isWideLogo, setIsWideLogo] = useState(false);
  const [logoAspectRatio, setLogoAspectRatio] = useState<number | null>(null);
  const [uploadToast, setUploadToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Synchronize and discover companyLogo across persistent storage and file endpoints
  useEffect(() => {
    let isMounted = true;

    // Helper to probe an image source and retrieve intrinsic dimensions
    const probeImage = (
      src: string
    ): Promise<{ src: string; width: number; height: number; aspectRatio: number } | null> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const width = img.naturalWidth || img.width || 200;
          const height = img.naturalHeight || img.height || 50;
          const aspectRatio = height > 0 ? width / height : 1;
          resolve({ src, width, height, aspectRatio });
        };
        img.onerror = () => {
          resolve(null);
        };
        img.src = src;
      });
    };

    const resolveLogo = async () => {
      // 1. Check local storage first (uploaded data URL or user preference)
      try {
        let stored =
          localStorage.getItem("companyLogo") ||
          localStorage.getItem("growdons_custom_logo");
        if (stored) {
          if (stored.includes("SERVICES LTD")) {
            stored = stored.replace(/SERVICES LTD/g, "SERVICES");
            try {
              localStorage.setItem("companyLogo", stored);
              localStorage.setItem("growdons_custom_logo", stored);
            } catch {
              // ignore quota
            }
          }
          const res = await probeImage(stored);
          if (res && isMounted) {
            setCustomLogoSrc(res.src);
            setLogoAspectRatio(res.aspectRatio);
            setIsWideLogo(res.aspectRatio > 1.6);
            setLogoLoaded(true);
            setLogoError(false);
            return;
          }
        }
      } catch {
        // Continue to static endpoints
      }

      // 2. Candidate endpoints for uploaded/official companyLogo files
      const timestamp = Date.now();
      const candidates = [
        "/companyLogo.svg",
        "/companyLogo.png",
        "/companyLogo.jpg",
        "/companyLogo.jpeg",
        "/companyLogo.webp",
        `/api/company-logo?t=${timestamp}`,
        "/companyLogo",
      ];

      for (const candidate of candidates) {
        const res = await probeImage(candidate);
        if (res && isMounted) {
          setCustomLogoSrc(res.src);
          setLogoAspectRatio(res.aspectRatio);
          setIsWideLogo(res.aspectRatio > 1.6);
          setLogoLoaded(true);
          setLogoError(false);
          return;
        }
      }

      // 3. If no candidate was loaded, switch to fallback vector badge
      if (isMounted) {
        setLogoError(true);
        setLogoLoaded(false);
      }
    };

    resolveLogo();

    // Listen for custom logo upload events from anywhere in the app
    const handleUpdate = () => resolveLogo();
    window.addEventListener("growdons_logo_updated", handleUpdate);
    return () => {
      isMounted = false;
      window.removeEventListener("growdons_logo_updated", handleUpdate);
    };
  }, []);

  // Handle direct file upload via camera trigger
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        let base64 = event.target?.result as string;
        if (base64) {
          if (base64.includes("SERVICES LTD")) {
            base64 = base64.replace(/SERVICES LTD/g, "SERVICES");
          }

          // Save in localStorage under standard keys
          try {
            localStorage.setItem("companyLogo", base64);
            localStorage.setItem("growdons_custom_logo", base64);
          } catch {
            // Storage quota fallback
          }

          // Measure dimensions immediately
          const img = new Image();
          img.onload = () => {
            const width = img.naturalWidth || img.width || 200;
            const height = img.naturalHeight || img.height || 50;
            const ratio = height > 0 ? width / height : 1;
            setLogoAspectRatio(ratio);
            setIsWideLogo(ratio > 1.6);
          };
          img.src = base64;

          setCustomLogoSrc(base64);
          setLogoLoaded(true);
          setLogoError(false);

          // Upload to backend API to persist to container filesystem
          try {
            await fetch("/api/upload-logo", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                imageBase64: base64,
                fileName: file.name,
              }),
            });
          } catch (err) {
            console.warn("Backend logo sync warning:", err);
          }

          // Trigger broadcast event so all Logo instances across the app update
          window.dispatchEvent(new Event("growdons_logo_updated"));
          setUploadToast(true);
          setTimeout(() => setUploadToast(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error("Error reading file:", err);
    }
  };

  return (
    <div
      className={`Logo relative flex items-center gap-2 sm:gap-3 select-none min-w-0 max-w-full ${className}`}
    >
      {/* Hidden file input for logo change */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp"
        className="hidden"
        onChange={handleFileChange}
        aria-label="Upload Company Logo"
      />

      {/* Brand Icon or Custom Uploaded Logo Container */}
      <div
        className={`relative flex-shrink-0 h-full max-h-12 flex items-center min-w-0 ${
          isWideLogo
            ? "max-w-[125px] xs:max-w-[155px] sm:max-w-[220px] md:max-w-[300px]"
            : "w-auto"
        }`}
      >
        {customLogoSrc && logoLoaded && !logoError ? (
          <div className="Logo-container flex items-center justify-center h-full max-h-12 w-auto max-w-full object-contain aspect-auto overflow-hidden">
            <img
              id="grow-dons-company-logo"
              src={customLogoSrc}
              alt="Grow Dons Services Logo"
              className="max-h-12 h-full w-auto max-w-full object-contain aspect-auto select-none pointer-events-auto filter drop-shadow-sm rounded transition-opacity duration-200"
              style={{
                objectFit: "contain",
                objectPosition: align === "center" ? "center" : "left center",
                aspectRatio: logoAspectRatio ? `${logoAspectRatio}` : "auto",
              }}
              onError={() => {
                setLogoError(true);
                setLogoLoaded(false);
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          /* High-Contrast Technical Vector Logo Mark */
          <svg
            id="grow-dons-logo-badge"
            viewBox="0 0 100 100"
            className="h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 flex-shrink-0 filter drop-shadow-md"
            style={{ objectFit: "contain" }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Hexagonal Industrial Shield */}
            <rect
              x="4"
              y="4"
              width="92"
              height="92"
              rx="18"
              fill={colorLight ? "#091C2E" : "#071A2B"}
              stroke="#0B6670"
              strokeWidth="3.5"
            />

            {/* Technical Accent Grid */}
            <line
              x1="8"
              y1="24"
              x2="92"
              y2="24"
              stroke="#0B6670"
              strokeWidth="1"
              strokeDasharray="2 3"
              opacity="0.5"
            />

            {/* Left Letter 'G' - Petroleum Teal with Bright Cyan Stroke */}
            <path
              d="M44 26 H24 C17 26 12 31 12 38 V62 C12 69 17 74 24 74 H44 V52 H32 V60 H26 C23 60 21 58 21 54 V46 C21 42 23 40 26 40 H44 V26 Z"
              fill="#0B6670"
            />
            <path
              d="M44 26 H24 C17 26 12 31 12 38 V62 C12 69 17 74 24 74 H44 V52 H32 V60 H26 C23 60 21 58 21 54 V46 C21 42 23 40 26 40 H44 V26 Z"
              stroke="#14b8a6"
              strokeWidth="1.5"
            />

            {/* Right Letter 'D' - Crisp Bright White */}
            <path
              d="M52 26 H70 C79 26 86 33 86 42 V58 C86 67 79 74 70 74 H52 V26 Z M60 38 V62 H68 C73 62 76 59 76 54 V46 C76 41 73 38 68 38 H60 Z"
              fill="#FFFFFF"
            />

            {/* Central Safety Orange Flow Droplet Accent */}
            <circle cx="48" cy="50" r="4.5" fill="#F28C28" />
            <line
              x1="43"
              y1="50"
              x2="53"
              y2="50"
              stroke="#F28C28"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="48"
              y1="45"
              x2="48"
              y2="55"
              stroke="#F28C28"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Bottom Petroleum Indicator Dot */}
            <circle cx="50" cy="85" r="2.5" fill="#14b8a6" />
          </svg>
        )}

        {/* Optional small upload icon trigger on hover/click */}
        {showUploadTrigger && (
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                fileInputRef.current?.click();
              }
            }}
            title="Upload new company logo"
            className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#0B6670] hover:bg-[#F28C28] text-white shadow-md transition-transform hover:scale-110 z-10 cursor-pointer inline-flex items-center justify-center"
            aria-label="Upload company logo"
          >
            <Camera className="h-2.5 w-2.5" />
          </span>
        )}
      </div>

      {/* Typography Brand Label - Shown only if no wide custom logo is used */}
      {!iconOnly && (!customLogoSrc || !logoLoaded || logoError || !isWideLogo) && (
        <div className="flex flex-col select-none justify-center min-w-0 overflow-hidden">
          <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none min-w-0 flex-nowrap">
            <span
              className={`font-display text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-tight truncate whitespace-nowrap ${
                colorLight ? "text-white" : "text-[#071A2B]"
              }`}
            >
              GROW DONS
            </span>
            <span
              className={`font-display text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider whitespace-nowrap flex-shrink-0 ${
                colorLight ? "text-teal-300" : "text-[#0B6670]"
              }`}
            >
              SERVICES
            </span>
          </div>
          <span
            className={`hidden sm:inline-block font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-wider uppercase leading-tight mt-0.5 sm:mt-1 font-medium truncate whitespace-nowrap ${
              colorLight ? "text-[#F28C28]" : "text-[#0B6670]"
            }`}
          >
            Oilfield Chemicals &amp; Supply
          </span>
        </div>
      )}

      {/* Floating Success Toast */}
      {uploadToast && (
        <div className="absolute top-full left-0 mt-2 px-2.5 py-1 bg-emerald-600 text-white font-mono text-[10px] rounded shadow-lg flex items-center gap-1 z-50 whitespace-nowrap animate-fade-in">
          <Check className="h-3 w-3" />
          <span>Logo updated!</span>
        </div>
      )}
    </div>
  );
};
