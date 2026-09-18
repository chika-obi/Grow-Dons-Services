import React from "react";
import { ShieldCheck, FileCheck, AlertTriangle, CheckCircle2, FileSpreadsheet, Sparkles } from "lucide-react";

export const HseQualitySection: React.FC = () => {
  const principles = [
    {
      title: "Safe Chemical Handling Protocols",
      desc: "Mandatory personal protective equipment (PPE), secondary containment for liquid chemicals, and clear hazard labeling compliant with GHS standards on all packages."
    },
    {
      title: "Comprehensive QA/QC Documentation",
      desc: "Every chemical shipment is accompanied by verified Technical Data Sheets (TDS), Safety Data Sheets (SDS), and batch-specific Certificates of Analysis (CoA)."
    },
    {
      title: "Strict Supplier Verification",
      desc: "Upstream chemical suppliers undergo rigorous qualification audits, ensuring consistent formulation purity, specific gravity compliance, and batch stability."
    },
    {
      title: "Environmental & Spill Containment",
      desc: "Storage and haulage assets are equipped with containment berms, neutralizing agents, and rapid spill response kits preventing environmental discharge."
    },
    {
      title: "Contractual Compliance & Local Content",
      desc: "Operating in strict alignment with Nigerian statutory regulations, NCDMB indigenous participation guidelines, and client site-specific HSE induction criteria."
    },
    {
      title: "Continuous Hazard Assessment",
      desc: "Pre-dispatch risk assessments and route transit planning ensuring safe delivery of bulk minerals, corrosive salts, and flammables to drilling locations."
    }
  ];

  return (
    <section id="hse-quality" className="py-16 sm:py-24 bg-white text-[#17232D] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B6670]/10 border border-[#0B6670]/20 text-[#0B6670] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-[#0B6670]" />
            <span>HSE &amp; QUALITY POLICY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#071A2B]">
            HSE Commitment &amp; Quality Assurance
          </h2>
          <div className="h-1 w-20 bg-[#F28C28] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Zero compromise on safety, personnel protection, and chemical specification adherence across all storage, blending, and transport operations.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {principles.map((pr, idx) => (
            <div
              key={idx}
              className="bg-[#F5F7F6] border border-slate-200/90 rounded-xl p-6 hover:border-[#0B6670] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#F28C28]" />
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    Standard 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-[#071A2B] mb-2">
                  {pr.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pr.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-[#0B6670] font-semibold">
                <CheckCircle2 className="h-4 w-4 text-[#0B6670]" />
                <span>Verified Compliance</span>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Reassurance Banner */}
        <div className="bg-[#071A2B] text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-display font-bold">
              Require Technical or Safety Data Sheets (TDS / SDS)?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our technical team forwards verified manufacturer specifications and safety guidelines for all chemical lots upon request.
            </p>
          </div>

          <a
            href="mailto:growdonsservicesltd@gmail.com?subject=Request%20for%20TDS%20and%20SDS%20Documentation"
            className="px-5 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs uppercase tracking-wider flex-shrink-0 transition-colors cursor-pointer"
          >
            Request Documentation
          </a>
        </div>

      </div>
    </section>
  );
};
