import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, HelpCircle, CheckCircle, Search, X } from "lucide-react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Chemicals Supply",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [faqSearchQuery, setFaqSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field when user edits
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = "Full name is required";
      valid = false;
    } else if (formState.name.trim().length < 3) {
      newErrors.name = "Please enter your full corporate name (min 3 chars)";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = "Corporate email is required";
      valid = false;
    } else if (!emailRegex.test(formState.email.trim())) {
      newErrors.email = "Please enter a valid corporate email address (e.g. name@company.com)";
      valid = false;
    }

    // Phone validation (Optional but if provided should be valid format)
    if (formState.phone.trim()) {
      const phoneRegex = /^[\d\s+\-()]{7,25}$/;
      if (!phoneRegex.test(formState.phone.trim())) {
        newErrors.phone = "Invalid phone number format. Use numeric digits, spaces, hyphens, or +";
        valid = false;
      }
    }

    // Message validation
    if (!formState.message.trim()) {
      newErrors.message = "Detailed operational parameters/specifications are required";
      valid = false;
    } else if (formState.message.trim().length < 15) {
      newErrors.message = "Please provide more details (min 15 characters) regarding mud or chemicals request";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    // Simulate API request to backend
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        interest: "Chemicals Supply",
        message: ""
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      // Clear success banner after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const query = faqSearchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  });

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#0a1128] text-white relative">
      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,129,167,0.04)_0,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1.5 bg-brand-orange/15 text-brand-orange rounded text-xs font-mono tracking-widest uppercase mb-3 border border-brand-orange/20">
            CONNECT WITH EXPERTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white mb-4">
            Request an Operational Quote
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full" />
          <p className="text-slate-400 font-sans mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Need urgent chemical dispatches, rental certifications, or fluid filtration setups in Rivers State? Contact our Port Harcourt support team today.
          </p>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/60 p-6 sm:p-8 rounded-xl border border-slate-805/45 border-slate-800 flex flex-col gap-4 text-center items-center hover:border-slate-700 transition-colors">
            <div className="h-12 w-12 rounded-full bg-[#005B94]/25 border border-[#005B94]/50 flex items-center justify-center text-[#38bdf8]">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-medium text-xs uppercase tracking-wider text-slate-400">Headquarters Address</h4>
              <p className="text-white text-sm sm:text-base font-sans mt-2 leading-relaxed font-semibold">
                New Airport Road, Off OPM Headquarters, Port Harcourt, Rivers State, Nigeria.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 p-6 sm:p-8 rounded-xl border border-slate-805/45 border-slate-800 flex flex-col gap-4 text-center items-center hover:border-slate-700 transition-colors">
            <div className="h-12 w-12 rounded-full bg-brand-orange/15 border border-brand-orange/45 flex items-center justify-center text-brand-orange">
              <Phone className="h-6 w-6" />
            </div>
            <div className="w-full">
              <h4 className="font-display font-medium text-xs uppercase tracking-wider text-slate-400">Direct Telephone Links</h4>
              <div className="mt-2.5 flex flex-col gap-1">
                <a href="tel:+2348034638006" className="text-white hover:text-brand-orange text-sm sm:text-base font-sans font-bold transition-all block">
                  +234 803 463 8006
                </a>
                <a href="tel:+2348128751260" className="text-white hover:text-brand-orange text-sm sm:text-base font-sans font-bold transition-all block">
                  +234 812 875 1260
                </a>
              </div>
              <div className="mt-3.5 pt-3 border-t border-slate-800/80">
                <a 
                  href="https://wa.me/2348034638006?text=Hello%20Grow%20Dons%20Services%2C%20I%20would%20like%20to%20request%20information%20about%20your%20services."
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-emerald-400 hover:text-emerald-350 hover:bg-emerald-500/10 text-xs font-sans font-bold transition-all py-1.5 px-3 rounded-md bg-emerald-500/5 border border-emerald-500/15 inline-flex items-center gap-1.5 shadow-sm max-w-full justify-center w-full sm:w-auto"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-6 sm:p-8 rounded-xl border border-slate-805/45 border-slate-800 flex flex-col gap-4 text-center items-center hover:border-slate-700 transition-colors">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-medium text-xs uppercase tracking-wider text-slate-400">Corporate Email inbox</h4>
              <p className="mt-3">
                <a href="mailto:growdonsservicesltd@gmail.com" className="text-white hover:text-brand-orange text-sm sm:text-base font-sans font-semibold transition-all">
                  growdonsservicesltd@gmail.com
                </a>
              </p>
              <span className="text-[10px] font-mono text-slate-500 block mt-1">Monitored 24/7 for marine emergencies</span>
            </div>
          </div>
        </div>

        {/* Split Section: Form & Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* RFQ Form panel */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-brand-orange" />
                <h3 className="text-xl sm:text-2xl font-display font-bold">Submit a Detailed Inquiry</h3>
              </div>

              {/* Form Element */}
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={`text-[11px] font-mono uppercase tracking-widest block mb-1.5 font-bold transition-colors ${errors.name ? "text-rose-400" : "text-slate-400"}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Engr. Chika Obi"
                      className={`w-full bg-slate-950 border ${errors.name ? "border-rose-500/80 focus:border-rose-500 text-rose-200" : "border-slate-800 focus:border-brand-orange text-white"} rounded px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-600 font-sans`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 font-sans mt-1.5 flex items-center gap-1">
                        <span>⚠️</span> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={`text-[11px] font-mono uppercase tracking-widest block mb-1.5 font-bold transition-colors ${errors.email ? "text-rose-400" : "text-slate-400"}`}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@company.com"
                      className={`w-full bg-slate-950 border ${errors.email ? "border-rose-500/80 focus:border-rose-500 text-rose-200" : "border-slate-800 focus:border-brand-orange text-white"} rounded px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-600 font-sans`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 font-sans mt-1.5 flex items-center gap-1">
                        <span>⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className={`text-[11px] font-mono uppercase tracking-widest block mb-1.5 font-bold transition-colors ${errors.phone ? "text-rose-400" : "text-slate-400"}`}>
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +234 803 123 4567"
                      className={`w-full bg-slate-950 border ${errors.phone ? "border-rose-500/80 focus:border-rose-500 text-rose-200" : "border-slate-800 focus:border-brand-orange text-white"} rounded px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-600 font-sans`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-400 font-sans mt-1.5 flex items-center gap-1">
                        <span>⚠️</span> {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="interest" className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-1.5 font-bold">
                      Primary Domain of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-2.5 text-sm text-white outline-none focus:border-brand-orange transition-all font-sans cursor-pointer"
                    >
                      <option value="Chemicals Supply">Chemicals Supply</option>
                      <option value="Mud Logging & Fluids">Mud Logging &amp; Fluids</option>
                      <option value="Solids Control Loop">Solids Control Loop</option>
                      <option value="Offshore Storage Rentals">Offshore Storage Lease</option>
                      <option value="Brine Filtration">Brine Filtration</option>
                      <option value="Structural Steel procurement">Materials Logistics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`text-[11px] font-mono uppercase tracking-widest block mb-1.5 font-bold transition-colors ${errors.message ? "text-rose-400" : "text-slate-400"}`}>
                    Detailed Parameters / Mud Specifications *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe mud formulations, target densities, equipment durations, chemical volume, etc."
                    className={`w-full bg-slate-950 border ${errors.message ? "border-rose-500/80 focus:border-rose-500 text-rose-200" : "border-slate-800 focus:border-brand-orange text-white"} rounded px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-600 font-sans leading-relaxed resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 font-sans mt-1.5 flex items-center gap-1">
                      <span>⚠️</span> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-slate-800 disabled:opacity-75 disabled:cursor-not-allowed text-white font-display font-semibold uppercase tracking-wider text-sm py-3.5 sm:py-4 rounded-md shadow-lg shadow-brand-orange/15 transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting RFQ Package...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Success dialogue window */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-sans text-xs flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <strong className="block text-white mb-0.5">Transmission Successful</strong>
                    <span>Your technical inquiry package has been successfully dispatched to the Port Harcourt sales and engineering division. A chemical supervisor will draft your quote parameters within 12 hours.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive Geographic Blueprint Map */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between shadow-xl">
            <div className="h-full flex flex-col justify-between gap-6">
              <div>
                <h4 className="font-display font-bold text-lg mb-1 leading-snug">Rivers State Operations Map</h4>
                <p className="text-slate-400 font-sans text-xs leading-relaxed">
                  Geographic blueprint highlighting our centralized materials storage warehouse and chemical testing base.
                </p>
              </div>

              {/* Styled SVG Map representing Port Harcourt */}
              <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl flex-grow flex items-center justify-center relative min-h-[220px] overflow-hidden group select-none">
                <svg
                  viewBox="0 0 320 220"
                  className="w-full h-full text-slate-800 opacity-60 transition-opacity group-hover:opacity-80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Styled marshy rivers state landmass path */}
                  <path
                    d="M 20 60 Q 60 40 120 70 T 200 90 T 260 50 T 290 100 Q 310 140 240 180 T 150 160 Q 90 210 50 180 Z"
                    fill="#151e3d"
                    stroke="#1e293b"
                    strokeWidth="2"
                  />
                  {/* Secondary creeks and deltas */}
                  <path d="M 60 40 L 80 80 L 70 120 L 90 150" stroke="#003049" strokeWidth="1" />
                  <path d="M 120 70 L 130 110 L 120 160 L 140 190" stroke="#003049" strokeWidth="1.5" />
                  <path d="M 200 90 L 190 130 L 210 180" stroke="#00d5ff" strokeWidth="1" opacity="0.3" />

                  {/* Pulsing Coordinates for Port Harcourt Base */}
                  <circle cx="180" cy="115" r="3" fill="#f77f00" />
                  <circle cx="180" cy="115" r="9" stroke="#f77f00" strokeWidth="1.5" className="animate-ping" style={{ transformOrigin: "180px 115px" }} />
                  <circle cx="180" cy="115" r="16" stroke="#f77f00" strokeWidth="1" opacity="0.25" />

                  {/* Port Harcourt grid target indicator lines */}
                  <line x1="180" y1="20" x2="180" y2="200" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                  <line x1="30" y1="115" x2="290" y2="115" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />

                  {/* Grid Labels */}
                  <text x="10" y="20" fill="#334155" fontSize="6 font-mono font-bold" className="font-mono">N 4&deg; 50&apos; 12&quot; / E 6&deg; 59&apos; 54&quot;</text>
                  <text x="186" y="112" fill="#fcbf49" fontSize="8" className="font-display font-extrabold tracking-wider">PHC BASE</text>
                  <text x="186" y="122" fill="#94a3b8" fontSize="6" className="font-sans">New Airport Rd</text>
                </svg>

                {/* Pulsing indicator marker overlap */}
                <div className="absolute top-4 right-4 bg-slate-900 border border-slate-800 py-1.5 px-2.5 rounded text-[10px] font-mono text-brand-orange flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>DISPATCH TERMINAL LIVE</span>
                </div>
              </div>

              {/* Geographic references summary bullet list */}
              <div className="space-y-3 pt-2 text-xs font-sans">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-500 font-medium">Core Logistics hub:</span>
                  <span className="font-semibold text-white">Off OPM Headquarters Road</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-500 font-medium">Primary Sea Outlet:</span>
                  <span className="font-semibold text-white">Onne Port Access Hub</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-500 font-medium">Average Response Dispatch:</span>
                  <span className="font-semibold text-brand-orange-light">Under 12 hrs</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs component section built perfectly into Contact view container */}
        <div className="mt-24 pt-20 border-t border-slate-800">
          
          {/* Header Block with Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800/60">
            <div className="flex items-center gap-2.5 text-[#fcbf49]">
              <HelpCircle className="h-6 w-6" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Frequently Discussed Parameters FAQ
              </h3>
              <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                {filteredFaqs.length} / {FAQS.length}
              </span>
            </div>

            {/* Premium styled search input */}
            <div className="w-full md:max-w-xs relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search FAQs by keyword..."
                value={faqSearchQuery}
                onChange={(e) => {
                  setFaqSearchQuery(e.target.value);
                  setActiveFaqIdx(null);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-8 py-2 text-xs text-white focus:border-brand-orange outline-none transition-all placeholder:text-slate-600 font-sans"
              />
              {faqSearchQuery && (
                <button
                  onClick={() => {
                    setFaqSearchQuery("");
                    setActiveFaqIdx(null);
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick filter pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 text-xs">
            <span className="text-slate-500 font-mono text-[10px] uppercase font-bold tracking-wider mr-1">Quick Filters:</span>
            {[
              { label: "Chemical Safety", term: "safety" },
              { label: "Timelines", term: "timeline" },
              { label: "Mud Chemistry", term: "mud" },
              { label: "Technical Services", term: "premium technical" },
              { label: "HSE Standards", term: "HSE" }
            ].map((tag) => {
              const isActive = faqSearchQuery.toLowerCase() === tag.term.toLowerCase();
              return (
                <button
                  key={tag.label}
                  onClick={() => {
                    if (isActive) {
                      setFaqSearchQuery("");
                    } else {
                      setFaqSearchQuery(tag.term);
                    }
                    setActiveFaqIdx(null);
                  }}
                  className={`px-3 py-1.5 rounded-full border text-[11px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand-orange/20 border-brand-orange text-brand-orange font-bold animate-pulse"
                      : "bg-slate-950/40 border-slate-850 hover:bg-slate-950 hover:border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          {/* FAQS Accordion Container */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-xl border border-dashed border-slate-800 bg-slate-950/20">
              <div className="text-slate-500 mb-3 text-2xl">🔍</div>
              <p className="text-sm font-sans text-slate-300 font-medium">
                No FAQ answers match &quot;{faqSearchQuery}&quot;
              </p>
              <p className="text-xs text-slate-600 font-sans mt-1">
                Try searching different terms or submit an RFQ parameter enquiry form above.
              </p>
              <button
                onClick={() => {
                  setFaqSearchQuery("");
                  setActiveFaqIdx(null);
                }}
                className="mt-4 px-3 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold rounded text-brand-orange transition-all cursor-pointer"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = activeFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/40 hover:bg-slate-900 border border-slate-805/40 border-slate-800 rounded-lg p-5 transition-colors cursor-pointer"
                    onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <h5 className="font-display font-bold text-sm sm:text-base text-white">
                        {faq.question}
                      </h5>
                      <span className="text-brand-orange font-bold text-lg">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-3.5 pt-3.5 border-t border-slate-800"
                          onClick={(e) => e.stopPropagation()} // halt parent click toggle
                        >
                          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
