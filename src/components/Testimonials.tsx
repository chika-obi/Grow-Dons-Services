import React, { useState } from "react";
import { Star, Quote, Building2, ShieldCheck, MessageSquare, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  procurement: string;
  rating: number;
  highlight: string;
  feedback: string;
  location: string;
}

const PARTNER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Engr. Tarila Briggs",
    role: "Lead Drilling & Fluids Superintendent",
    company: "Trexm Energy Consortium",
    procurement: "Drilling & Completion Chemicals Formulation",
    rating: 5,
    highlight: "SBM formulation held supreme stability in HPHT well trials.",
    feedback: "Grow Dons' local chemical engineering team delivered exactly what we needed for the deep inland reservoir campaign. Their low-toxicity Synthetic-Based Mud (SBM) formulation demonstrated perfect constant rheology down to 13,800 feet. Unbelievable response time on custom blending.",
    location: "Port Harcourt, Rivers State"
  },
  {
    id: "t2",
    name: "Dr. Chijioke Okafor",
    role: "Acreage Exploration fluids Consultant",
    company: "Eunisell Logistics Strategic Partner",
    procurement: "Brine Dual-Pod Filtration Units Lease",
    rating: 5,
    highlight: "Dual-pod DE filter units kept turbidity index under 1.5 NTU.",
    feedback: "We rented their Dual-Pod Diatomaceous Earth (DE) filtration skids and pleated cartridges for two critical completions. Grow Dons' operators worked 24/7 shifts on the rig, maintaining clean clear-brines consistently. It significantly reduced our downhole skin damage factors.",
    location: "Escravos Offshore Basin"
  },
  {
    id: "t3",
    name: "Chief Femi Adelake",
    role: "Executive Director of Supply Chain",
    company: "Major Indigenous E&P Operator",
    procurement: "Solids Control Loops & Centrifuge Package",
    rating: 5,
    highlight: "Reduced liquid discharge volumes by solid-reclaiming shakers.",
    feedback: "Procuring closed-loop solids control equipment from Grow Dons Services saved us considerable environmental remediation costs last quarter. Their linear motion shakers and high-speed centrifuges operated flawlessly with zero mechanical downtime. They are a certified local champion.",
    location: "Warri, Delta State Operations"
  },
  {
    id: "t4",
    name: "Alhaji Musa Bello",
    role: "Procurement & Quality Assurance Manager",
    company: "Forte Oil / Secondary Sourcing Alliance",
    procurement: "Offshore Cargo Container Bags & Skips",
    rating: 5,
    highlight: "Compliant with DNV 2.7-1 / BS EN 12079 certifications.",
    feedback: "Grow Dons' CCU baskets and mud cutting skips were verified safe and fully documented for marine handling. Having immediate certified local inventory in Port Harcourt saved our barge crew from two weeks of critical transit delays. We highly recommend their asset lease pipeline.",
    location: "Onne Free Zone Port"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const { t } = useTranslation();

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % PARTNER_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + PARTNER_TESTIMONIALS.length) % PARTNER_TESTIMONIALS.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const activeTestimonial = PARTNER_TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="bg-slate-900 border-t border-b border-slate-800/80 py-14 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded-full text-brand-orange text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="h-3.5 w-3.5 animate-pulse" />
            <span>{t("op_trust")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            {t("op_feedback").split(" & ")[0]} &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">{t("op_feedback").split(" & ")[1] || t("cta_credentials")}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed font-sans">
            {t("op_desc")}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[420px] sm:min-h-[340px] bg-slate-950 border border-slate-850 p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col justify-between">
            
            {/* Top design accent */}
            <div className="absolute top-0 right-12 -translate-y-1/2 px-4 py-1.5 bg-brand-orange border border-orange-500 rounded-full text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-lg flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>NCDMB Local Content Compliant User</span>
            </div>

            <Quote className="h-10 w-10 text-brand-orange/20 absolute top-8 left-8" />

            <div className="relative overflow-hidden w-full h-full flex-grow flex flex-col justify-between">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col justify-between h-full w-full"
                >
                  <div>
                    {/* Stars & Category */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="flex items-center gap-0.5">
                        {[...Array(activeTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-450 text-amber-450" />
                        ))}
                      </div>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded border border-brand-orange/20">
                        {activeTestimonial.procurement}
                      </span>
                    </div>

                    {/* Bold highlight statement */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-medium text-white mb-4 italic tracking-wide">
                      &ldquo;{activeTestimonial.highlight}&rdquo;
                    </h3>

                    {/* Detailed feedback text */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-8">
                      {activeTestimonial.feedback}
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-800/80 pt-6 gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-display font-bold text-white transition-colors">
                          {activeTestimonial.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-medium">
                          {activeTestimonial.role} — <span className="text-slate-300">{activeTestimonial.company}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans font-medium self-start sm:self-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{activeTestimonial.location}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Chevrons inside card */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
              <button
                onClick={handlePrev}
                className="p-1.5 border border-slate-800 hover:border-slate-600 bg-slate-900 text-slate-300 hover:text-white rounded-md transition-colors cursor-pointer active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-[10px] sm:text-xs font-mono text-slate-500 select-none min-w-[2.5rem] text-center">
                {activeIndex + 1} / {PARTNER_TESTIMONIALS.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 border border-slate-800 hover:border-slate-600 bg-slate-900 text-slate-300 hover:text-white rounded-md transition-colors cursor-pointer active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* Quick stats footer for section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-950/60 border border-slate-850 p-6 rounded-2xl text-center flex flex-col justify-center items-center">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">100%</span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest mt-1.5">Local Compliance Index</span>
            </div>
            <div className="bg-slate-950/60 border border-slate-850 p-6 rounded-2xl text-center flex flex-col justify-center items-center">
              <span className="text-2xl sm:text-3xl font-display font-bold text-brand-orange tracking-tight">Zero</span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest mt-1.5">LTI Milestones Achieved</span>
            </div>
            <div className="bg-slate-950/60 border border-slate-850 p-6 rounded-2xl text-center flex flex-col justify-center items-center">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">24/7</span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest mt-1.5">Rigsite Engineering Shifts</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
