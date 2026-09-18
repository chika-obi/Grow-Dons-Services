import React from "react";
import { IMAGES, COMPANY_NAME, COMPANY_RC } from "../data";
import { FlaskConical, ArrowRight, FileSpreadsheet, ShieldCheck, CheckCircle2, Droplets, Layers, Truck } from "lucide-react";

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const elementPos = el.getBoundingClientRect().top;
      const offsetPos = elementPos + window.scrollY - offset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-[#071A2B] pt-24 pb-14 sm:pb-20">
      {/* Background Industrial Chemical Backdrop with High Contrast Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.chemicals}
          alt="Grow Dons Industrial Chemical Operations and Supply"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25 filter saturate-150"
        />
        {/* Color Gradient Overlay: Deep Navy + Petroleum Teal Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/95 to-[#071A2B]/75" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071A2B] to-transparent" />
        
        {/* Subtle Molecular & Grid Accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B667015_1px,transparent_1px),linear-gradient(to_bottom,#0B667015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-grow flex flex-col justify-center py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Messaging Column */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Identity & Registration Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B6670]/25 border border-[#0B6670]/50 text-slate-200 text-xs font-mono tracking-wider uppercase mb-5 self-start">
              <span className="h-2 w-2 rounded-full bg-[#F28C28]" />
              <span className="font-bold text-white tracking-widest">GROW DONS SERVICES LTD</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300 font-medium">{COMPANY_RC}</span>
            </div>

            {/* Exact Required Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight mb-5">
              Oilfield Chemicals. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-white">
                Technical Supply.
              </span>{" "}
              <span className="text-[#F28C28]">Reliable Delivery.</span>
            </h1>

            {/* Exact Required Supporting Message */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed mb-8">
              Specialized chemical products and technical supply solutions for drilling, completion, production and industrial operations — supported by strategic procurement and dependable logistics.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection("#chemicals")}
                className="px-6 py-3.5 rounded bg-[#0B6670] hover:bg-[#12828e] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg flex items-center gap-2.5 cursor-pointer hover:shadow-teal-900/40 hover:-translate-y-0.5"
              >
                <FlaskConical className="h-4 w-4 text-[#F28C28]" />
                <span>Explore Chemicals</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-extrabold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg flex items-center gap-2.5 cursor-pointer hover:shadow-orange-950/40 hover:-translate-y-0.5"
              >
                <FileSpreadsheet className="h-4 w-4 text-[#071A2B]" />
                <span>Request a Quote</span>
              </button>

              {/* Secondary Supporting Procurement link */}
              <button
                onClick={() => scrollToSection("#procurement")}
                className="px-4 py-3.5 rounded border border-slate-700/80 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-colors"
              >
                Technical Procurement
              </button>
            </div>

            {/* Core Capability Badges (Factual & Non-Percentage) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded bg-[#0B6670]/20 border border-[#0B6670]/40 flex items-center justify-center flex-shrink-0 text-teal-400">
                  <Droplets className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold font-display uppercase tracking-wider">Oilfield Chemicals</div>
                  <div className="text-slate-400 text-xs mt-0.5">Drilling, completion &amp; production fluids</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded bg-slate-800/60 border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#F28C28]">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold font-display uppercase tracking-wider">Strategic Sourcing</div>
                  <div className="text-slate-400 text-xs mt-0.5">Industrial valves, pipes &amp; PPE consumables</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded bg-slate-800/60 border border-slate-700 flex items-center justify-center flex-shrink-0 text-teal-300">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold font-display uppercase tracking-wider">Reliable Logistics</div>
                  <div className="text-slate-400 text-xs mt-0.5">Direct shorebase &amp; site delivery coordination</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Chemical Specification Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#071A2B]/90 border border-slate-700/80 rounded-xl p-6 shadow-2xl backdrop-blur-md relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">
                    Specification Focus
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#F28C28] font-bold">API &amp; ISO Standards</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-lg">
                  <div className="text-teal-400 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Drilling Fluids &amp; Minerals
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    API RP 13A compliant bentonite, barite weighting agents, and shale stabilizers for wellbore hydrostatic integrity.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-lg">
                  <div className="text-teal-400 font-bold uppercase tracking-wider text-[11px] mb-1">
                    Clear Completion Brines
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    High-density calcium chloride and calcium bromide solutions engineered for formation protection.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-lg">
                  <div className="text-[#F28C28] font-bold uppercase tracking-wider text-[11px] mb-1">
                    Production &amp; Flow Assurance
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Demulsifiers, corrosion inhibitors, biocides, and scale suppressors for pipeline and surface facilities.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-teal-400" />
                  <span>TDS &amp; SDS Provided</span>
                </span>
                <span className="text-slate-400 font-mono">Port Harcourt Hub</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
