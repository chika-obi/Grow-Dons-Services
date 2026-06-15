import React from "react";

interface LogoProps {
  className?: string; // custom classes for scaling
  iconOnly?: boolean;  // toggle to show only the vector badge
  colorLight?: boolean; // toggle to shift text to white/orange for dark backgrounds
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-12",
  iconOnly = false,
  colorLight = false,
}) => {
  const brandBlue = "#003049";
  const brandGrey = "#334155";
  const accentOrange = "#f77f00";
  const lightColor = "#ffffff";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Badge */}
      <svg
        id="grow-dons-logo-badge"
        viewBox="0 0 512 280"
        className="h-full w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left 'G' - Blue */}
        <path
          d="M210 50 H120 C70 50, 40 85, 40 140 C40 195, 70 230, 120 230 H210 V135 H155 V175 H175 V185 H125 C100 185, 88 170, 88 140 C88 110, 100 95, 125 95 H210 V50Z"
          fill="#005B94"
          stroke="#004d7c"
          strokeWidth="1.5"
        />

        {/* Right 'D' - Grey */}
        <path
          d="M302 50 H392 C442 50, 472 85, 472 140 C472 195, 442 230, 392 230 H302 V50Z M348 95 V185 H387 C412 185, 424 170, 424 140 C424 110, 412 95, 387 95 H348Z"
          fill="#334155"
          stroke="#1e293b"
          strokeWidth="1.5"
        />

        {/* Pipe Assembly in the Center Gap */}
        {/* Left Pipe Flange */}
        <rect x="180" y="115" width="8" height="50" rx="2" fill="#0f172a" />
        <rect x="188" y="125" width="22" height="30" fill="#475569" stroke="#0f172a" strokeWidth="2" />
        
        {/* Right Pipe Flange */}
        <rect x="324" y="115" width="8" height="50" rx="2" fill="#0f172a" />
        <rect x="302" y="125" width="22" height="30" fill="#475569" stroke="#0f172a" strokeWidth="2" />

        {/* Center Main Valve Body */}
        <rect x="232" y="120" width="48" height="40" rx="4" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
        {/* Flanges connecting center body to left/right */}
        <rect x="210" y="130" width="22" height="20" fill="#475569" stroke="#0f172a" strokeWidth="2" />
        <rect x="280" y="130" width="22" height="20" fill="#475569" stroke="#0f172a" strokeWidth="2" />
        
        {/* Valve Bonnet & Stem */}
        <rect x="248" y="98" width="16" height="22" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
        <rect x="252" y="80" width="8" height="18" fill="#64748b" />

        {/* Top Handwheel / Valve Handle */}
        <ellipse cx="256" cy="80" rx="24" ry="10" fill="#f77f00" stroke="#0f172a" strokeWidth="2.5" />
        {/* Inner parts of the wheel */}
        <circle cx="256" cy="80" r="4" fill="#0f172a" />
        <line x1="232" y1="80" x2="280" y2="80" stroke="#0f172a" strokeWidth="2" />
        <line x1="256" y1="70" x2="256" y2="90" stroke="#0f172a" strokeWidth="2" />
      </svg>

      {/* Typography Label */}
      {!iconOnly && (
        <div className="flex flex-col select-none">
          <span
            className={`font-display text-lg font-bold tracking-wider leading-none ${
              colorLight ? "text-white" : "text-[#005B94]"
            }`}
          >
            GROW DONS
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <div className={`h-[1px] flex-grow ${colorLight ? "bg-[#fcbf49]" : "bg-[#f77f00]"}`} />
            <span
              className={`font-sans text-[10px] font-semibold tracking-[0.25em] leading-none uppercase ${
                colorLight ? "text-[#fcbf49]" : "text-slate-600"
              }`}
            >
              SERVICES
            </span>
            <div className={`h-[1px] flex-grow ${colorLight ? "bg-[#fcbf49]" : "bg-[#f77f00]"}`} />
          </div>
        </div>
      )}
    </div>
  );
};
