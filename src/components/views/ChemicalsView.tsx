import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChemicalProductItem } from "../../types";
import { CHEMICAL_PRODUCTS } from "../../data";
import { SectionHeader } from "../common/SectionHeader";
import { ChemicalCard } from "../common/ChemicalCard";
import { Search, Filter, FlaskConical, CheckCircle2, FileText } from "lucide-react";

interface ChemicalsViewProps {
  onRequestQuote: (prefillProduct?: string) => void;
  onViewSpecs?: (product: ChemicalProductItem) => void;
}

export const ChemicalsView: React.FC<ChemicalsViewProps> = ({
  onRequestQuote,
  onViewSpecs,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Drilling Fluid Chemicals",
    "Completion & Workover Chemicals",
    "Production Chemicals",
    "Commodity Minerals & Solvents",
  ];

  const filteredProducts = CHEMICAL_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.application.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.chemicalFormula &&
        product.chemicalFormula.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#071A2B] text-white pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Industrial Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Page Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeader
            code="DIV-01"
            tag="Primary Business Portfolio"
            title="Oilfield Chemicals &amp; Specialized Reagents"
            description="High-grade technical chemical products formulated for drilling fluids, clear completion brines, continuous production treatment, and industrial maintenance."
            dark={true}
          />
        </motion.div>

        {/* Filter & Search Bar with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-[#091C2E] border border-slate-800 rounded-xl p-4 sm:p-5 mb-10 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0B6670] text-white font-bold shadow-md ring-1 ring-teal-400/50"
                      : "bg-[#051320] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chemical name or formula..."
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
              />
            </div>

          </div>
        </motion.div>

        {/* Product Grid with Motion */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.3) }}
                >
                  <ChemicalCard
                    product={product}
                    onRequestQuote={onRequestQuote}
                    onViewSpecs={onViewSpecs}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-[#091C2E] rounded-xl border border-slate-800 p-8 shadow-xl"
          >
            <FlaskConical className="h-10 w-10 text-slate-600 mx-auto mb-3" />
            <p className="text-white font-display font-semibold">No chemicals matched your search query.</p>
            <p className="text-slate-400 text-xs font-mono mt-1">Try changing the category or clearing the search box.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded bg-[#0B6670] hover:bg-[#12828e] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Technical Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-5 rounded-xl bg-[#051320] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-teal-400 flex-shrink-0" />
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              <strong>Quality Assurance:</strong> All chemical deliveries are accompanied by batch Certificates of Analysis (CoA), Technical Data Sheets (TDS), and full Safety Data Sheets (SDS).
            </p>
          </div>
          <button
            onClick={() => onRequestQuote()}
            className="px-4 py-2 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-mono font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer shadow-md"
          >
            Custom Sourcing Request
          </button>
        </motion.div>

      </div>
    </div>
  );
};
