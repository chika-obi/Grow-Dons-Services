import React from "react";

interface LogoProps {
  className?: string; // custom classes for scaling
  iconOnly?: boolean;  // toggle to show only the vector badge
  colorLight?: boolean; // toggle to shift text to white/orange for dark backgrounds
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-11",
  iconOnly = false,
  colorLight = true,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-Contrast Technical Vector Logo Mark */}
      <svg
        id="grow-dons-logo-badge"
        viewBox="0 0 100 100"
        className="h-full w-auto flex-shrink-0 filter drop-shadow-md"
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
          stroke={colorLight ? "#0B6670" : "#0B6670"}
          strokeWidth="3"
        />

        {/* Subtle Diagonal Technical Accent Line */}
        <line
          x1="8"
          y1="24"
          x2="92"
          y2="24"
          stroke="#0B6670"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.4"
        />

        {/* Left Letter 'G' - Petroleum Teal with Bright Cyan Highlight */}
        <path
          d="M44 26 H24 C17 26 12 31 12 38 V62 C12 69 17 74 24 74 H44 V52 H32 V60 H26 C23 60 21 58 21 54 V46 C21 42 23 40 26 40 H44 V26 Z"
          fill="#0B6670"
        />
        <path
          d="M44 26 H24 C17 26 12 31 12 38 V62 C12 69 17 74 24 74 H44 V52 H32 V60 H26 C23 60 21 58 21 54 V46 C21 42 23 40 26 40 H44 V26 Z"
          stroke="#14b8a6"
          strokeWidth="1.5"
        />

        {/* Right Letter 'D' - Crisp Bright White with High Visibility */}
        <path
          d="M52 26 H70 C79 26 86 33 86 42 V58 C86 67 79 74 70 74 H52 V26 Z M60 38 V62 H68 C73 62 76 59 76 54 V46 C76 41 73 38 68 38 H60 Z"
          fill="#FFFFFF"
        />

        {/* Central Safety Orange Flow / Industrial Droplet Accent */}
        <circle cx="48" cy="50" r="4.5" fill="#F28C28" />
        <line x1="43" y1="50" x2="53" y2="50" stroke="#F28C28" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="48" y1="45" x2="48" y2="55" stroke="#F28C28" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bottom Petroleum Indicator Dot */}
        <circle cx="50" cy="85" r="2.5" fill="#14b8a6" />
      </svg>

      {/* Typography Brand Label */}
      {!iconOnly && (
        <div className="flex flex-col select-none justify-center">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={`font-display text-lg sm:text-xl font-extrabold tracking-tight ${
                colorLight ? "text-white" : "text-[#071A2B]"
              }`}
            >
              GROW DONS
            </span>
            <span
              className={`font-display text-xs sm:text-sm font-semibold tracking-wider ${
                colorLight ? "text-teal-300" : "text-[#0B6670]"
              }`}
            >
              SERVICES LTD
            </span>
          </div>
          <span
            className={`font-mono text-[9px] sm:text-[10px] tracking-wider uppercase leading-tight mt-1 font-medium ${
              colorLight ? "text-[#F28C28]" : "text-[#0B6670]"
            }`}
          >
            Oilfield Chemicals &amp; Technical Supply
          </span>
        </div>
      )}
    </div>
  );
};
