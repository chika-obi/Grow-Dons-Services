import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Phone, Mail, Menu, X, ArrowUpRight, FileDown, Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation, LANGUAGES } from "../context/LanguageContext";

interface NavbarProps {
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLang, setLanguage, t } = useTranslation();

  // Monitor scroll height to trigger background styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav_home"), href: "#hero" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_products"), href: "#products" },
    { label: t("nav_news"), href: "#industry-news" },
    { label: t("nav_testimonials"), href: "#testimonials" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Timeout allows mobile drawer state to start collapsing so coordinates are highly accurate
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80; // height of the navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 60);
  };

  const selectedLangInfo = LANGUAGES.find(l => l.code === currentLang);

  return (
    <>
      {/* Outer Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col">
        {/* Top micro bar for quick support details */}
        <div className="bg-brand-blue-dark text-slate-300 text-xs py-2 px-4 shadow-inner hidden sm:block border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] tracking-widest text-slate-400 font-mono">RC: 1902045</span>
              </span>
              <span className="text-slate-400 font-sans">|</span>
              <a href="mailto:growdonsservicesltd@gmail.com" className="hover:text-amber-500 transition-colors flex items-center gap-1.5 font-sans">
                <Mail className="h-3 w-3 text-brand-orange" />
                <span>growdonsservicesltd@gmail.com</span>
              </a>
              <span className="text-slate-500 font-sans hidden md:inline">|</span>
              
              {/* Interactive Live Service Status Hover Card */}
              <div className="relative group/status hidden md:flex items-center gap-1.5 cursor-help py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 animate-pulse"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-wider font-mono">
                  {t("status_label")}: {t("status_online")}
                </span>
                <span className="text-slate-600 font-mono text-xs">•</span>
                <span className="text-[11px] text-slate-400 font-sans font-medium">
                  {t("status_response")}
                </span>

                {/* Live Support Channel popover card on hover */}
                <div className="absolute left-0 top-full mt-2 w-72 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl p-4 opacity-0 pointer-events-none group-hover/status:opacity-100 group-hover/status:pointer-events-auto transition-all duration-200 z-50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                      {t("tooltip_channel_title")}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                    {t("tooltip_channel_desc")}
                  </p>
                  
                  <div className="space-y-2 pt-2.5 border-t border-slate-900">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">{t("tooltip_dispatch")}</span>
                      <span className="text-emerald-400 font-bold font-mono">{t("tooltip_dispatch_time")}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">{t("tooltip_email")}</span>
                      <span className="text-amber-400 font-bold font-mono">{t("tooltip_email_time")}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">{t("tooltip_rfq")}</span>
                      <span className="text-blue-400 font-bold font-mono">{t("tooltip_rfq_time")}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-900/60 mt-1">
                      <a
                        href="https://wa.me/2348128751360?text=Hello%20Grow%20Dons%20Services%2C%20I%20would%20like%2520to%20request%20information%20on%2520your%20services."
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-[10px] font-bold uppercase tracking-wider py-1.5 rounded flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        <span>Chat Live on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side alignment with phone AND quick language switcher flag indicators */}
            <div className="flex items-center gap-4 font-sans font-medium text-[11px]">
              <a href="tel:+2348128751360" className="hover:text-amber-500 transition-colors flex items-center gap-1">
                <Phone className="h-3 w-3 text-brand-orange" />
                <span>+234 812 875 1360</span>
              </a>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    title={lang.name}
                    className={`px-1.5 py-0.5 rounded transition-all text-[10px] font-mono cursor-pointer flex items-center gap-0.5 ${
                      currentLang === lang.code
                        ? "bg-brand-orange/20 text-white font-bold border border-brand-orange/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main interactive header */}
        <header
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-slate-900/95 shadow-md border-b border-slate-800 backdrop-blur-md py-2"
              : "bg-slate-950/80 border-b border-transparent backdrop-blur-sm py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative">
            {/* Logo element */}
            <a href="#hero" className="outline-none animate-fade-in" onClick={(e) => handleLinkClick(e, "#hero")}>
              <Logo className="h-10 sm:h-11" colorLight={true} />
            </a>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-slate-200 hover:text-brand-orange font-medium text-sm tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Call to actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Direct Service Status Indicator (Desktop Sticky bar) */}
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-3.5 py-2.5 rounded-md hover:border-slate-705 transition-colors select-none text-[11px] font-medium text-slate-300 relative group/sticky cursor-help">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] tracking-wider text-emerald-400 font-bold uppercase">{t("status_online")}</span>
                <span className="text-slate-600 font-sans">•</span>
                <span className="text-slate-400 font-sans text-[10px]">{t("status_response").replace("Response time: ", "")}</span>

                {/* Popover on hover */}
                <div className="absolute right-0 top-full mt-2 w-72 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl p-4 opacity-0 pointer-events-none group-hover/sticky:opacity-100 group-hover/sticky:pointer-events-auto transition-all duration-200 z-50">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                      {t("tooltip_channel_title")}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2.5 leading-relaxed">
                    {t("tooltip_channel_desc")}
                  </p>
                  
                  <div className="space-y-1.5 pt-2 border-t border-slate-900">
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px]">
                      <span className="text-slate-400">{t("tooltip_dispatch")}</span>
                      <span className="text-emerald-450 font-bold font-mono">{t("tooltip_dispatch_time")}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px]">
                      <span className="text-slate-400">{t("tooltip_email")}</span>
                      <span className="text-amber-450 font-bold font-mono">{t("tooltip_email_time")}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px]">
                      <span className="text-slate-400">{t("tooltip_rfq")}</span>
                      <span className="text-blue-400 font-bold font-mono">{t("tooltip_rfq_time")}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-900/60 mt-1">
                      <a
                        href="https://wa.me/2348128751360?text=Hello%20Grow%20Dons%20Services%2C%20I%20would%20like%2520to%20request%20information%20on%2520your%20services."
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-[10px] font-bold uppercase tracking-wider py-1.5 rounded flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        <span>Chat Live on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Lang selector in header */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md shadow-black/10"
                >
                  <Globe className="h-3.5 w-3.5 text-brand-orange animate-pulse" />
                  <span>{selectedLangInfo?.label}</span>
                  <ChevronDown className={`h-3 w-3 text-slate-500 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isLangOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 bg-slate-950 border border-slate-800 rounded-lg shadow-2xl p-1.5 z-20"
                      >
                        <div className="px-2.5 py-1.5 border-b border-slate-900 mb-1">
                          <span className="text-[9px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                            Select Language
                          </span>
                        </div>
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLangOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-2 text-xs rounded transition-colors text-left cursor-pointer ${
                              currentLang === lang.code
                                ? "bg-brand-orange/15 text-brand-orange font-bold border-l-2 border-brand-orange"
                                : "text-slate-300 hover:text-white hover:bg-slate-900"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-[14px]">{lang.flag}</span>
                              <span className="font-sans">{lang.name}</span>
                            </span>
                            {currentLang === lang.code && <Check className="h-3.5 w-3.5 text-brand-orange" />}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Profile Download CTA */}
              <button
                onClick={onDownloadClick}
                className="border border-slate-800 bg-slate-900/70 hover:bg-slate-900 hover:border-slate-600 text-slate-300 hover:text-white text-xs px-4 py-2.5 rounded-md font-display font-semibold tracking-wider uppercase transition-all duration-200 active:scale-[0.98] flex items-center gap-1.5 cursor-pointer shadow-md shadow-black/20"
              >
                <FileDown className="h-3.5 w-3.5 text-brand-orange" />
                <span>{t("cta_download")}</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="bg-brand-orange hover:bg-brand-orange/95 text-white text-xs px-5 py-2.5 rounded-md font-display font-semibold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-brand-orange/15 hover:shadow-brand-orange/25 active:scale-[0.98] flex items-center gap-1.5 cursor-pointer"
              >
                <span>{t("cta_rfq")}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 z-40 lg:hidden shadow-2xl overflow-hidden"
                >
                  <div className="px-5 py-6 flex flex-col gap-5">
                    {/* Navigation list */}
                    <div className="flex flex-col gap-2.5">
                      {navLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="text-slate-300 hover:text-brand-orange py-2 text-base font-semibold tracking-wide border-b border-slate-800/40 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                    
                    {/* Support info */}
                    <div className="flex flex-col gap-3 pt-2">
                      <a
                        href="tel:+2348128751360"
                        className="flex items-center gap-3 text-slate-300 hover:text-brand-orange text-sm transition-colors py-1"
                      >
                        <Phone className="h-4 w-4 text-brand-orange" />
                        <span>+234 812 875 1360</span>
                      </a>
                      <a
                        href="mailto:growdonsservicesltd@gmail.com"
                        className="flex items-center gap-3 text-slate-300 hover:text-brand-orange text-sm transition-colors py-1"
                      >
                        <Mail className="h-4 w-4 text-brand-orange" />
                        <span>growdonsservicesltd@gmail.com</span>
                      </a>
                    </div>

                    {/* Live Support Status for Mobile */}
                    <div className="p-3.5 bg-slate-950 border border-emerald-500/10 rounded-xl flex items-center justify-between shadow-lg select-none">
                      <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <div>
                          <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                            <span>{t("status_label")}</span>
                            <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono font-semibold">
                              {t("status_online")}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5 font-sans">
                            {t("status_response")}
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 font-bold bg-slate-900 border border-slate-800 px-2 py-1 rounded">
                        24/7 LIVE
                      </span>
                    </div>

                    {/* Mobile Language selector */}
                    <div className="flex flex-col gap-2 pt-3 border-t border-slate-800/40">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold px-1 flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-brand-orange" />
                        <span>Change Language / Dialect</span>
                      </span>
                      <div className="grid grid-cols-5 gap-1.5 mt-1">
                        {LANGUAGES.map((lang) => {
                          const isSelected = currentLang === lang.code;
                          return (
                            <button
                              key={lang.code}
                              onClick={() => setLanguage(lang.code)}
                              className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-slate-800 border-brand-orange text-white"
                                  : "bg-slate-950/60 border-slate-900 text-slate-400 hover:text-white"
                              }`}
                            >
                              <span className="text-lg">{lang.flag}</span>
                              <span className="text-[9px] font-bold uppercase tracking-widest mt-1">
                                {lang.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-800/40">
                      {/* Mobile Profile Download CTA */}
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          onDownloadClick();
                        }}
                        className="border border-slate-800 bg-slate-950/60 text-slate-300 hover:text-white text-center text-sm font-semibold py-3 rounded-md uppercase tracking-wider block transition-colors duration-200 hover:bg-slate-900 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FileDown className="h-4 w-4 text-brand-orange" />
                        <span>{t("cta_download_full")}</span>
                      </button>

                      <a
                        href="#contact"
                        onClick={(e) => handleLinkClick(e, "#contact")}
                        className="bg-brand-orange text-white text-center text-sm font-semibold py-3 rounded-md uppercase tracking-wider block transition-colors duration-200 hover:bg-orange-600 flex items-center justify-center"
                      >
                        {t("cta_quote")}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>
      </div>

      {/* Structural Spacer block that matches the height of our fixed navigation.
          Prevents the Hero element from hiding underneath. */}
      <div className="h-[74px] sm:h-[110px] lg:h-[118px] w-full pointer-events-none" />
    </>
  );
};
