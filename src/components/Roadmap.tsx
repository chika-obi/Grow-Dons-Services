import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  CheckCircle2, 
  Activity, 
  Award, 
  AlertCircle, 
  Ship, 
  FlaskConical, 
  Globe, 
  Gauge, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Sliders
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";

interface Milestone {
  id: number;
  phase: string;
  title: string;
  period: string;
  acceleratedPeriod: string;
  category: "fluids" | "marine" | "green";
  status: "completed" | "active" | "planned";
  progress: number;
  description: string;
  details: string[];
  kpis: { label: string; value: string }[];
  impact: string;
}

export const Roadmap: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<"all" | "fluids" | "marine" | "green">("all");
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(2); // Default to current phase

  // Growth Simulator variables
  const [fdiSecured, setFdiSecured] = useState<boolean>(false);
  const [localContentBonus, setLocalContentBonus] = useState<boolean>(false);
  const [greenMandateActive, setGreenMandateActive] = useState<boolean>(false);

  // Growth factor summary
  const getSpeedUpMonths = () => {
    let months = 0;
    if (fdiSecured) months += 6;
    if (localContentBonus) months += 4;
    if (greenMandateActive) months += 8;
    return months;
  };

  const getBoostedProgress = (milestone: Milestone) => {
    if (milestone.status === "completed") return 100;
    let baseProgress = milestone.progress;
    let boost = 0;
    if (fdiSecured && milestone.category === "marine") boost += 20;
    if (localContentBonus && milestone.category === "fluids") boost += 15;
    if (greenMandateActive && milestone.category === "green") boost += 25;
    return Math.min(baseProgress + boost, 100);
  };

  const initialMilestones: Milestone[] = [
    {
      id: 1,
      phase: "Phase I",
      title: "Establishment & Domestic Blending Base",
      period: "2023 - 2024",
      acceleratedPeriod: "Completed (2023 - 2024)",
      category: "fluids",
      status: "completed",
      progress: 100,
      description: "Successfully commissioned our primary high-shear mud and chemical blending site in Port Harcourt.",
      details: [
        "Constructed 5,000 bbl bulk storage facility for liquid mud bases and custom brine formulations.",
        "Obtained full DPR/NUPRC operational permits and NCDMB local content certification.",
        "Delivered over 25,000 barrels of completion fluids to various drilling campaigns in Niger Delta."
      ],
      kpis: [
        { label: "Local Content Ratio", value: "100% Raw Materials" },
        { label: "Bbl Delivered", value: "25k+ Volumes" },
        { label: "HSE Milestone", value: "LTI Free Operations" }
      ],
      impact: "Replaced 40% of custom completion fluid imports for regional operators, strengthening local currency reserves."
    },
    {
      id: 2,
      phase: "Phase II",
      title: "Offshore Logistics expansion & Fleet Marine base",
      period: "2025 - 2026",
      acceleratedPeriod: "Q1 2026 (Accelerated by 3 Months)",
      category: "marine",
      status: "active",
      progress: 75,
      description: "Deploying standard hazardous skip logistics and specialized offshore transport equipment assets.",
      details: [
        "Procuring 200 high-tensile custom mud skips with marine sling validation certs.",
        "Partnering with indigenous vessel operators to provide integrated offshore delivery services.",
        "Upgrading Onne Supply Base deck machinery and automated liquid transfer lines."
      ],
      kpis: [
        { label: "Active Skip Units", value: "185 / 200 Skips" },
        { label: "Terminal Efficiency", value: "+30% Cargo Turn" },
        { label: "Block Support", value: "3 Active Offshores" }
      ],
      impact: "Improves supply-loop reliability for deepwater assets in Egina and Bonga blocks by reducing turnaround time at shore base."
    },
    {
      id: 3,
      phase: "Phase III",
      title: "Biodegradable Synthetic Fluids (Eco-R&D)",
      period: "2026 - 2027",
      acceleratedPeriod: "Late 2026 (Accelerated by 7 Months)",
      category: "green",
      status: "planned",
      progress: 35,
      description: "Developing plant-ester-based non-aqueous drilling fluids to minimize environment footprint in sensitive aquatic setups.",
      details: [
        "Synthesizing customized base oils derived from highly-refined local botanicals with high thermal stability.",
        "Bench testing fluid performance at 350°F downhole simulators.",
        "Securing environmental toxicity clearance for disposal-free shallow water discharges."
      ],
      kpis: [
        { label: "Toxicity Rating", value: "Biodegradable <25 days" },
        { label: "Base Oil Source", value: "100% Local Palms/Esters" },
        { label: "Thermal Limit", value: "380°F Stability" }
      ],
      impact: "Allows coastal swamp and mangrove zone operators to comply with strict zero-discharge parameters while drilling deep horizons."
    },
    {
      id: 4,
      phase: "Phase IV",
      title: "Gulf of Guinea Integration & Deepwater Hub",
      period: "2027 - 2029",
      acceleratedPeriod: "Mid 2028 (Accelerated by 11 Months)",
      category: "marine",
      status: "planned",
      progress: 10,
      description: "Expanding operations beyond Nigeria into neighboring deepwater zones of Angola, Equatorial Guinea, and Gabon.",
      details: [
        "Establishing secondary liquid mud depots nearby Malabo and Luanda ports.",
        "Obtaining maritime compliance flags to run cross-border subsea engineering vessels.",
        "Scaling asset capacities with modular skid-mounted mixing systems."
      ],
      kpis: [
        { label: "Regional Hubs", value: "3 New Shore bases" },
        { label: "Fleet Capacity", value: "+10,000 Tons Deck" },
        { label: "Target Market Share", value: "12% Regional Deepwater" }
      ],
      impact: "Establishes Grow Dons as a fully indigenous African multinational energy support brand, exporting world-class maritime standards."
    }
  ];

  // Filters based on active category
  const filteredMilestones = initialMilestones.filter(milestone => {
    if (activeCategory === "all") return true;
    return milestone.category === activeCategory;
  });

  const selectedMilestone = initialMilestones.find(m => m.id === selectedMilestoneId) || initialMilestones[0];
  const speedUp = getSpeedUpMonths();

  return (
    <section id="roadmap" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/15 text-brand-orange rounded-sm text-[10px] font-mono tracking-widest uppercase mb-3.5 border border-brand-orange/20">
            <TrendingUp className="h-3 w-3" />
            Grow Dons Horizon Strategy
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-display font-black tracking-tight text-white mb-4">
            Engineering Excellence Roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            From regional chemical blending to robust deepwater Gulf of Guinea support services. Explore our progressive milestones and real-time strategic acceleration drivers.
          </p>
        </div>

        {/* ----------------- INTERACTIVE ACCELERATION SIMULATOR PANEL ----------------- */}
        <div className="mb-12 bg-slate-900/40 p-5 sm:p-6 rounded-2xl border border-slate-800/80 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 border-b border-slate-800/60">
            <div>
              <h3 className="text-sm font-display font-semibold text-white flex items-center gap-2">
                <Sliders className="h-4 w-4 text-brand-orange" />
                Growth Strategy Accelerator Sim
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Toggle the strategic growth levers below to see simulated accelerated timelines and progress boosts for our active and planned milestones.
              </p>
            </div>
            
            {/* Speedup Badge */}
            <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-2 rounded-lg border border-slate-800 shrink-0">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Timeline Status:</span>
              <span className={`text-xs font-mono font-black ${speedUp > 0 ? "text-amber-400" : "text-emerald-400"}`}>
                {speedUp > 0 ? `▲ ${speedUp} Months Ahead of Schedule` : "● Standard Timeline Active"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5">
            {/* Driver 1 */}
            <button
              onClick={() => setFdiSecured(!fdiSecured)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                fdiSecured 
                  ? "bg-brand-orange/5 border-brand-orange text-white" 
                  : "bg-slate-950/40 border-slate-850 text-slate-400 hover:border-slate-800"
              }`}
            >
              <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${fdiSecured ? "bg-brand-orange text-white" : "bg-slate-900 text-slate-500"}`}>
                <Ship className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-display font-bold">Secure Marine JV Partner</div>
                <p className="text-[10px] text-slate-500 leading-snug mt-1">
                  Triggers fleet expansion. Accelerated standard skip deliveries by <strong className="text-white">6 Mo</strong>.
                </p>
              </div>
            </button>

            {/* Driver 2 */}
            <button
              onClick={() => setLocalContentBonus(!localContentBonus)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                localContentBonus 
                  ? "bg-brand-orange/5 border-brand-orange text-white" 
                  : "bg-slate-950/40 border-slate-850 text-slate-400 hover:border-slate-800"
              }`}
            >
              <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${localContentBonus ? "bg-brand-orange text-white" : "bg-slate-900 text-slate-500"}`}>
                <FlaskConical className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-display font-bold">NCDMB Mud Materials Award</div>
                <p className="text-[10px] text-slate-500 leading-snug mt-1">
                  Secures local source supply chains. Fluids R&D timeline compressed by <strong className="text-white">4 Mo</strong>.
                </p>
              </div>
            </button>

            {/* Driver 3 */}
            <button
              onClick={() => setGreenMandateActive(!greenMandateActive)}
              className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                greenMandateActive 
                  ? "bg-brand-orange/5 border-brand-orange text-white" 
                  : "bg-slate-950/40 border-slate-850 text-slate-400 hover:border-slate-800"
              }`}
            >
              <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${greenMandateActive ? "bg-brand-orange text-white" : "bg-slate-900 text-slate-500"}`}>
                <Zap className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs font-display font-bold">Zero-Discharge Legislation</div>
                <p className="text-[10px] text-slate-500 leading-snug mt-1">
                  Swamp discharge bans. Triggers immediate green palm-ester fluids need, shaving <strong className="text-white">8 Mo</strong>.
                </p>
              </div>
            </button>
          </div>
        </div>


        {/* ----------------- INTERACTIVE ROADMAP TAB LAYOUT ----------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Timeline List or Categories */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Category selection pillbuttons */}
            <div className="flex gap-1.5 p-1 bg-slate-900/80 rounded-lg border border-slate-850">
              {(["all", "fluids", "marine", "green"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-1 text-center py-2 text-[10px] font-mono tracking-wider uppercase rounded-md transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-brand-orange text-white font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat === "all" ? "All Sectors" : cat === "marine" ? "Logistics" : cat === "green" ? "Green Tech" : "Fluids"}
                </button>
              ))}
            </div>

            {/* List of Milestones */}
            <div className="space-y-3">
              {filteredMilestones.map((milestone) => {
                const isSelected = selectedMilestoneId === milestone.id;
                const progressVal = getBoostedProgress(milestone);
                
                return (
                  <div
                    key={milestone.id}
                    onClick={() => setSelectedMilestoneId(milestone.id)}
                    className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 border-brand-orange/80 shadow-lg shadow-brand-orange/5"
                        : "bg-slate-900/30 border-slate-850/80 hover:bg-slate-900/60 hover:border-slate-800"
                    }`}
                  >
                    {/* Tiny sector strip color code */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${
                      milestone.category === "fluids" ? "bg-cyan-500" : milestone.category === "marine" ? "bg-amber-500" : "bg-emerald-500"
                    }`} />

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-mono uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-slate-400 font-bold">
                        {milestone.phase}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                        {speedUp > 0 && milestone.status !== "completed" ? milestone.acceleratedPeriod : milestone.period}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-display font-bold text-white mb-2 leading-snug">
                      {milestone.title}
                    </h3>

                    {/* Simple reactive progress bar inside card */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono text-slate-400">
                        <span>Milestone Status: <strong className="text-white uppercase font-bold text-[8px]">{milestone.status}</strong></span>
                        <span className={progressVal === 100 ? "text-emerald-400" : "text-amber-400"}>
                          {progressVal}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${progressVal === 100 ? "bg-emerald-500" : "bg-brand-orange"}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${progressVal}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>

                    {/* Subtle status node indicator on select */}
                    {isSelected && (
                      <div className="absolute top-4 right-4 text-brand-orange">
                        <Sparkles className="h-4 w-4 animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Static standard certification footnotes for robust industrial profile */}
            <div className="p-4 bg-slate-950 border border-slate-850/60 rounded-xl text-[10px] text-slate-500 leading-normal flex items-start gap-2.5 font-sans">
              <AlertCircle className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
              <span>
                Engineered path coordinates and milestones comply with the Nigerian Oil and Gas Industry Content Development (NOGICD) Act standards. Acceleration simulation is indicative and reflects forecasted procurement margins.
              </span>
            </div>

          </div>

          {/* Right Column: Detailed Milestones Deep Dive Display Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden"
              >
                {/* Sector Icon background accent */}
                <div className="absolute top-6 right-6 opacity-5 pointer-events-none text-white">
                  {selectedMilestone.category === "fluids" ? (
                    <FlaskConical className="h-28 w-28" />
                  ) : selectedMilestone.category === "marine" ? (
                    <Ship className="h-28 w-28" />
                  ) : (
                    <Zap className="h-28 w-28" />
                  )}
                </div>

                {/* Subtitle & Tag */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[10px] font-mono bg-brand-orange/15 text-brand-orange border border-brand-orange/30 px-2.5 py-1 rounded-sm uppercase tracking-wider font-bold">
                    {selectedMilestone.phase}
                  </span>
                  <span className="text-[10px] font-mono bg-slate-950 px-2.5 py-1 rounded-sm text-slate-450 border border-slate-850 uppercase font-bold">
                    Sector: {selectedMilestone.category === "fluids" ? "Fluids Engineering" : selectedMilestone.category === "marine" ? "Marine Logistics" : "Eco Green Tech"}
                  </span>
                  {selectedMilestone.status === "completed" ? (
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-sm flex items-center gap-1 font-bold">
                      <CheckCircle2 className="h-3 w-3" /> COMPLETED
                    </span>
                  ) : selectedMilestone.status === "active" ? (
                    <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-sm flex items-center gap-1 font-bold animate-pulse">
                      <Activity className="h-3 w-3" /> ACTIVE PROGRESSIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono bg-slate-950 text-slate-500 border border-slate-850 px-2 py-0.5 rounded-sm font-bold">
                      VISION PLANNED
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  {selectedMilestone.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {selectedMilestone.description}
                </p>

                {/* Technical Accomplishments Checklist */}
                <div className="space-y-3.5 mb-8">
                  <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider">
                    Core Engineering Parameters
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedMilestone.details.map((detail, index) => (
                      <li key={index} className="flex gap-2.5 text-xs text-slate-400 leading-relaxed items-start">
                        <span className="h-5 w-5 bg-slate-950 border border-slate-800 text-brand-orange flex items-center justify-center rounded-md shrink-0 font-mono text-[9px] font-bold">
                          {index + 1}
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* KPI Metrics Blocks */}
                <div className="grid grid-cols-3 gap-3.5 p-4 bg-slate-950 rounded-xl border border-slate-850 mb-6">
                  {selectedMilestone.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="text-left">
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{kpi.label}</div>
                      <div className="text-xs sm:text-sm font-display font-medium text-white tracking-tight mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                        {kpi.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Projected Impact Callout */}
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/15 flex gap-3.5 items-start">
                  <div className="p-1.5 rounded-lg bg-orange-500/10 text-brand-orange shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <h5 className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest">Projected Strategic Impact:</h5>
                    <p className="text-xs text-slate-300 leading-normal font-sans mt-0.5">
                      {selectedMilestone.impact}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
