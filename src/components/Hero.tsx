import React, { useState } from "react";
import { IMAGES } from "../data";
import { Shield, ArrowRight, Award, Flame, Activity, MapPin, FlaskConical, Ship } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

interface SectorItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  location: string;
  statValue: string;
  telemetry: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const elementPos = target.getBoundingClientRect().top;
      const offsetPos = elementPos + window.scrollY - offset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  const operationalSectors: SectorItem[] = [
    {
      id: "mud",
      title: "Mud Systems & Fluid Blending",
      tag: "Drilling Mud Blending",
      image: IMAGES.chemicals,
      description: "Automated synthesis of high-density completion fluids and customized sodium bentonite muds at our Port Harcourt facility.",
      location: "Port Harcourt Central Hub",
      statValue: "API RP 13B Standard",
      telemetry: "Density: 12.8 ppg | Viscosity: 46 sec",
      icon: FlaskConical
    },
    {
      id: "refinery",
      title: "Petrochemicals & Downstream",
      tag: "Petrochemical Flow",
      image: IMAGES.hero,
      description: "High-temperature downhole corrosion inhibition, chemical pipeline monitoring, and pressure distribution management.",
      location: "Onne Chemical Depot",
      statValue: "Zero-Flaring Safe",
      telemetry: "Pressure: 240 Bar | Output: 1,800 L/min",
      icon: Flame
    },
    {
      id: "offshore",
      title: "Offshore Logistics & Support",
      tag: "Vessel Support & Marine Gear",
      image: IMAGES.offshore,
      description: "Coordinating deepwater supply vessels, towing logistics, deck equipment rental transport, and hazardous mud storage skips.",
      location: "Delta Shore Base",
      statValue: "SOLAS & NCDMB Certified",
      telemetry: "Deck Cap: 1,200 Tons | GPS: West Africa",
      icon: Ship
    }
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* High-Performance Poster Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Grow Dons Industrial Refinery Backdrop"
          className="absolute inset-0 w-full h-full object-cover object-center select-none opacity-25 select-none transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Dual overlay gradients for world-class high-contrast atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
        {/* Subtle orange ambient glow */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-orange/5 blur-3xl rounded-full pointer-events-none animate-pulse" />
      </div>

      {/* Content Area with Dual Column Setup */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24 flex-grow flex flex-col justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Vision & Action Brand Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-rose-300 text-xs font-mono tracking-widest uppercase mb-5 self-start"
            >
              <Flame className="h-4 w-4 text-brand-orange animate-pulse" />
              <span>{t("hero_tag")}</span>
            </motion.div>

            {/* Core Corporate Header */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-5.5xl font-display font-medium tracking-tight text-white leading-tight"
            >
              GROW DONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">{t("hero_title_gold")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl sm:text-2xl font-display text-slate-300 mt-3 font-light tracking-wide italic"
            >
              &ldquo;{t("hero_subtitle")}&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-sm sm:text-base text-slate-350 mt-5 font-sans leading-relaxed max-w-2xl"
            >
              {t("hero_desc")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8"
            >
              <button
                onClick={() => handleScrollTo("#services")}
                className="bg-brand-orange hover:bg-orange-600 text-white font-display font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-md shadow-lg shadow-brand-orange/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{t("cta_services")}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScrollTo("#about")}
                className="border border-slate-850 bg-slate-900/65 hover:bg-slate-900 hover:border-slate-700 text-slate-300 hover:text-white font-display text-xs tracking-wider uppercase px-7 py-3.5 rounded-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>{t("cta_credentials")}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: High-Fi Interactive Operations Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 w-full flex flex-col"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-4.5 shadow-2.5xl flex flex-col relative overflow-hidden">
              {/* Mesh Accent in background */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-brand-orange/10 blur-2xl rounded-full pointer-events-none" />
              
              {/* Card Header Tag */}
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-wider text-slate-400">
                <span className="flex items-center gap-1.5 font-semibold text-blue-400">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping shrink-0" />
                  REAL-TIME ACTION REPORT
                </span>
                <span className="text-slate-500 uppercase">{operationalSectors[activeSectorIndex].tag}</span>
              </div>

              {/* Showcase Image Display Screen */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group/screen">
                <img
                  key={operationalSectors[activeSectorIndex].id}
                  src={operationalSectors[activeSectorIndex].image}
                  alt={operationalSectors[activeSectorIndex].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

                {/* Technical Stats Overlay on top-right of screen */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-[9px] font-mono text-amber-400 flex items-center gap-1.5 shadow-xs">
                  <Activity className="h-3 w-3 text-brand-orange animate-pulse" />
                  <span>{operationalSectors[activeSectorIndex].statValue}</span>
                </div>

                {/* Tag name display */}
                <div className="absolute bottom-2.5 left-2.5 px-2 py-1 rounded bg-slate-950/80 backdrop-blur-xs border border-white/5 text-[9px] font-mono tracking-wide text-white">
                  {operationalSectors[activeSectorIndex].tag}
                </div>
              </div>

              {/* Selection Tabs / Controls */}
              <div className="grid grid-cols-3 gap-2 mt-3.5">
                {operationalSectors.map((sector, idx) => {
                  const Icon = sector.icon;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setActiveSectorIndex(idx)}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-semibold cursor-pointer border transition-all duration-300 ${
                        activeSectorIndex === idx
                          ? "bg-slate-950 border-brand-orange text-brand-orange font-bold shadow-md shadow-brand-orange/5"
                          : "bg-slate-950/40 border-slate-850 hover:bg-slate-950 hover:border-slate-800 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 shrink-0 ${activeSectorIndex === idx ? "text-brand-orange animate-pulse" : "text-slate-500"}`} />
                      <span className="text-[10px] sm:text-[11px] font-display whitespace-nowrap">
                        {idx === 0 ? "1. Mud Systems" : idx === 1 ? "2. Downstream" : "3. Logistics"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Telemetry / Location Banner */}
              <div className="mt-4 pt-3.5 border-t border-slate-800/80 text-left">
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                  <h4 className="text-xs font-display font-bold text-white tracking-wide">
                    {operationalSectors[activeSectorIndex].title}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 shrink-0">
                    <MapPin className="h-3 w-3 text-rose-400 shrink-0" />
                    <span>{operationalSectors[activeSectorIndex].location}</span>
                  </div>
                </div>
                
                <p className="text-[11px] leading-relaxed text-slate-400 line-clamp-2">
                  {operationalSectors[activeSectorIndex].description}
                </p>

                <div className="mt-2.5 p-2 bg-slate-950/90 rounded border border-slate-850 flex items-center justify-between text-[9px] font-mono">
                  <span className="text-slate-500 uppercase tracking-widest font-bold">Telemetry Live Stream:</span>
                  <span className="text-emerald-400 tracking-wide font-medium">{operationalSectors[activeSectorIndex].telemetry}</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Bento Badges at bottom of hero */}
      <div className="relative z-10 w-full bg-slate-950/90 border-t border-slate-900 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-lg bg-indigo-505/10 border border-slate-800 text-brand-orange font-semibold">
              <Award className="h-6 w-6 text-[#0081a7]" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-slate-400 uppercase">Registration ID</p>
              <p className="text-white font-display font-bold text-lg mt-0.5">RC. 1902045</p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-t border-slate-900 md:border-t-0 md:border-x md:px-6 md:border-slate-800 py-4 md:py-0">
            <div className="p-3.5 rounded-lg bg-indigo-505/10 border border-slate-800 text-brand-orange font-semibold">
              <Flame className="h-6 w-6 text-brand-orange" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-slate-400 uppercase">Chemical Capacity</p>
              <p className="text-white font-display font-bold text-lg mt-0.5">Drilling &amp; Completion fluids</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-lg bg-indigo-505/10 border border-slate-800 text-brand-orange font-semibold">
              <Shield className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-slate-400 uppercase">Quality Operations</p>
              <p className="text-white font-display font-bold text-lg mt-0.5">ISO 9001:2015 Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
