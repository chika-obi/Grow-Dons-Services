import React, { useState } from "react";
import { PARTNERS, COMPANY_RC, CORE_VALUES, ATTRIBUTES } from "../data";
import {
  Eye,
  Rocket,
  CheckCircle2,
  Award,
  Landmark,
  Target,
  Handshake,
  Shield,
  Users,
  Scale,
  HeartPlus,
  GraduationCap,
  Cpu,
  HeartHandshake,
  Tag,
  Clock,
  ThumbsUp,
  Coins,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Sparkle,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Icon mapping dictionary
const iconMap: Record<string, React.ReactNode> = {
  // Values
  Shield: <Shield className="h-5 w-5" />,
  Award: <Award className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Feather: <Scale className="h-5 w-5" />,
  Heart: <HeartPlus className="h-5 w-5" />,
  TrendingUp: <GraduationCap className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Smile: <HeartHandshake className="h-5 w-5" />,
  
  // Attributes
  Percent: <Tag className="h-5 w-5" />,
  Clock: <Clock className="h-5 w-5" />,
  ThumbsUp: <ThumbsUp className="h-5 w-5" />,
  Coins: <Coins className="h-5 w-5" />,
  Heal: <ShieldCheck className="h-5 w-5" />,
  MessageSquare: <MessageSquare className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
};

type CollapsiblePanel = "who-we-are" | "vision-mission" | "core-values" | "attributes" | "networks-alliances";

export const AboutUs: React.FC = () => {
  // Let the first panel be open by default
  const [openPanel, setOpenPanel] = useState<CollapsiblePanel | null>("who-we-are");

  const togglePanel = (panel: CollapsiblePanel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1.5 bg-[#005B94]/10 text-[#005B94] rounded text-xs font-mono tracking-widest uppercase mb-3 font-semibold border border-[#005B94]/15">
            CORPORATE PROFILE
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-slate-900">
            About Grow Dons Services
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto mt-3.5 rounded-full" />
          <p className="text-xs font-mono text-slate-500 tracking-widest mt-2 uppercase">
            REGISTRATION NO: <span className="text-[#005B94] font-bold">{COMPANY_RC}</span>
          </p>
        </div>

        {/* Elegant Accordion Panels Stack */}
        <div className="max-w-4xl mx-auto space-y-4">

          {/* ITEM 1: WHO WE ARE */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("who-we-are")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none transition-colors hover:bg-slate-50/50"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "who-we-are" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    1. Who We Are & Ourselves
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Our dream, indigenous strength, and local downhole operations model.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "who-we-are" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "who-we-are" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-7 flex flex-col gap-4">
                        <span className="text-xs font-mono uppercase text-brand-orange tracking-wider font-bold">Indigenous Strength</span>
                        <h4 className="text-lg font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                          Your Trustworthy Companion in Oilfield Downhole Operations
                        </h4>
                        <p className="text-slate-655 font-sans leading-relaxed text-xs sm:text-sm">
                          Grow Dons Services is a fully owned indigenous Nigerian company incorporated with a dream to become the ultimate one-stop shop to provide seamless quality services, backed by high industrial competence and efficient technical partnerships.
                        </p>
                        <p className="text-slate-600 font-sans leading-relaxed text-xs">
                          Operations at Grow Dons are reinforced by highly effective local chemical engineers and a meticulous supply logistics framework. From formation, we acknowledged that exceptional client satisfaction is not just about transporting compounds to your site, but guaranteeing downhole performance matches exact operational specifications.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-slate-700">100% Proudly Indigenous Ownership</span>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-slate-700">Strategic Port Harcourt Base</span>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-slate-700">Rigid Downhole Performance Controls</span>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-slate-700">ISO 9001:2015 Process Modeling</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-5 relative mt-4 md:mt-0">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-brand-orange/15 to-[#005B94]/10 rounded-2xl -rotate-2 transform scale-95" />
                        <div className="relative bg-[#0b1a3c] text-white p-5 sm:p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[200px]">
                          <div>
                            <Award className="h-8 w-8 text-brand-orange mb-3 animate-pulse" />
                            <h4 className="text-xs font-display font-bold text-white mb-1.5">Our Operating Statement</h4>
                            <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                              &ldquo;A holistic approach to long-term success that views continuous improvement in all aspects of business as a process and not as a short-term goal.&rdquo;
                            </p>
                          </div>
                          <div className="mt-4 border-t border-slate-800 pt-2 flex justify-between items-center text-[9px] font-mono text-slate-400">
                            <span>RC. 1902045</span>
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-[8px]">Quality at its Peak</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ITEM 2: VISION & MISSION */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("vision-mission")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none transition-colors hover:bg-slate-50/50"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "vision-mission" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    2. Vision &amp; Mission Statements
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Where we are headed, our purpose, and absolute operational targets.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "vision-mission" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "vision-mission" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                      <div className="bg-slate-50 p-5 rounded-xl border-t-4 border-[#005B94] flex flex-col justify-between hover:shadow-sm transition-shadow">
                        <div>
                          <div className="h-9 w-9 rounded-lg bg-[#005B94]/10 flex items-center justify-center text-[#005B94] mb-3.5">
                            <Eye className="h-4.5 w-4.5" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-display font-bold text-slate-900 mb-1.5">Our Vision</h4>
                          <p className="text-slate-655 font-sans leading-relaxed text-xs">
                            To be a trusted and innovative chemical company recognized globally for delivering high-quality, sustainable, and safe chemical solutions that drive progress and create lasting value for our customers, communities, and the environment.
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border-t-4 border-brand-orange flex flex-col justify-between hover:shadow-sm transition-shadow">
                        <div>
                          <div className="h-9 w-9 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3.5">
                            <Rocket className="h-4.5 w-4.5" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-display font-bold text-slate-900 mb-1.5">Our Mission</h4>
                          <p className="text-slate-655 font-sans leading-relaxed text-xs">
                            To develop and deliver innovative, safe, and sustainable chemical products and services that meet the diverse needs of our customers. We are committed to operational excellence, environmental responsibility, and continuous improvement, while fisting a culture of integrity, teamwork, and innovation to contribute positively to the industry and society.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ITEM 3: CORE OPERATING VALUES */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("core-values")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none transition-colors hover:bg-slate-50/50"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "core-values" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    3. Core Operating Values
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Technical empowerment, integrity, rigid safety, and human team compliance.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "core-values" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "core-values" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                      {CORE_VALUES.map((val) => (
                        <div key={val.name} className="bg-slate-50 p-4 rounded-xl border border-slate-200/40 hover:border-slate-300 transition-colors flex flex-col justify-between">
                          <div>
                            <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center text-brand-orange mb-2.5 shadow-xs border border-slate-100">
                              {iconMap[val.iconName] || <Shield className="h-4 w-4" />}
                            </div>
                            <h5 className="font-display font-bold text-slate-900 text-xs mb-1">
                              {val.name}
                            </h5>
                            <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">
                              {val.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ITEM 4: CORPORATE ATTRIBUTES */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("attributes")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none transition-colors hover:bg-slate-50/50"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "attributes" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <Sparkle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    4. Performance &amp; Corporate Attributes
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Pricing models, supply chain assurance, and ISO compliance standards.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "attributes" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "attributes" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {ATTRIBUTES.map((attrib) => (
                        <div
                          key={attrib.name}
                          className="bg-slate-50 p-4 rounded-xl border border-slate-200/40 hover:border-slate-300 transition-all flex gap-3.5"
                        >
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-lg bg-[#005B94]/10 flex items-center justify-center text-[#005B94]">
                              {iconMap[attrib.iconName] || <Sparkles className="h-4 w-4" />}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xs font-display font-bold text-slate-900 mb-1">
                              {attrib.name}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                              {attrib.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ITEM 5: NETWORKS & STRATEGIC ALLIANCES */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => togglePanel("networks-alliances")}
              className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between cursor-pointer focus:outline-none select-none transition-colors hover:bg-slate-50/50"
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                  openPanel === "networks-alliances" ? "bg-[#005B94] text-white" : "bg-slate-100 text-[#005B94]"
                }`}>
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                    5. Strategic Alliances &amp; Partners
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                    Connecting Port Harcourt formulation hubs with premium global chemical developers.
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openPanel === "networks-alliances" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openPanel === "networks-alliances" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-2">
                      {PARTNERS.map((partner) => (
                        <div
                          key={partner.name}
                          className="bg-slate-50 hover:bg-slate-900 py-4 px-2 rounded-xl shadow-xs border border-slate-200/50 hover:border-slate-800 transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center text-center group cursor-default"
                        >
                          <span className="font-display text-xs font-black tracking-widest text-[#005B94] leading-none group-hover:text-brand-orange transition-colors duration-300">
                            {partner.logoText}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 mt-1.5 block group-hover:text-slate-350 transition-colors uppercase">
                            {partner.vibe}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
