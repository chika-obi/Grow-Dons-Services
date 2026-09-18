import React from "react";

interface SectionHeaderProps {
  code?: string;
  tag: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  code,
  tag,
  title,
  description,
  dark = false,
  align = "left",
}) => {
  return (
    <div className={`mb-10 sm:mb-12 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {/* Technical Code & Tag */}
      <div className={`inline-flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        {code && (
          <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded bg-[#0B6670]/15 text-[#0B6670] font-bold border border-[#0B6670]/30">
            {code}
          </span>
        )}
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28]" />
          <span
            className={`font-mono text-xs tracking-widest uppercase font-semibold ${
              dark ? "text-[#F28C28]" : "text-[#0B6670]"
            }`}
          >
            {tag}
          </span>
        </div>
      </div>

      {/* Main Display Heading */}
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-[#071A2B]"
        }`}
      >
        {title}
      </h2>

      {/* Technical Description */}
      {description && (
        <p
          className={`mt-3 font-sans text-sm sm:text-base leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}

      {/* Subtle Engineered Line */}
      <div className={`mt-4 flex items-center gap-1 ${align === "center" ? "justify-center" : ""}`}>
        <div className="h-0.5 w-12 bg-[#0B6670]" />
        <div className="h-0.5 w-3 bg-[#F28C28]" />
        <div className="h-0.5 w-1.5 bg-slate-400" />
      </div>
    </div>
  );
};
