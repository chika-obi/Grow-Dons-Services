import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS, CONTACT_INFO } from "../data";
import { FAQItem } from "../types";
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  FileSpreadsheet, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle2,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface FaqSectionProps {
  id?: string;
  onRequestQuote?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ 
  id = "faq",
  onRequestQuote 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true, // First item open by default
    1: true  // Second item open by default
  });

  const categories = ["All", "General", "Chemicals", "Procurement", "Logistics & HSE", "Commercial & RFQ"];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory = 
        activeCategory === "All" || faq.category === activeCategory;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        (faq.category && faq.category.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    filteredFaqs.forEach((_, idx) => {
      all[idx] = true;
    });
    setOpenItems(all);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  return (
    <section id={id} className="py-16 sm:py-20 bg-[#051320] relative border-b border-slate-800">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0B6670]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F28C28]/20 border border-[#F28C28]/50 text-[#F28C28] font-mono text-xs font-bold mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>OPERATIONAL CLARITY &amp; INQUIRIES</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Frequently Asked Questions
          </h2>

          <p className="mt-2.5 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
            Essential operational details regarding our oilfield chemical portfolio, technical data sheets, delivery timelines, quality compliance, and commercial RFQs.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-[#071A2B] rounded-xl p-4 border border-slate-800 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs (e.g., barite, CoA, lead times)..."
                className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#0B6670] focus:ring-1 focus:ring-[#0B6670]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Expand / Collapse All Toggle */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 self-end md:self-center">
              <button
                onClick={expandAll}
                className="hover:text-teal-300 underline cursor-pointer"
              >
                Expand All
              </button>
              <span>&bull;</span>
              <button
                onClick={collapseAll}
                className="hover:text-teal-300 underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-800">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#0B6670] text-white font-bold shadow"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isOpen 
                      ? "bg-[#071A2B] border-teal-500/50 shadow-md" 
                      : "bg-[#071A2B]/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 p-1 rounded transition-colors ${
                        isOpen ? "bg-[#0B6670] text-white" : "bg-slate-800 text-slate-400"
                      }`}>
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      <div>
                        {faq.category && (
                          <span className="inline-block px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-[#F28C28] uppercase font-semibold mb-1">
                            {faq.category}
                          </span>
                        )}
                        <h3 className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`p-1.5 rounded-full bg-slate-800 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-[#0B6670] text-white" : "text-slate-400"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 bg-slate-900/40">
                          <p className="mt-2 text-slate-200">{faq.answer}</p>
                          
                          <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                            <span className="flex items-center gap-1.5 text-teal-400">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Verified Operational Policy &bull; RC. 1902045</span>
                            </span>

                            {onRequestQuote && (
                              <button
                                onClick={onRequestQuote}
                                className="text-[#F28C28] hover:text-white font-bold transition-colors flex items-center gap-1 cursor-pointer"
                              >
                                <span>Request Quote for this</span>
                                <ChevronDown className="h-3 w-3 -rotate-90" />
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#071A2B] rounded-xl border border-slate-800">
              <p className="font-mono text-xs text-slate-400">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-3 px-3 py-1.5 rounded bg-[#0B6670] text-white font-mono text-xs font-semibold cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Dedicated Direct Commercial Helpdesk Banner */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-[#091C2E] to-[#0B253C] border border-[#0B6670]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#F28C28] font-mono text-xs font-bold mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>CUSTOM CONTRACT SPECIFICATIONS?</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
              Have a Technical Question Not Addressed Above?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
              Our Port Harcourt technical operations team provides custom chemical formulation parameters, batch testing, and tailored shorebase delivery logistics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            {onRequestQuote && (
              <button
                onClick={onRequestQuote}
                className="px-4 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <FileSpreadsheet className="h-4 w-4" />
                <span>Submit RFQ</span>
              </button>
            )}

            <a
              href="https://wa.me/2348034638006?text=Hello%20Grow%20Dons%20Services%2C%20I%20have%20a%20technical%20question%20regarding%20oilfield%20chemical%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded border border-emerald-500/60 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
