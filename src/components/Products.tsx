import React, { useState, useMemo } from "react";
import { PRODUCTS, FLUID_SYSTEMS } from "../data";
import { Search, Filter, Beaker, FileSpreadsheet, Send, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  // Extract unique categories for tab filtering
  const categories = useMemo(() => {
    const list = new Set(PRODUCTS.map((p) => p.category));
    return ["All", ...Array.from(list)];
  }, []);

  // Filter products based on active tab and search criteria
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;
      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (prod.chemicalFormula && prod.chemicalFormula.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleInquiry = (productName: string) => {
    // Scroll down to the contact form and autofill if possible
    const contactSection = document.querySelector("#contact");
    const interestSelect = document.querySelector("#interest") as HTMLSelectElement;
    const messageInput = document.querySelector("#message") as HTMLTextAreaElement;

    if (interestSelect) {
      interestSelect.value = "Chemicals Supply";
    }
    if (messageInput) {
      messageInput.value = `Hello Grow Dons, we are interested in getting a technical specifications sheet and quotation for: ${productName}. Please forward the pricing and chemical formulation sheets.`;
    }

    if (contactSection) {
      const offset = 80;
      const elementPos = contactSection.getBoundingClientRect().top;
      const offsetPos = elementPos + window.scrollY - offset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="products" className="py-14 sm:py-20 bg-slate-900 text-white relative">
      {/* Decorative vector overlays */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-orange/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-blue-light/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1.5 bg-brand-orange/15 text-brand-orange rounded text-xs font-mono tracking-widest uppercase mb-3 border border-brand-orange/25">
            PRODUCT SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Our Specialty Fluids &amp; Compounds
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded-full mt-4" />
          <p className="text-slate-400 font-sans mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Browse through our certified downhole chemical lines, API-grade mud minerals, completion solvents, and oilfield additives.
          </p>
        </div>

        {/* Fluid Form Systems banner/bento */}
        <div className="mb-16">
          <p className="font-mono text-center text-xs tracking-wider uppercase text-slate-500 mb-6 font-semibold">
            PRIMARY FORM FORMS / MUD SYSTEM ARCHITECTURES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {FLUID_SYSTEMS.map((system) => (
              <div
                key={system.name}
                className="bg-slate-950/70 border border-slate-800 p-5 rounded-lg flex flex-col justify-between hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="h-1.5 w-8 bg-brand-orange rounded-full mb-3" />
                  <h4 className="font-display font-bold text-xs sm:text-sm tracking-wide text-white leading-tight">
                    {system.name}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed font-sans">
                  {system.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Catalog Control Deck: Search and Filter Selector */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input bar */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search compound, formula, or use-case..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-850 focus:border-brand-orange outline-none text-sm transition-all focus:ring-1 focus:ring-brand-orange placeholder:text-slate-500 font-sans"
              />
            </div>
            {/* Reset helper */}
            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-xs text-brand-orange hover:text-orange-400 font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="h-[1px] bg-slate-900 my-4" />

          {/* Categories Tab scrolling row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-md font-display font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-orange text-white"
                    : "bg-slate-900 hover:bg-slate-850 text-slate-350 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((prod) => {
                const isExpanded = expandedProductId === prod.id;
                return (
                  <motion.div
                    key={prod.id}
                    layout="position"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className={`bg-slate-950/40 border p-6 sm:p-7 rounded-xl flex flex-col justify-between transition-all duration-300 ${
                      isExpanded
                        ? "border-brand-orange/60 shadow-2xl bg-slate-950/80"
                        : "border-slate-805/50 border-slate-800/80 hover:border-slate-700 hover:shadow-lg"
                    }`}
                  >
                    <div>
                      {/* Product Header tags */}
                      <div className="flex justify-between items-start gap-4 mb-3.5">
                        <span className="text-[10px] font-mono tracking-widest text-brand-orange-light bg-slate-900 py-1 px-2 rounded uppercase border border-slate-850">
                          {prod.category}
                        </span>
                        {prod.chemicalFormula && (
                          <span className="text-[10px] font-mono text-slate-500">
                            {prod.chemicalFormula}
                          </span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 leading-snug">
                        {prod.name}
                      </h3>
                      
                      <p className="text-slate-400 font-sans text-sm leading-relaxed mb-4 line-clamp-3">
                        {prod.description}
                      </p>

                      {/* Expanded Section with detailed bullet highlights */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-slate-900 flex flex-col gap-3"
                          >
                            {prod.applications && prod.applications.length > 0 && (
                              <div>
                                <h5 className="text-[10px] font-mono uppercase text-slate-500 tracking-wider mb-1.5 font-bold">
                                  Standard Downhole Applications:
                                </h5>
                                <div className="flex flex-wrap gap-1.5">
                                  {prod.applications.map((app) => (
                                    <span
                                      key={app}
                                      className="text-xs font-sans text-slate-300 bg-slate-900 py-1 px-2.5 rounded border border-slate-800"
                                    >
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Footer Controls of the card */}
                    <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center justify-between gap-4">
                      <button
                        onClick={() => setExpandedProductId(isExpanded ? null : prod.id)}
                        className="text-xs font-mono text-[#0081a7] hover:text-[#00c5ff] transition-colors cursor-pointer"
                      >
                        {isExpanded ? "Show Less" : "Technical Specs"}
                      </button>

                      <button
                        onClick={() => handleInquiry(prod.name)}
                        className="text-xs font-display font-semibold bg-brand-orange/10 hover:bg-brand-orange text-white hover:text-white px-3.5 py-1.5 rounded border border-brand-orange/30 transition-all cursor-pointer flex items-center gap-1 group"
                      >
                        <span>Instant RFQ</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-slate-950 p-12 text-center rounded-2xl border border-dashed border-slate-800">
            <Beaker className="h-10 w-10 text-slate-600 mx-auto mb-4" />
            <h4 className="font-display font-bold text-lg text-white mb-1">No Compounds Found</h4>
            <p className="text-slate-500 font-sans text-sm max-w-sm mx-auto">
              We couldn't find any chemical system matching &ldquo;{searchQuery}&rdquo;. Try using simple words like &ldquo;mud&rdquo;, &ldquo;inhibitor&rdquo;, or &ldquo;barite&rdquo;.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
