import React from "react";
import { motion } from "motion/react";
import { ViewMode, ChemicalProductItem } from "../../types";
import {
  COMPANY_NAME,
  COMPANY_RC,
  CONTACT_INFO,
  CHEMICAL_PRODUCTS,
  TECHNICAL_SOLUTIONS,
  PROCUREMENT_CATEGORIES,
  LOGISTICS_CAPABILITIES,
  LEADERSHIP_ROLES,
  IMAGES,
} from "../../data";
import { SectionHeader } from "../common/SectionHeader";
import { ChemicalCard } from "../common/ChemicalCard";
import { FaqSection } from "../FaqSection";
import {
  FlaskConical,
  Layers,
  Truck,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  CheckCircle2,
  Package,
  Wrench,
  MapPin,
  Sparkles,
  Users,
  Award,
} from "lucide-react";

interface HomeViewProps {
  onNavigate: (view: ViewMode) => void;
  onRequestQuote: (prefillProduct?: string) => void;
  onViewSpecs?: (product: ChemicalProductItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onRequestQuote,
  onViewSpecs,
}) => {
  // Select top 4 featured chemical products from verified data
  const featuredChemicals = CHEMICAL_PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="w-full bg-[#071A2B] text-white overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. HERO: Industrial Chemical Technology & Supply Signature  */}
      {/* ============================================================ */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-slate-800">
        
        {/* Layered Technical Background Images & Chemical Textures */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Grow Dons Oilfield Chemical Storage and Technical Operations"
            className="w-full h-full object-cover object-center opacity-40 filter contrast-110 brightness-95"
            loading="eager"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          {/* Subtle directional vignette that balances background clarity with textual contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/85 to-[#071A2B]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-[#071A2B]/40" />
          <div className="absolute inset-0 bg-tech-grid-dark opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content: Bold Technical Display with Motion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              
              {/* Technical Indicator Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B6670]/30 border border-[#0B6670]/60 w-fit mb-6 shadow-sm backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-teal-300 font-semibold">
                  Technical Chemical Sourcing &bull; {COMPANY_RC}
                </span>
              </motion.div>

              {/* Main Display Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white uppercase"
              >
                <span className="block text-white">Oilfield Chemicals.</span>
                <span className="block text-teal-300">Technical Supply.</span>
                <span className="block text-[#F28C28]">Reliable Delivery.</span>
              </motion.h1>

              {/* Technical Positioning Statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
              >
                Specialized chemical supply and technical sourcing for upstream drilling, well completion, and continuous production operations — backed by verified quality standards and direct regional logistics coordination from Port Harcourt.
              </motion.p>

              {/* CTA Action Matrix */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                {/* Primary CTA: EXPLORE CHEMICALS */}
                <button
                  onClick={() => onNavigate("chemicals")}
                  className="px-6 py-3.5 rounded-lg bg-[#0B6670] hover:bg-[#12828e] text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg flex items-center gap-2.5 cursor-pointer hover:shadow-teal-900/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FlaskConical className="h-4 w-4 text-teal-200" />
                  <span>Explore Chemicals</span>
                  <ArrowRight className="h-4 w-4 text-teal-200" />
                </button>

                {/* Secondary CTA: REQUEST A QUOTE */}
                <button
                  onClick={() => {
                    onNavigate("quote");
                    onRequestQuote();
                  }}
                  className="px-6 py-3.5 rounded-lg bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg flex items-center gap-2.5 cursor-pointer hover:shadow-orange-900/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FileSpreadsheet className="h-4 w-4 text-[#071A2B]" />
                  <span>Request a Quote</span>
                </button>
              </motion.div>

              {/* Micro Specification Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left"
              >
                <div>
                  <div className="font-mono text-xs text-teal-400 uppercase font-bold tracking-wider">Primary Core</div>
                  <div className="font-display text-sm font-semibold text-white mt-0.5">Specialized Chemicals</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-[#F28C28] uppercase font-bold tracking-wider">Secondary Sourcing</div>
                  <div className="font-display text-sm font-semibold text-white mt-0.5">Industrial Procurement</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase font-bold tracking-wider">Regional Support</div>
                  <div className="font-display text-sm font-semibold text-white mt-0.5">Field Logistics</div>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Asymmetric Panel: Engineering Telemetry & Chemical Feature (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl bg-[#091C2E]/95 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-md overflow-hidden">
                
                {/* Visual Engineering Grid */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-teal-400" />
                    <span>SPECIFICATION SUMMARY</span>
                  </div>
                  <span className="text-teal-400 font-semibold">PORT HARCOURT HUB</span>
                </div>

                <div className="mt-5 space-y-4 font-mono text-xs">
                  <div className="bg-[#051320] p-3.5 rounded-lg border border-slate-800 hover:border-teal-500/40 transition-colors">
                    <div className="text-teal-400 font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Drilling Fluid Additives</span>
                      <span className="text-[10px] text-slate-400">API SPEC 13A</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs mt-1">
                      API Bentonite, Barite weighting minerals, fluid loss agents, and specialized shale inhibitors.
                    </p>
                  </div>

                  <div className="bg-[#051320] p-3.5 rounded-lg border border-slate-800 hover:border-teal-500/40 transition-colors">
                    <div className="text-teal-300 font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Completion &amp; Workover Brines</span>
                      <span className="text-[10px] text-slate-400">SOLIDS-FREE</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs mt-1">
                      High-purity Calcium Chloride (94-97%), Calcium Bromide, and customized clear brine blends.
                    </p>
                  </div>

                  <div className="bg-[#051320] p-3.5 rounded-lg border border-slate-800 hover:border-orange-500/40 transition-colors">
                    <div className="text-[#F28C28] font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Production Treaters</span>
                      <span className="text-[10px] text-slate-400">FLOW ASSURANCE</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs mt-1">
                      Demulsifiers, film-forming corrosion inhibitors, threshold scale inhibitors, and biocides.
                    </p>
                  </div>
                </div>

                {/* Fast Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400">Full specs with TDS/SDS</span>
                  <button
                    onClick={() => onNavigate("chemicals")}
                    className="text-xs font-mono text-[#F28C28] hover:text-[#e07b16] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Catalogue</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CHEMICAL CAPABILITY: Drilling, Completion, Production      */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#051320] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              code="CAP-01"
              tag="Primary Technical Capability"
              title="Engineered Oilfield Chemical Solutions"
              description="Our chemical portfolio addresses critical wellbore stability, reservoir pore-throat preservation, and continuous flow assurance across land, swamp, and offshore facilities."
              dark={true}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TECHNICAL_SOLUTIONS.map((solution, idx) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#091C2E] border border-slate-800 hover:border-[#0B6670] rounded-xl p-6 transition-all duration-200 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <span className="font-mono text-[10px] tracking-widest text-teal-400 font-bold uppercase">
                      SOLUTION 0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {solution.domain}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-3">
                    {solution.title}
                  </h3>

                  <div className="space-y-2 mt-4">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Key Technical Objectives:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {solution.operationalBenefits.slice(0, 3).map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit.split(":")[0]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {solution.keyChemicals.slice(0, 3).map((chem) => (
                      <span
                        key={chem}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-teal-300"
                      >
                        {chem}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate("chemicals")}
                    className="w-full py-2 rounded bg-slate-800 hover:bg-[#0B6670] text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Chemical Group</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED CHEMICAL PRODUCTS: Technical Showcase Panels     */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#071A2B] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                code="CAT-01"
                tag="Technical Chemical Catalogue"
                title="Featured Chemical Products"
                description="Standardized technical formulations backed by batch Certificates of Analysis (CoA) and verified technical specifications."
                dark={true}
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => onNavigate("chemicals")}
              className="mt-4 md:mt-0 px-5 py-2.5 rounded border border-[#0B6670] hover:bg-[#0B6670] text-teal-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer w-fit"
            >
              <span>View Full Catalogue ({CHEMICAL_PRODUCTS.length} Items)</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* 4 Featured Chemical Panels with Staggered Motion */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredChemicals.map((product, pIdx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: pIdx * 0.1 }}
              >
                <ChemicalCard
                  product={product}
                  onRequestQuote={onRequestQuote}
                  onViewSpecs={onViewSpecs}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 & 5. COMPACT PROCUREMENT & LOGISTICS STRIP                 */}
      {/* ============================================================ */}
      <section className="py-16 bg-[#051320] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 4. Strategic Procurement (7 cols) with Motion */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#091C2E] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#F28C28] uppercase font-bold tracking-wider">
                  <Layers className="h-4 w-4 text-[#F28C28]" />
                  <span>Secondary Capability &bull; Technical Sourcing</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Industrial Equipment, Piping &amp; Safety Supplies
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Supporting our chemical supply with direct technical procurement of industrial line valves, seamless piping, filtration consumables, hazardous-area electrical supplies, and certified PPE.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCUREMENT_CATEGORIES.slice(1, 5).map((cat) => (
                    <div
                      key={cat.id}
                      className="p-3 rounded-lg bg-[#051320] border border-slate-800 text-xs font-mono"
                    >
                      <div className="text-teal-300 font-bold mb-1 truncate">{cat.title}</div>
                      <div className="text-slate-400 text-[11px] truncate font-sans">
                        {cat.scopeItems[0]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  Direct manufacturer sourcing verification
                </span>
                <button
                  onClick={() => onNavigate("procurement")}
                  className="px-4 py-2 rounded bg-slate-800 hover:bg-[#F28C28] text-slate-200 hover:text-[#071A2B] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Procurement</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 5. Supporting Logistics (5 cols) with Motion */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 bg-[#091C2E] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 font-mono text-xs text-teal-400 uppercase font-bold tracking-wider">
                  <Truck className="h-4 w-4 text-teal-400" />
                  <span>Supporting Capability &bull; Delivery Coordination</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  We Help Move What We Supply
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Coordinated material transport, secondary containment handling, and dockside staging at Onne Port and Warri Shorebases to prevent operational downtime.
                </p>

                <div className="space-y-2.5 font-mono text-xs">
                  {LOGISTICS_CAPABILITIES.slice(0, 3).map((log) => (
                    <div key={log.id} className="flex items-start gap-2.5 p-2 rounded bg-[#051320]">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mt-1.5" />
                      <div className="leading-snug">
                        <span className="text-white font-semibold">{log.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  Port Harcourt &amp; Shorebases
                </span>
                <button
                  onClick={() => onNavigate("logistics")}
                  className="px-4 py-2 rounded bg-slate-800 hover:bg-[#0B6670] text-slate-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Logistics Scope</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CORPORATE LEADERSHIP GALLERY & CREDIBILITY                */}
      {/* ============================================================ */}
      <section className="py-16 bg-[#071A2B] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-r from-[#091C2E] to-[#071A2B] border border-slate-800 p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-2 font-mono text-xs text-teal-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-bold tracking-wider">{COMPANY_RC}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-300">Port Harcourt Headquarters</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Executive Leadership &amp; Corporate Oversight
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl font-sans leading-relaxed">
                  Directed by four dedicated executive offices ensuring technical compliance, certified product quality, and verified commercial execution.
                </p>
              </div>

              <button
                onClick={() => onNavigate("leadership")}
                className="px-5 py-2.5 rounded bg-slate-800 hover:bg-[#0B6670] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 w-fit"
              >
                <Users className="h-4 w-4 text-teal-300" />
                <span>View Full Leadership</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* 4 Leadership Miniature Portrait Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {LEADERSHIP_ROLES.map((role, rIdx) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: rIdx * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  onClick={() => onNavigate("leadership")}
                  className="bg-[#051320] border border-slate-800 hover:border-teal-500/50 rounded-xl p-4 flex items-center gap-3.5 cursor-pointer group transition-all"
                >
                  <div className="h-14 w-14 rounded-lg overflow-hidden border border-[#0B6670]/50 flex-shrink-0 bg-slate-900 group-hover:border-teal-400 transition-colors">
                    {role.imageUrl ? (
                      <img
                        src={role.imageUrl}
                        alt={role.name}
                        className="h-full w-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-teal-400">
                        <Users className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] text-[#F28C28] uppercase font-bold tracking-wider truncate">
                      {role.title}
                    </div>
                    <div className="font-display text-sm font-bold text-white truncate group-hover:text-teal-300 transition-colors">
                      {role.name}
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 truncate">
                      {role.executiveArea.split("&")[0]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ)                          */}
      {/* ============================================================ */}
      <FaqSection
        id="faq"
        onRequestQuote={() => {
          onNavigate("quote");
          onRequestQuote();
        }}
      />

      {/* ============================================================ */}
      {/* 9. CONVERSION: Dedicated Request for Quote Strip            */}
      {/* ============================================================ */}
      <section className="py-16 bg-gradient-to-b from-[#051320] to-[#030d17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-[#091C2E] border-2 border-[#0B6670]/40 p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl"
          >
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F28C28]/20 border border-[#F28C28]/40 mb-4 font-mono text-xs text-[#F28C28] font-bold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>DIRECT COMMERCIAL PROCUREMENT</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Order Oilfield Chemicals or Request Technical Sourcing?
            </h2>

            <p className="mt-4 font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Submit your chemical specifications, required volumes, and delivery site in Rivers State, Delta State, or major operational shorebases.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono">
              <button
                onClick={() => {
                  onNavigate("quote");
                  onRequestQuote();
                }}
                className="px-6 py-3.5 rounded-lg bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg flex items-center gap-2 cursor-pointer hover:shadow-orange-900/30 hover:-translate-y-0.5"
              >
                <FileSpreadsheet className="h-4 w-4" />
                <span>Open Formal RFQ Portal</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate("chemicals")}
                className="px-6 py-3.5 rounded-lg border border-[#0B6670] hover:bg-[#0B6670]/30 text-teal-300 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <FlaskConical className="h-4 w-4" />
                <span>Browse Chemical Catalogue</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                <span>Full Technical Data Sheets</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                <span>Safety Data Sheets (SDS)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                <span>Rapid Commercial Quotations</span>
              </span>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};
