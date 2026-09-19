import React from "react";
import { Logo } from "../Logo";
import { COMPANY_NAME, COMPANY_RC, CONTACT_INFO, COMPANY_IDENTITY } from "../../data";
import { ViewMode } from "../../types";
import { Mail, Phone, MapPin, ArrowUp, MessageSquare, FileSpreadsheet, ArrowRight, ShieldCheck, Globe, ExternalLink } from "lucide-react";

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleSectionClick = (sectionId: string) => {
    onNavigate("home");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const navLinks: { label: string; view?: ViewMode; sectionId?: string }[] = [
    { label: "Home Overview", view: "home" },
    { label: "Chemicals Catalogue", view: "chemicals" },
    { label: "Technical Procurement", view: "procurement" },
    { label: "Material Logistics", view: "logistics" },
    { label: "About & HSE Standards", view: "about" },
    { label: "Corporate Leadership", view: "leadership" },
    { label: "Operations Gallery", sectionId: "operations-gallery" },
    { label: "Frequently Asked Questions (FAQ)", sectionId: "faq" },
    { label: "Quotation Portal (RFQ)", view: "quote" },
  ];

  return (
    <footer className="bg-[#051320] text-white pt-16 pb-12 border-t border-slate-800 relative">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Information Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start mb-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Identity & Corporate Mission (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Logo className="h-11" colorLight={true} />
            
            <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed mt-1 max-w-md">
              Indigenous technical chemical supplier specializing in drilling fluid additives, completion brines, and production treatment chemicals — backed by disciplined technical procurement and regional logistics coordination.
            </p>
            
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mt-2">
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                <span className="h-2 w-2 rounded-full bg-[#0B6670]" />
                <span>Registration:</span>
                <strong className="text-white font-bold">{COMPANY_RC}</strong>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded border border-slate-800">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Incorporated in Nigeria</span>
              </div>
              <a
                href={CONTACT_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#0B6670]/20 hover:bg-[#0B6670]/40 px-3 py-1.5 rounded border border-[#0B6670]/60 text-teal-300 hover:text-white transition-colors"
              >
                <Globe className="h-3.5 w-3.5 text-teal-400" />
                <span>{CONTACT_INFO.website}</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-3">
              <button
                onClick={() => {
                  onNavigate("quote");
                  onRequestQuote();
                }}
                className="px-4 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <FileSpreadsheet className="h-4 w-4" />
                <span>Request a Quote</span>
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw || "2348128751360"}?text=Hello%20Grow%20Dons%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20chemical%20supply.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded border border-emerald-600/60 bg-emerald-950/40 text-emerald-300 font-mono font-medium text-xs flex items-center gap-1.5 hover:bg-emerald-900/50 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Desk ({CONTACT_INFO.whatsapp})</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Directory (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F28C28] font-bold mb-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 bg-[#F28C28] rounded-full" />
              <span>Navigation Directory</span>
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.sectionId) {
                      handleSectionClick(link.sectionId);
                    } else if (link.view) {
                      onNavigate(link.view);
                    }
                  }}
                  className="text-left hover:text-[#F28C28] transition-colors py-1 flex items-center gap-1.5 group cursor-pointer"
                >
                  <ArrowRight className="h-3 w-3 text-slate-600 group-hover:text-[#F28C28] transition-colors" />
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Verified Office Headquarters & Contact (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0B6670] font-bold mb-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 bg-[#0B6670] rounded-full" />
              <span>Headquarters &amp; Contact</span>
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#F28C28] flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p className="font-semibold text-white">Operational Headquarters</p>
                  <p className="text-slate-400 mt-0.5">{CONTACT_INFO.address}</p>
                </div>
              </div>

              {/* Official Corporate Website */}
              <div className="flex items-center gap-2.5 bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <Globe className="h-4 w-4 text-[#F28C28] flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px]">Official Corporate Website:</p>
                  <a
                    href={CONTACT_INFO.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-teal-300 hover:text-[#F28C28] font-bold text-xs transition-colors flex items-center gap-1"
                  >
                    <span>{CONTACT_INFO.website}</span>
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#0B6670] flex-shrink-0" />
                <div>
                  <p className="text-slate-400">Commercial Phone &amp; WhatsApp:</p>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="font-mono text-white hover:text-[#F28C28] font-bold transition-colors block"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  {CONTACT_INFO.phoneSecondary && (
                    <a
                      href={`tel:${CONTACT_INFO.phoneSecondaryRaw}`}
                      className="font-mono text-slate-400 hover:text-slate-200 text-xs transition-colors block mt-0.5"
                    >
                      Alt: {CONTACT_INFO.phoneSecondary}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0B6670] flex-shrink-0" />
                <div>
                  <p className="text-slate-400">Direct Inquiries:</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-mono text-white hover:text-[#F28C28] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-mono text-[11px] text-slate-400">Operating Corridors:</p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {CONTACT_INFO.operatingHubs.map((hub) => (
                    <span
                      key={hub}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {hub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Web Address & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. Registered in Nigeria ({COMPANY_RC}) &bull;{" "}
            <a 
              href={CONTACT_INFO.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-400 hover:text-white underline transition-colors"
            >
              {CONTACT_INFO.website}
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="p-1 rounded bg-slate-800 group-hover:bg-[#0B6670] text-slate-300 group-hover:text-white transition-colors">
              <ArrowUp className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
