import React from "react";
import { LEADERSHIP_ROLES } from "../data";
import { Users, Briefcase, CheckCircle2, ShieldCheck, Building2, UserCheck } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#F5F7F6] text-[#17232D] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071A2B]/5 border border-[#071A2B]/10 text-[#071A2B] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Users className="h-3.5 w-3.5 text-[#0B6670]" />
            <span>EXECUTIVE GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#071A2B]">
            Corporate Leadership
          </h2>
          <div className="h-1 w-20 bg-[#F28C28] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Governed by experienced executives providing strategic guidance, commercial coordination, technical execution, and rigorous supply chain management.
          </p>
        </div>

        {/* 4 Core Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {LEADERSHIP_ROLES.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#0B6670] hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header with Name, Title & Executive Area */}
                <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#0B6670] font-bold block mb-1">
                      {role.executiveArea}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#071A2B]">
                      {role.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-full bg-[#F28C28]/10 text-[#c2650d] text-xs font-bold font-mono tracking-wide uppercase">
                      <span>{role.title}</span>
                    </div>
                  </div>
                  <div className="h-11 w-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#071A2B] flex-shrink-0">
                    <UserCheck className="h-5 w-5 text-[#0B6670]" />
                  </div>
                </div>

                {/* Profile Note */}
                {role.profileNote && (
                  <p className="text-xs text-slate-600 leading-relaxed mb-5 italic bg-slate-50 p-3 rounded-lg border border-slate-100">
                    "{role.profileNote}"
                  </p>
                )}

                {/* Core Responsibilities Bullet Points */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-[#F28C28]" />
                    <span>Key Executive Responsibilities</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#0B6670] font-bold mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status footer for CMS structure */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Executive Governance Board</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Grow Dons Services Ltd
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note for Future CMS Updates */}
        <div className="max-w-2xl mx-auto text-center mt-10 text-xs text-slate-500">
          Executive leadership positions established in accordance with corporate governance policies. Additional biographical details may be updated via corporate releases.
        </div>

      </div>
    </section>
  );
};
