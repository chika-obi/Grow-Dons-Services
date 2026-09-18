import React from "react";
import { motion } from "motion/react";
import {
  COMPANY_NAME,
  COMPANY_RC,
  CONTACT_INFO,
  CORE_VALUES,
  INDUSTRIES_SERVED,
} from "../../data";
import { SectionHeader } from "../common/SectionHeader";
import { ShieldCheck, Award, Target, Eye, CheckCircle2, FileText, MapPin, HeartHandshake, ShieldAlert } from "lucide-react";

export const AboutView: React.FC = () => {
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
            code="CORP-01"
            tag="Corporate Profile &amp; Governance"
            title="About Grow Dons Services Ltd"
            description="An indigenous Nigerian corporate entity established to deliver high-performance oilfield chemicals and disciplined technical supply to the energy and industrial sectors."
            dark={true}
          />
        </motion.div>

        {/* Corporate Overview & Registration Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-8 bg-[#091C2E] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-teal-400 uppercase font-bold">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Registered Corporate Entity</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Dedicated to Technical Chemical Supply Integrity
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-sans">
                <strong>{COMPANY_NAME}</strong> (Corporate Affairs Commission Registration: <strong>{COMPANY_RC}</strong>) is an indigenous technical supply company headquartered in Port Harcourt, Rivers State. 
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">
                We specialize primarily in the supply of high-grade oilfield chemicals — from drilling fluid additives and clear completion brines to continuous production treaters and industrial solvents. Our core chemical operations are reinforced by dedicated technical procurement capabilities and regional delivery coordination.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#F28C28]" />
                <span>Headquarters: Port Harcourt, Rivers State, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision (4 cols) with Motion */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="p-6 rounded-2xl bg-[#091C2E] border border-slate-800 flex-1 shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#F28C28] font-bold uppercase mb-2">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To be the preferred indigenous technical supply partner for energy and industrial operators by consistently providing verified chemical specifications, transparent sourcing, and dependable delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="p-6 rounded-2xl bg-[#091C2E] border border-slate-800 flex-1 shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-bold uppercase mb-2">
                <Eye className="h-4 w-4" />
                <span>Our Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To set the national benchmark for chemical supply reliability, technical competence, and customer-focused logistics in the West African energy corridor.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Core Corporate Values with Motion */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Our Operating Values
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-2xl">
              Every order, shipment, and customer interaction is guided by our fundamental operating principles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={val.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#091C2E] border border-slate-800 hover:border-teal-500/50 rounded-xl p-5 sm:p-6 transition-all shadow-lg"
              >
                <div className="h-10 w-10 rounded-lg bg-[#051320] border border-slate-800 flex items-center justify-center text-teal-400 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-2">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* HSE Commitment Banner with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-r from-[#091C2E] via-[#051320] to-[#091C2E] border border-slate-800 p-8 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="h-16 w-16 rounded-2xl bg-[#F28C28]/15 border border-[#F28C28]/40 flex items-center justify-center flex-shrink-0 text-[#F28C28]">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <div>
              <div className="font-mono text-xs text-[#F28C28] uppercase font-bold tracking-wider mb-1">
                Health, Safety &amp; Environmental Stewardship
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-2">
                Zero Harm, Verified Containment, and Environmental Responsibility
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Grow Dons Services Ltd maintains uncompromising standards for hazardous material transportation, secondary containment packaging, and safe handling documentation. Every chemical consignment complies with international SDS handling guidelines to protect workforce safety and local ecology.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
