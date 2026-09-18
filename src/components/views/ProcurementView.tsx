import React from "react";
import { motion } from "motion/react";
import { PROCUREMENT_CATEGORIES } from "../../data";
import { SectionHeader } from "../common/SectionHeader";
import {
  Layers,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Search,
  CheckCheck,
  Truck,
  Package,
} from "lucide-react";

interface ProcurementViewProps {
  onRequestQuote: (category?: string) => void;
}

export const ProcurementView: React.FC<ProcurementViewProps> = ({ onRequestQuote }) => {
  const steps = [
    { num: "01", title: "Specification Request", desc: "Receipt of exact technical requirements, grades, tolerances, and quantities." },
    { num: "02", title: "Qualified Sourcing", desc: "Leveraging audited manufacturers and direct supply relationships across global hubs." },
    { num: "03", title: "QA/QC Verification", desc: "Inspection of material test reports (MTR), Mill Certificates, and technical compliance." },
    { num: "04", title: "Site Delivery", desc: "Staging and transportation to Port Harcourt, Onne, Warri, or client project gate." },
  ];

  return (
    <div className="w-full bg-[#071A2B] text-white pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Industrial Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Page Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            code="DIV-02"
            tag="Secondary Sourcing Capability"
            title="Technical Industrial Procurement"
            description="Disciplined procurement of high-specification equipment, piping, safety materials, and operational spares supporting oilfield installations and plant infrastructure."
            dark={true}
          />
        </motion.div>

        {/* Technical Procurement Methodology Bar with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-[#091C2E] border border-slate-800 rounded-xl p-6 mb-12 shadow-xl"
        >
          <div className="text-xs font-mono text-[#F28C28] uppercase font-bold tracking-wider mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F28C28]" />
            <span>Technical Sourcing Methodology</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                className="border-l-2 border-[#0B6670] pl-4"
              >
                <div className="font-mono text-xs text-teal-400 font-bold">{step.num}</div>
                <div className="font-display text-sm font-bold text-white mt-1">{step.title}</div>
                <div className="font-sans text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 6 Procurement Categories Matrix with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCUREMENT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#091C2E] border border-slate-800 hover:border-teal-500/50 rounded-xl p-6 flex flex-col justify-between shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="font-mono text-[10px] text-teal-400 uppercase font-bold tracking-wider">
                    CATEGORY 0{idx + 1}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[#F28C28]">
                    <Layers className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed font-sans">
                  {cat.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
                    Scope of Supply:
                  </p>
                  {cat.scopeItems.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onRequestQuote(cat.title)}
                  className="w-full py-2.5 rounded bg-slate-800 hover:bg-[#F28C28] text-slate-200 hover:text-[#071A2B] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileSpreadsheet className="h-3.5 w-3.5" />
                  <span>Request RFQ for {cat.title.split(" ")[0]}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Verification Strip with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-6 rounded-2xl bg-[#051320] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 flex-shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">
                Traceable Mill Certification &amp; Inspection Reports
              </h4>
              <p className="text-xs text-slate-300 font-sans mt-0.5">
                All procured mechanical, piping, and electrical items are delivered with complete manufacturer documentation, EN 10204 3.1 material test reports (MTR), and inspection dossiers.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestQuote()}
            className="px-5 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-mono font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer shadow-md flex-shrink-0"
          >
            Submit Technical Bill of Materials
          </button>
        </motion.div>

      </div>
    </div>
  );
};
