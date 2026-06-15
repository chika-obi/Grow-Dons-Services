import React, { useState } from "react";
import { SERVICES, IMAGES } from "../data";
import {
  FlaskConical as Flask,
  Layers,
  Warehouse,
  Ship,
  Filter,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  PackageCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>("chemicals");

  // Map service icons
  const getIcon = (iconName: string, className: string = "h-5 w-5") => {
    switch (iconName) {
      case "FlaskConical":
        return <Flask className={className} />;
      case "Layers":
        return <Layers className={className} />;
      case "Warehouse":
        return <Warehouse className={className} />;
      case "Ship":
        return <Ship className={className} />;
      case "Filter":
        return <Filter className={className} />;
      default:
        return <PackageCheck className={className} />;
    }
  };

  // Associate premium images with each core service
  const getServiceImage = (id: string) => {
    switch (id) {
      case "chemicals":
        return IMAGES.chemicals;
      case "offshore-support":
        return IMAGES.offshore;
      case "equipment-rental":
        return IMAGES.offshore; // offshore rentals
      case "brine-filtration":
        return IMAGES.chemicals; // filtration testing
      default:
        return IMAGES.team; // logistics & others
    }
  };

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-14 sm:py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1.5 bg-[#005B94]/10 text-[#005B94] rounded text-xs font-mono tracking-widest uppercase mb-3 font-semibold">
            WHAT WE SPECIALIZE IN
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Our Core Category Services
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full" />
          <p className="text-slate-500 font-sans mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Delivering chemical expertise and heavy engineering services across upstream drilling operations, brine processing, and offshore maritime channels.
          </p>
        </div>

        {/* Master Details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Navigation bar: Service selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {SERVICES.map((serv) => {
              const isActive = serv.id === activeServiceId;
              return (
                <button
                  key={serv.id}
                  onClick={() => setActiveServiceId(serv.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-slate-905 bg-slate-900 text-white border-slate-900 shadow-lg"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/65"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 p-2.5 rounded-lg transition-colors ${
                      isActive ? "bg-brand-orange text-white" : "bg-[#005B94]/10 text-[#005B94]"
                    }`}
                  >
                    {getIcon(serv.iconName)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base tracking-wide leading-tight">
                      {serv.title}
                    </h4>
                    <p
                      className={`text-xs mt-1.5 font-sans line-clamp-1 ${
                        isActive ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {serv.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Area: Dynamic service details container */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-md h-full flex flex-col justify-between"
              >
                <div>
                  {/* Category Title badge representation */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-brand-orange">
                      {getIcon(activeService.iconName, "h-8 w-8")}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>

                  <p className="text-slate-650 font-sans leading-relaxed text-sm sm:text-base text-slate-650 mb-6">
                    {activeService.fullDescription}
                  </p>

                  <h5 className="font-display font-bold text-xs tracking-wider text-slate-400 uppercase mb-4">
                    Key Technical Highlights
                  </h5>
                  
                  {/* Highlights checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {activeService.points.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-sans text-slate-700 leading-tight">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inline Image preview relative to service */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-6 border-t border-slate-200">
                  <div className="sm:col-span-7 flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Service Integrity</span>
                    <span className="text-xs text-slate-500 font-sans">Our solutions adhere precisely to DPR parameters and ISO-compliant delivery formats.</span>
                  </div>
                  <div className="sm:col-span-5 h-24 rounded-lg overflow-hidden relative shadow-inner">
                    <img
                      src={getServiceImage(activeService.id)}
                      alt="Operations Visualizer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover select-none brightness-90"
                    />
                    <div className="absolute inset-0 bg-[#005B94]/20 mix-blend-multiply" />
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
