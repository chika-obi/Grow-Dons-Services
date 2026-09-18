import React from "react";
import { LOGISTICS_CAPABILITIES } from "../data";
import { Truck, ShieldAlert, MapPin, PackageCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface LogisticsSectionProps {
  onRequestQuote: (context?: string) => void;
}

export const LogisticsSection: React.FC<LogisticsSectionProps> = ({ onRequestQuote }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Truck":
        return <Truck className="h-5 w-5" />;
      case "ShieldAlert":
        return <ShieldAlert className="h-5 w-5" />;
      case "MapPin":
        return <MapPin className="h-5 w-5" />;
      default:
        return <PackageCheck className="h-5 w-5" />;
    }
  };

  return (
    <section id="logistics" className="py-14 sm:py-20 bg-[#F5F7F6] text-[#17232D] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B6670]/10 border border-[#0B6670]/20 text-[#0B6670] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Truck className="h-3.5 w-3.5 text-[#0B6670]" />
            <span>SUPPORTING CAPABILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-[#071A2B]">
            Material &amp; Chemical Logistics
          </h2>
          <div className="h-1 w-16 bg-[#F28C28] mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            Supporting dependable supply through coordinated transportation, dedicated hazardous chemical handling, and timely shorebase delivery across Nigerian operations.
          </p>
        </div>

        {/* 4 Logistics Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {LOGISTICS_CAPABILITIES.map((log) => (
            <div
              key={log.id}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#0B6670] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="h-9 w-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0B6670] mb-3.5">
                  {getIcon(log.iconName)}
                </div>
                <h3 className="text-sm font-display font-bold text-[#071A2B] mb-2">
                  {log.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {log.description}
                </p>

                <ul className="space-y-1.5 pt-2.5 border-t border-slate-100 text-[11px] text-slate-600">
                  {log.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#0B6670] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Shorebase Hubs Bar */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono font-bold uppercase tracking-wider text-slate-400">
              Primary Regional Hubs:
            </span>
            <span className="px-2.5 py-1 bg-slate-100 rounded text-slate-800 font-medium">
              Port Harcourt Central Depot
            </span>
            <span className="px-2.5 py-1 bg-slate-100 rounded text-slate-800 font-medium">
              Onne Free Zone Corridor
            </span>
            <span className="px-2.5 py-1 bg-slate-100 rounded text-slate-800 font-medium">
              Warri Shorebase Terminals
            </span>
          </div>

          <button
            onClick={() => onRequestQuote("Logistics Coordination Inquiry")}
            className="text-xs font-bold text-[#0B6670] hover:text-[#071A2B] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Delivery Inquiry</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#F28C28]" />
          </button>
        </div>

      </div>
    </section>
  );
};
