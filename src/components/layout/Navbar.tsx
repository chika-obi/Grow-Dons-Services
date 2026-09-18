import React, { useState, useEffect } from "react";
import { Logo } from "../Logo";
import { ViewMode } from "../../types";
import { CONTACT_INFO, COMPANY_RC } from "../../data";
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  FileSpreadsheet, 
  ArrowRight, 
  FlaskConical, 
  MapPin,
  Home,
  Building2,
  Boxes,
  Truck,
  Users,
  Globe,
  HelpCircle,
  Layers
} from "lucide-react";

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  onRequestQuote: (prefillProduct?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onRequestQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { 
    label: string; 
    view: ViewMode; 
    icon: React.ComponentType<{ className?: string }>;
    isChemicals?: boolean;
  }[] = [
    { label: "HOME", view: "home", icon: Home },
    { label: "ABOUT", view: "about", icon: Building2 },
    { label: "CHEMICALS", view: "chemicals", icon: FlaskConical, isChemicals: true },
    { label: "PROCUREMENT", view: "procurement", icon: Boxes },
    { label: "LOGISTICS", view: "logistics", icon: Truck },
    { label: "LEADERSHIP", view: "leadership", icon: Users },
  ];

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col">
      {/* Top Micro Information Bar - Engineered Metadata Strip */}
      <div className="bg-[#051320] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B6670] animate-pulse" />
              <span className="font-semibold tracking-wider text-slate-200">{COMPANY_RC}</span>
            </span>
            <span className="text-slate-700">|</span>
            <a
              href={CONTACT_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 text-[11px] text-teal-300 font-mono"
            >
              <Globe className="h-3 w-3 text-teal-400" />
              <span>{CONTACT_INFO.website}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <MapPin className="h-3 w-3 text-[#F28C28]" />
              <span className="truncate max-w-xs xl:max-w-md">Port Harcourt, Nigeria</span>
            </span>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 text-[11px] text-slate-300 font-mono"
            >
              <Mail className="h-3 w-3 text-[#0B6670]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
            >
              <Phone className="h-3 w-3 text-[#0B6670]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Interactive Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#071A2B]/95 shadow-xl border-b border-slate-800 backdrop-blur-md py-2.5"
            : "bg-[#071A2B]/90 border-b border-slate-800/60 backdrop-blur-sm py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* Company Brand Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="outline-none text-left cursor-pointer focus:ring-1 focus:ring-[#0B6670] rounded-sm"
            aria-label="Grow Dons Services Ltd Home"
          >
            <Logo className="h-10 sm:h-11" colorLight={true} />
          </button>

          {/* Primary Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-200 relative flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "text-white bg-[#0B6670]/25 font-bold border-b-2 border-[#0B6670]"
                      : item.isChemicals
                      ? "text-teal-200 hover:text-white font-semibold hover:bg-slate-800/60"
                      : "text-slate-300 hover:text-white font-medium hover:bg-slate-800/40"
                  }`}
                >
                  <IconComponent
                    className={`h-3.5 w-3.5 transition-colors ${
                      isActive
                        ? "text-[#0B6670]"
                        : item.isChemicals
                        ? "text-teal-400"
                        : "text-slate-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Request a Quote (Safety Orange) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                onNavigate("quote");
                onRequestQuote();
              }}
              className="px-4 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs font-mono tracking-wider uppercase transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileSpreadsheet className="h-4 w-4 text-[#071A2B]" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onRequestQuote()}
              className="px-2.5 py-1.5 rounded bg-[#F28C28] text-[#071A2B] font-bold text-[11px] font-mono tracking-wider uppercase cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#071A2B] border-b border-slate-800 px-5 py-6 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2 pb-4 border-b border-slate-800">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-left text-sm font-mono tracking-wider py-2.5 px-3 rounded flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-[#0B6670]/30 text-white font-bold border-l-2 border-[#0B6670]"
                      : item.isChemicals
                      ? "text-teal-300 hover:text-white hover:bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComponent
                      className={`h-4 w-4 ${
                        isActive
                          ? "text-[#0B6670]"
                          : item.isChemicals
                          ? "text-teal-400"
                          : "text-slate-400"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
                </button>
              );
            })}

            {/* Quick Section Links (keeps navbar clean while facilitating navigation) */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col space-y-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate("home");
                  setTimeout(() => {
                    document.getElementById("operations-gallery")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                className="text-left text-xs font-mono tracking-wider py-2 px-3 rounded text-slate-400 hover:text-white flex items-center justify-between cursor-pointer hover:bg-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-teal-400" />
                  <span>Operations Gallery</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-600" />
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate("home");
                  setTimeout(() => {
                    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                className="text-left text-xs font-mono tracking-wider py-2 px-3 rounded text-slate-400 hover:text-white flex items-center justify-between cursor-pointer hover:bg-slate-800/30"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-3.5 w-3.5 text-[#F28C28]" />
                  <span>Frequently Asked Questions (FAQ)</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-600" />
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate("quote");
                onRequestQuote();
              }}
              className="w-full py-3 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <FileSpreadsheet className="h-4 w-4 text-[#071A2B]" />
              <span>Request a Quote (RFQ)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
