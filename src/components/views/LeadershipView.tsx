import React from "react";
import { motion } from "motion/react";
import { LEADERSHIP_ROLES, COMPANY_RC, CONTACT_INFO } from "../../data";
import { SectionHeader } from "../common/SectionHeader";
import { UserCheck, ShieldCheck, CheckCircle2, Award, Building2, Briefcase, Mail } from "lucide-react";

export const LeadershipView: React.FC = () => {
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
            code="GOV-01"
            tag="Executive Governance"
            title="Corporate Leadership"
            description="Grow Dons Services Ltd is directed by an experienced executive board providing strategic oversight, technical specification adherence, and commercial integrity across Nigeria's energy sector."
            dark={true}
          />
        </motion.div>

        {/* Corporate Oversight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-12 rounded-xl bg-[#091C2E] border border-slate-800 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-[#0B6670]/20 border border-[#0B6670]/40 flex items-center justify-center text-[#0B6670]">
              <ShieldCheck className="h-6 w-6 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-teal-400 font-bold">
                <span>STATUTORY INCORPORATION</span>
                <span>•</span>
                <span>{COMPANY_RC}</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-0.5">
                Executive management structure verified under the Corporate Affairs Commission of the Federal Republic of Nigeria.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800">
              <Building2 className="h-3.5 w-3.5 text-[#F28C28]" />
              <span>Port Harcourt Operational HQ</span>
            </span>
          </div>
        </motion.div>

        {/* 4 Executive Positions Grid with Portraits & Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {LEADERSHIP_ROLES.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#091C2E] border border-slate-800/90 hover:border-[#0B6670]/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Executive Portrait & Header Banner */}
                <div className="relative bg-gradient-to-r from-[#051320] to-[#0b243b] p-6 sm:p-7 border-b border-slate-800 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                  
                  {/* Portrait Image Container */}
                  <div className="relative flex-shrink-0">
                    <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-xl overflow-hidden border-2 border-[#0B6670]/60 shadow-lg bg-slate-900 group-hover:border-teal-400 transition-colors">
                      {role.imageUrl ? (
                        <img
                          src={role.imageUrl}
                          alt={`${role.name} - ${role.title}`}
                          className="h-full w-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-slate-800 text-slate-500">
                          <UserCheck className="h-10 w-10 text-[#0B6670]" />
                        </div>
                      )}
                    </div>
                    {/* Active Leadership Badge */}
                    <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#071A2B] border border-teal-500/50 shadow-md">
                      <Award className="h-4 w-4 text-[#F28C28]" />
                    </div>
                  </div>

                  {/* Title & Name info */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F28C28]/15 border border-[#F28C28]/40 mb-2 font-mono text-[11px] font-bold text-[#F28C28] uppercase tracking-wider">
                      <Briefcase className="h-3 w-3" />
                      <span>{role.title}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-teal-200 transition-colors">
                      {role.name}
                    </h3>
                    
                    <p className="font-mono text-xs text-teal-400 font-semibold mt-1">
                      {role.executiveArea}
                    </p>

                    <div className="mt-3 flex items-center justify-center sm:justify-start gap-3 font-mono text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 text-emerald-400" />
                        <span>Corporate Board</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content & Scope */}
                <div className="p-6 sm:p-7 space-y-5">
                  {role.profileNote && (
                    <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed bg-[#051320] p-3.5 rounded-xl border border-slate-800/80 border-l-2 border-l-[#0B6670]">
                      "{role.profileNote}"
                    </blockquote>
                  )}

                  {/* Core Responsibilities */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold flex items-center gap-2">
                      <span>Core Operational Portfolio:</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#0B6670] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Credibility Strip */}
              <div className="px-6 sm:px-7 py-4 bg-[#051320] border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0B6670]" />
                  <span>Verified Executive Role</span>
                </span>
                <span className="text-[#0B6670] font-semibold">Grow Dons Services Ltd</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Governance Code Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-16 rounded-xl border border-slate-800 bg-[#091C2E]/60 p-6 text-center max-w-3xl mx-auto"
        >
          <h4 className="font-display text-base font-bold text-white mb-2">
            Governance &amp; Accountability Principle
          </h4>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            The Executive Committee oversees the safe sourcing, certified quality control, and dependable dispatch of specialized oilfield chemicals and technical procurement packages across onshore, swamp, and offshore operational environments in Nigeria.
          </p>
        </motion.div>

      </div>
    </div>
  );
};
