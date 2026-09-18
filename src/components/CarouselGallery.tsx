import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CAROUSEL_GALLERY_SLIDES } from "../data";
import { GallerySlide } from "../types";
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Maximize2, 
  X, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  ExternalLink,
  Sparkles
} from "lucide-react";

interface CarouselGalleryProps {
  id?: string;
  onRequestQuote?: () => void;
}

export const CarouselGallery: React.FC<CarouselGalleryProps> = ({ 
  id = "operations-gallery",
  onRequestQuote 
}) => {
  const slides = CAROUSEL_GALLERY_SLIDES;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay handler
  useEffect(() => {
    if (isPlaying && !lightboxOpen) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, lightboxOpen, nextSlide]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape" && lightboxOpen) setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextSlide, prevSlide]);

  const currentSlide = slides[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section id={id} className="py-16 sm:py-20 bg-[#061625] relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B6670]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F28C28]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B6670]/20 border border-[#0B6670]/50 text-teal-300 font-mono text-xs mb-3">
              <Layers className="h-3.5 w-3.5 text-teal-400" />
              <span>FACILITY &amp; OPERATIONS SHOWCASE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Operational Infrastructure &amp; Field Gallery
            </h2>
            <p className="mt-2 font-sans text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Visual overview of our Port Harcourt warehousing, certified drilling chemical storage, laboratory quality verification, and quayside shorebase logistics.
            </p>
          </div>

          {/* Controls: Play/Pause, Counter, Lightbox */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded border border-slate-800 flex items-center gap-2">
              <span className="text-[#F28C28] font-bold text-sm">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">{String(slides.length).padStart(2, "0")}</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-teal-500 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 text-emerald-400" />}
            </button>

            <button
              onClick={() => setLightboxOpen(true)}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-teal-500 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Expand to Fullscreen"
              aria-label="Expand image to fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl group select-none"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main Visual Display (16:9 ratio on desktop, 4:3 on mobile) */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentSlide.imageUrl}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Gradients for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051320] via-[#051320]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#051320]/80 via-transparent to-transparent hidden md:block" />
              </motion.div>
            </AnimatePresence>

            {/* Slide Details Overlay (Pinned to Bottom Left) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20 pointer-events-none">
              <div className="max-w-2xl pointer-events-auto">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#F28C28] text-[#071A2B] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    {currentSlide.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#0B6670]/80 border border-teal-400/40 text-teal-200 font-mono text-[10px] sm:text-xs font-medium">
                    {currentSlide.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700/60">
                    <MapPin className="h-3 w-3 text-[#F28C28]" />
                    <span>{currentSlide.location}</span>
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  {currentSlide.title}
                </h3>

                <p className="mt-1 sm:mt-2 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-none drop-shadow">
                  {currentSlide.description}
                </p>

                {onRequestQuote && (
                  <div className="mt-3 sm:mt-4 flex items-center gap-3">
                    <button
                      onClick={onRequestQuote}
                      className="px-3.5 py-2 rounded bg-[#0B6670] hover:bg-[#09525a] text-white font-mono text-xs font-bold tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-teal-300" />
                      <span>Inquire for Supply</span>
                    </button>
                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="px-3 py-2 rounded bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Expand Image</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-[#0B6670] text-white border border-slate-700/70 hover:border-teal-400 transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-sm group-hover:opacity-100 opacity-90 hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-[#0B6670] text-white border border-slate-700/70 hover:border-teal-400 transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-sm group-hover:opacity-100 opacity-90 hover:scale-105"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Autoplay Progress Bar */}
            {isPlaying && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-30">
                <motion.div
                  key={currentIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#0B6670] to-[#F28C28]"
                />
              </div>
            )}
          </div>

          {/* Interactive Thumbnail Strip */}
          <div className="bg-[#051320] p-3 sm:p-4 border-t border-slate-800">
            <div className="grid grid-cols-6 gap-2 sm:gap-3">
              {slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative rounded-lg overflow-hidden border text-left transition-all duration-200 cursor-pointer group/thumb ${
                      isActive 
                        ? "border-[#F28C28] ring-2 ring-[#F28C28]/30 shadow-md" 
                        : "border-slate-800 hover:border-slate-600 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-1.5 bg-slate-950/90 hidden sm:block">
                      <p className="font-mono text-[9px] uppercase font-bold text-[#F28C28] truncate">
                        {slide.badge}
                      </p>
                      <p className="font-sans text-[10px] text-slate-300 font-medium truncate">
                        {slide.title}
                      </p>
                    </div>
                    {isActive && (
                      <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#F28C28] animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white cursor-pointer z-50 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <div 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-xl overflow-hidden border border-slate-800 bg-[#071A2B]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentSlide.imageUrl}
                  alt={currentSlide.title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 sm:p-6 bg-[#051320] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#F28C28] text-[#071A2B] font-mono text-xs font-bold">
                      {currentSlide.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#0B6670]" />
                      {currentSlide.location}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">
                    {currentSlide.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                    {currentSlide.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded bg-slate-800 hover:bg-[#0B6670] text-white transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="font-mono text-xs text-slate-400">
                    {currentIndex + 1} / {slides.length}
                  </span>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded bg-slate-800 hover:bg-[#0B6670] text-white transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
