import React from "react";
import { PROCUREMENT_CATEGORIES } from "../data";
import {
  Layers,
  FlaskConical,
  Filter,
  Cpu,
  Shield,
  Wrench,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  ClipboardCheck,
  Building2,
  Clock
} from "lucide-react";

interface ProcurementSectionProps {
  onRequestQuote: (categoryOrItem?: string) => void;
}

export const ProcurementSection: React.FC<ProcurementSectionProps> = ({ onRequestQuote }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "FlaskConical":
        return <FlaskConical className="h-5 w-5" />;
      case "Layers":
        return <Layers className="h-5 w-5" />;
      case "Filter":
        return <Filter className="h-5 w-5" />;
      case "Cpu":
        return <Cpu className="h-5 w-5" />;
      case "Shield":
        return <Shield className="h-5 w-5" />;
      default:
        return <Wrench className="h-5 w-5" />;
    }
  };

  const capabilities = [
    {
      title: "Technical Specification Verification",
      desc: "Cross-checking vendor mill certificates, API tolerances, and chemical assay reports against operator specifications."
    },
    {
      title: "Direct Manufacturer Sourcing",
      desc: "Established supply lines with certified international chemical producers and authorized industrial distributors."
    },
    {
      title: "Prompt RFQ Turnaround",
      desc: "Dedicated commercial desk generating structured commercial bids with firm validity and delivery timelines."
    },
    {
      title: "Quality & Inspection Oversight",
      desc: "Material inspection prior to loading, packing integrity checks, and full traceability documentation."
    },
    {
      title: "Integrated Field Logistics",
      desc: "Seamless transition from procurement to transport and gate-clearance at operational client bases."
    }
  ];

  return (
    <section id="procurement" className="py-16 sm:py-24 bg-white text-[#17232D] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071A2B]/5 border border-[#071A2B]/10 text-[#071A2B] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Layers className="h-3.5 w-3.5 text-[#F28C28]" />
            <span>STRATEGIC SOURCING CAPABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#071A2B]">
            Technical Procurement &amp; Sourcing
          </h2>
          <div className="h-1 w-20 bg-[#F28C28] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Strategic sourcing for oilfield, industrial, and operational requirements — connecting operators with verified equipment, certified materials, and critical project consumables.
          </p>
        </div>

        {/* 6 Procurement Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROCUREMENT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#F5F7F6] border border-slate-200/90 rounded-xl p-6 flex flex-col justify-between hover:border-[#0B6670] hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0B6670] group-hover:bg-[#071A2B] group-hover:text-white transition-colors mb-4">
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="text-base font-display font-bold text-[#071A2B] mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/70">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Scope of Supply:
                  </span>
                  {cat.scopeItems.map((item, idx) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="text-[#0B6670] font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onRequestQuote(cat.title)}
                  className="text-xs font-bold text-[#0B6670] hover:text-[#071A2B] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Submit Category RFQ</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#F28C28]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing Capabilities Bento Box */}
        <div className="bg-[#071A2B] text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F28C28] block mb-2">
                Supply Chain Assurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight mb-4">
                Disciplined Technical Procurement
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                We eliminate procurement friction by enforcing strict technical qualification on all materials, from downhole completion brine salts to certified flowline valves.
              </p>
              
              <button
                onClick={() => onRequestQuote("Technical Procurement Project")}
                className="px-5 py-3 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <FileSpreadsheet className="h-4 w-4" />
                <span>Submit Bill of Materials (RFQ)</span>
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#F28C28]" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
