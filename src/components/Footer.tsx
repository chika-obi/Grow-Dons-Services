import React from "react";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, FileArchive, Compass, FileDown } from "lucide-react";

interface FooterProps {
  onDownloadClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Logo className="h-11" colorLight={true} />
            <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed mt-2 max-w-sm">
              An indigenous Nigerian oil &amp; gas chemical and engineering service company. Built on values of trust, safety, and operational excellence.
            </p>
            
            {/* Interactive Company Profile download button */}
            <button
              onClick={onDownloadClick}
              className="mt-2 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-600 text-slate-300 hover:text-white text-xs py-3 px-4 rounded-lg font-display font-semibold tracking-wider uppercase transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer w-fit shadow-md shadow-black/10"
            >
              <FileDown className="h-4 w-4 text-brand-orange animate-bounce" />
              <span>Download Company Profile</span>
            </button>

            <div className="flex items-center gap-3 mt-2 text-slate-500">
              <a href="#" className="hover:text-brand-orange transition-colors">
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="hover:text-brand-orange transition-colors">
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <span className="text-slate-700">|</span>
              <span className="font-mono text-[10px] uppercase text-slate-500 tracking-wider font-semibold">RC: 1902045</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#fcbf49] mb-1">
              Navigations
            </h5>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-sans text-slate-400 font-medium">
              <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="hover:text-brand-orange transition-colors">
                Home Base
              </a>
              <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-orange transition-colors">
                Company Profile
              </a>
              <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-brand-orange transition-colors">
                Our Services
              </a>
              <a href="#products" onClick={(e) => handleLinkClick(e, "#products")} className="hover:text-brand-orange transition-colors">
                Fluid Products
              </a>
              <a href="#hse" onClick={(e) => handleLinkClick(e, "#hse")} className="hover:text-brand-orange transition-colors">
                HSE &amp; Objectives
              </a>
            </div>
          </div>

          {/* Contact Details Copier Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#fcbf49] mb-1">
              Get in Touch (PHC Office)
            </h5>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-sans text-slate-400 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>New Airport Road, Off OPM Headquarters, Port Harcourt, Rivers State, Nigeria.</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+2348034638006" className="hover:text-white transition-colors">
                    +234 803 463 8006
                  </a>
                  <a href="tel:+2348128751260" className="hover:text-white transition-colors mt-0.5">
                    +234 812 875 1260
                  </a>
                  <a 
                    href="https://wa.me/2348034638006?text=Hello%20Grow%20Dons%20Services%2C%20I%20would%20like%20to%20request%2520information%20about%20your%20services."
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-emerald-400 hover:text-emerald-350 transition-colors mt-1.5 flex items-center gap-1.5 font-bold text-[11px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <a href="mailto:growdonsservicesltd@gmail.com" className="hover:text-white transition-colors">
                  growdonsservicesltd@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-slate-900 my-8 flex items-center justify-between" />

        {/* Bottom micro-bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-500">
          <div>
            <span>&copy; {new Date().getFullYear()} <strong>Grow Dons Services Ltd</strong> (RC. 1902045). All rights reserved.</span>
          </div>
          
          {/* Scroll back to top control */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono uppercase text-slate-600 tracking-wider">Quality at its peak</span>
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:border-slate-500 hover:text-brand-orange flex items-center justify-center transition-all cursor-pointer shadow-md group"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
