import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../Logo";
import { ViewMode } from "../../types";
import { CONTACT_INFO, COMPANY_RC } from "../../data";
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  FileSpreadsheet, 
  ArrowRight, 
  FlaskConical, 
  MapPin,
  Home,
  Building2,
  Boxes,
  Truck,
  Users,
  Globe,
  HelpCircle,
  Layers,
  UploadCloud,
  Check
} from "lucide-react";

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  onRequestQuote: (prefillProduct?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onRequestQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [uploadSuccessToast, setUploadSuccessToast] = useState(false);
  const logoUploadInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems: { 
    label: string; 
    view: ViewMode; 
    icon: React.ComponentType<{ className?: string }>;
    isChemicals?: boolean;
  }[] = [
    { label: "HOME", view: "home", icon: Home },
    { label: "ABOUT", view: "about", icon: Building2 },
    { label: "CHEMICALS", view: "chemicals", icon: FlaskConical, isChemicals: true },
    { label: "PROCUREMENT", view: "procurement", icon: Boxes },
    { label: "LOGISTICS", view: "logistics", icon: Truck },
    { label: "LEADERSHIP", view: "leadership", icon: Users },
  ];

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          try {
            localStorage.setItem("companyLogo", base64);
            localStorage.setItem("growdons_custom_logo", base64);
          } catch {
            // storage full fallback
          }

          // Push to backend server
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

          window.dispatchEvent(new Event("growdons_logo_updated"));
          setUploadSuccessToast(true);
          setTimeout(() => setUploadSuccessToast(false), 3500);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error("Logo upload failed:", err);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col">
      {/* Hidden File Input for Logo Updates */}
      <input
        ref={logoUploadInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp"
        className="hidden"
        onChange={handleLogoUpload}
        aria-label="Upload New Logo File"
      />

      {/* Top Micro Information Bar - Desktop */}
      <div className="bg-[#051320] text-slate-300 text-xs py-1 px-3 sm:px-6 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 flex-nowrap overflow-hidden">
          <div className="flex items-center gap-2 lg:gap-3.5 text-[10px] lg:text-[11px] font-mono min-w-0 flex-1 overflow-hidden flex-nowrap">
            <span className="flex items-center gap-1.5 font-mono text-[10px] lg:text-[11px] text-slate-300 whitespace-nowrap flex-shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B6670] animate-pulse flex-shrink-0" />
              <span className="font-semibold tracking-wider text-slate-200">{COMPANY_RC}</span>
            </span>
            <span className="text-slate-700 flex-shrink-0">|</span>
            <a
              href={CONTACT_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 text-[10px] lg:text-[11px] text-teal-300 font-mono whitespace-nowrap flex-shrink-0"
            >
              <Globe className="h-3 w-3 text-teal-400 flex-shrink-0" />
              <span>{CONTACT_INFO.website}</span>
            </a>
            <span className="text-slate-700 flex-shrink-0">|</span>
            <span className="flex items-center gap-1.5 text-[10px] lg:text-[11px] text-slate-400 font-mono min-w-0 truncate">
              <MapPin className="h-3 w-3 text-[#F28C28] flex-shrink-0" />
              <span className="truncate whitespace-nowrap">Port Harcourt, Nigeria</span>
            </span>
            <span className="text-slate-700 hidden xl:inline flex-shrink-0">|</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-[#F28C28] transition-colors hidden xl:flex items-center gap-1.5 text-[10px] lg:text-[11px] text-slate-300 font-mono whitespace-nowrap flex-shrink-0"
            >
              <Mail className="h-3 w-3 text-[#0B6670] flex-shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 lg:gap-4 text-[10px] lg:text-[11px] font-mono flex-shrink-0 whitespace-nowrap">
            <button
              onClick={() => logoUploadInputRef.current?.click()}
              className="text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap"
              title="Upload custom company logo"
            >
              <UploadCloud className="h-3 w-3 text-teal-400 flex-shrink-0" />
              <span>Upload Logo</span>
            </button>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 text-slate-300 font-medium whitespace-nowrap"
            >
              <Phone className="h-3 w-3 text-[#0B6670] flex-shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Interactive Header */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#071A2B]/95 shadow-xl border-b border-slate-800 backdrop-blur-md py-1.5 sm:py-2.5"
            : "bg-[#071A2B]/90 border-b border-slate-800/60 backdrop-blur-sm py-2 sm:py-3.5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-6 flex justify-between items-center gap-1.5 sm:gap-2.5 flex-nowrap min-w-0 overflow-hidden">
          
          {/* Company Brand Logo Link (Responsive, accessible, avoids nested button) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleNavClick("home")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNavClick("home");
              }
            }}
            className="outline-none text-left cursor-pointer focus:ring-1 focus:ring-[#0B6670] rounded-sm min-w-0 flex-shrink py-0.5"
            aria-label="Grow Dons Services Ltd Home"
          >
            <Logo className="h-7 xs:h-8 sm:h-9 md:h-10 lg:h-11" colorLight={true} showUploadTrigger={false} />
          </div>

          {/* Primary Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink-0 flex-nowrap">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-2 xl:px-2.5 py-1.5 rounded text-[11px] xl:text-xs font-mono tracking-wider transition-all duration-200 relative flex items-center gap-1 xl:gap-1.5 cursor-pointer whitespace-nowrap select-none flex-shrink-0 ${
                    isActive
                      ? "text-white bg-[#0B6670]/25 font-bold border-b-2 border-[#0B6670]"
                      : item.isChemicals
                      ? "text-teal-200 hover:text-white font-semibold hover:bg-slate-800/60"
                      : "text-slate-300 hover:text-white font-medium hover:bg-slate-800/40"
                  }`}
                >
                  <IconComponent
                    className={`h-3.5 w-3.5 flex-shrink-0 transition-colors ${
                      isActive
                        ? "text-[#0B6670]"
                        : item.isChemicals
                        ? "text-teal-400"
                        : "text-slate-400"
                    }`}
                  />
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Request a Quote (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <button
              onClick={() => {
                onNavigate("quote");
                onRequestQuote();
              }}
              className="px-3 xl:px-4 py-2 xl:py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-[11px] xl:text-xs font-mono tracking-wider uppercase transition-all duration-200 shadow-md flex items-center gap-1.5 xl:gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex-shrink-0"
            >
              <FileSpreadsheet className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-[#071A2B] flex-shrink-0" />
              <span className="whitespace-nowrap">Request a Quote</span>
            </button>
          </div>

          {/* Mobile Actions: Quote Pill & Hamburger Toggle (Rigidly constrained to prevent break out) */}
          <div className="flex items-center gap-1.5 xs:gap-2 lg:hidden flex-shrink-0 flex-nowrap">
            <button
              onClick={() => {
                onNavigate("quote");
                onRequestQuote();
              }}
              className="px-2 xs:px-2.5 sm:px-3 py-1.5 rounded bg-[#F28C28] active:bg-[#e07b16] text-[#071A2B] font-bold text-[10px] xs:text-[11px] sm:text-xs font-mono tracking-wider uppercase cursor-pointer flex items-center gap-1 shadow-sm whitespace-nowrap flex-shrink-0 min-h-[34px] sm:min-h-[38px]"
              aria-label="Request a Quote"
            >
              <FileSpreadsheet className="h-3 w-3 flex-shrink-0" />
              <span className="whitespace-nowrap">Quote</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700/60 focus:outline-none cursor-pointer flex items-center justify-center h-8.5 w-8.5 sm:h-9 sm:w-9 flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
            </button>
          </div>
        </div>
      </header>

      {/* Global Upload Toast */}
      {uploadSuccessToast && (
        <div className="bg-emerald-600 text-white text-xs font-mono py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-md">
          <Check className="h-3.5 w-3.5" />
          <span>Company logo updated and saved successfully!</span>
        </div>
      )}

      {/* Mobile Drawer Menu (Contained & Scrollable so it NEVER breaks out of phone screens) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#071A2B] border-b border-slate-800 px-3 xs:px-4 py-3 sm:py-4 space-y-2.5 sm:space-y-3 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-1 sm:space-y-1.5 pb-3 border-b border-slate-800">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`w-full text-left text-xs sm:text-sm font-mono tracking-wider py-2 sm:py-2.5 px-2.5 sm:px-3 rounded flex items-center justify-between cursor-pointer min-h-[44px] whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#0B6670]/30 text-white font-bold border-l-2 border-[#0B6670]"
                      : item.isChemicals
                      ? "text-teal-300 hover:text-white hover:bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 overflow-hidden">
                    <IconComponent
                      className={`h-4 w-4 flex-shrink-0 ${
                        isActive
                          ? "text-[#0B6670]"
                          : item.isChemicals
                          ? "text-teal-400"
                          : "text-slate-400"
                      }`}
                    />
                    <span className="truncate whitespace-nowrap text-xs sm:text-sm">{item.label}</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 ml-2" />
                </button>
              );
            })}

            {/* Quick Section Shortcuts */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col space-y-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate("about");
                  setTimeout(() => {
                    document.getElementById("operations-gallery")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                className="w-full text-left text-[11px] sm:text-xs font-mono tracking-wider py-2 px-2.5 sm:px-3 rounded text-slate-400 hover:text-white flex items-center justify-between cursor-pointer hover:bg-slate-800/30 min-h-[40px] whitespace-nowrap"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                  <Layers className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                  <span className="truncate whitespace-nowrap">Operations Gallery (About)</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-600 flex-shrink-0 ml-2" />
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate("home");
                  setTimeout(() => {
                    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                className="w-full text-left text-[11px] sm:text-xs font-mono tracking-wider py-2 px-2.5 sm:px-3 rounded text-slate-400 hover:text-white flex items-center justify-between cursor-pointer hover:bg-slate-800/30 min-h-[40px] whitespace-nowrap"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                  <HelpCircle className="h-3.5 w-3.5 text-[#F28C28] flex-shrink-0" />
                  <span className="truncate whitespace-nowrap">Frequently Asked Questions</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-600 flex-shrink-0 ml-2" />
              </button>
            </div>
          </div>

          {/* Logo Upload Option in Mobile Menu */}
          <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-slate-300 min-w-0 flex-1 overflow-hidden">
              <UploadCloud className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-400 flex-shrink-0" />
              <span className="truncate whitespace-nowrap">Company Brand Logo</span>
            </div>
            <button
              onClick={() => logoUploadInputRef.current?.click()}
              className="px-2 sm:px-2.5 py-1 rounded bg-[#0B6670] text-white font-mono text-[10px] sm:text-[11px] font-bold tracking-wider hover:bg-[#09525a] cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              Upload File
            </button>
          </div>

          {/* Mobile Direct RFQ Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onNavigate("quote");
              onRequestQuote();
            }}
            className="w-full py-2.5 sm:py-3 px-3 rounded-lg bg-[#F28C28] active:bg-[#e07b16] text-[#071A2B] font-bold text-xs sm:text-sm font-mono tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md min-h-[44px] whitespace-nowrap"
          >
            <FileSpreadsheet className="h-4 w-4 text-[#071A2B] flex-shrink-0" />
            <span className="whitespace-nowrap">Request a Quote (RFQ)</span>
          </button>

          {/* Direct Mobile Contact Strip */}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-slate-400">
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500 truncate whitespace-nowrap">{COMPANY_RC}</span>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-teal-400 hover:underline flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
            <div className="truncate whitespace-nowrap text-slate-500 text-[10px] sm:text-[11px]">
              {CONTACT_INFO.address}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
