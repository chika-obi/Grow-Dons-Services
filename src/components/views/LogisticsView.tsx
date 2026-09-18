import React from "react";
import { motion } from "motion/react";
import { LOGISTICS_CAPABILITIES, CONTACT_INFO } from "../../data";
import { SectionHeader } from "../common/SectionHeader";
import { Truck, ShieldCheck, MapPin, CheckCircle2, FileSpreadsheet, ArrowRight, Anchor, Navigation } from "lucide-react";

interface LogisticsViewProps {
  onRequestQuote: () => void;
}

export const LogisticsView: React.FC<LogisticsViewProps> = ({ onRequestQuote }) => {
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
            code="DIV-03"
            tag="Supporting Capability"
            title="Material Logistics &amp; Site Delivery"
            description="Coordinated transport and safe handling for supplied chemicals and industrial materials — ensuring timely arrival at shorebases, wellheads, and client production sites."
            dark={true}
          />
        </motion.div>

        {/* Core Capabilities with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LOGISTICS_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#091C2E] border border-slate-800 hover:border-teal-500/50 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2 font-mono text-xs text-teal-400 font-bold uppercase">
                    <Truck className="h-4 w-4 text-teal-400" />
                    <span>SUPPLY LOGISTICS</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500">CAP 0{idx + 1}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-sans">
                  {cap.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Coordination Scope:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {cap.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>Safe Handling Standard</span>
                <span className="text-teal-400 font-semibold">HSE Regulated</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Hubs & Staging Corridors with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-[#051320] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#F28C28] uppercase font-bold">
            <MapPin className="h-4 w-4 text-[#F28C28]" />
            <span>Regional Staging Corridors</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
            Strategically Positioned Across the Niger Delta Energy Hub
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-6 font-sans">
            Our delivery logistics coordinate dispatch from key operational corridors ensuring rapid response times to onshore drilling campaigns, swamp barge movements, and offshore platform supplies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_INFO.operatingHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#091C2E] border border-slate-800/90 text-xs font-mono flex items-center gap-3"
              >
                <div className="h-8 w-8 rounded-lg bg-[#051320] border border-slate-800 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Anchor className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-white font-bold">{hub}</div>
                  <div className="text-slate-400 text-[10px]">Active Dispatch Point</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Need integrated delivery with your chemical orders?
            </span>
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              Request Supply &amp; Logistics Quote
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
