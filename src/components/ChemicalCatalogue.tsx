import React, { useState, useMemo } from "react";
import { CHEMICAL_PRODUCTS } from "../data";
import { ChemicalProductItem } from "../types";
import {
  Search,
  Filter,
  FlaskConical,
  FileSpreadsheet,
  FileText,
  ShieldCheck,
  Package,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface ChemicalCatalogueProps {
  onRequestQuote: (productName?: string) => void;
}

export const ChemicalCatalogue: React.FC<ChemicalCatalogueProps> = ({ onRequestQuote }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProduct, setActiveModalProduct] = useState<ChemicalProductItem | null>(null);

  const categories = [
    "All",
    "Drilling Fluid Chemicals",
    "Completion & Workover Chemicals",
    "Production Chemicals",
    "Commodity Minerals & Solvents"
  ];

  // Filter products based on category and live search query
  const filteredProducts = useMemo(() => {
    return CHEMICAL_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedCategory === "All" || prod.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        prod.name.toLowerCase().includes(q) ||
        prod.category.toLowerCase().includes(q) ||
        prod.subCategory.toLowerCase().includes(q) ||
        prod.application.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        (prod.chemicalFormula && prod.chemicalFormula.toLowerCase().includes(q)) ||
        prod.availableSpecifications.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="chemicals" className="py-16 sm:py-24 bg-[#071A2B] text-white relative">
      {/* Decorative technical grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B667010_1px,transparent_1px),linear-gradient(to_bottom,#0B667010_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B6670]/25 border border-[#0B6670]/50 text-[#F28C28] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <FlaskConical className="h-3.5 w-3.5 text-[#F28C28]" />
            <span>CORE CHEMICAL CATALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Oilfield Chemicals &amp; Reagents
          </h2>
          <div className="h-1 w-20 bg-[#F28C28] mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Explore our specialized chemical systems, drilling additives, completion salts, and production treaters. All products supplied with verified Technical Data Sheets (TDS) and Certificates of Analysis (CoA).
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 sm:p-5 mb-10 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input Field */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by chemical name, formula, or application..."
                className="w-full bg-slate-950 border border-slate-700/80 rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#0B6670] focus:ring-1 focus:ring-[#0B6670] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Clear search query"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Results Count & Quick Reset */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-slate-400 font-mono">
              <span>Showing: <strong className="text-white font-bold">{filteredProducts.length}</strong> Products</span>
              {(selectedCategory !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-[#F28C28] hover:underline cursor-pointer ml-2"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-800/80">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-[#0B6670] text-white shadow"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-12 text-center max-w-xl mx-auto">
            <FlaskConical className="h-10 w-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No matching chemical products found</h3>
            <p className="text-xs text-slate-400 mb-6">
              We frequently source custom chemical formulations and specialty reagents for specific operational requirements.
            </p>
            <button
              onClick={() => onRequestQuote(searchQuery || "Specialty Chemical Inquiry")}
              className="px-5 py-2.5 rounded bg-[#F28C28] text-[#071A2B] font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Submit Custom RFQ
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-slate-900/85 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-[#0B6670]/80 transition-all duration-200 shadow-md group"
              >
                <div>
                  {/* Top Category & Formula Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded bg-[#0B6670]/20 text-teal-300 border border-[#0B6670]/30 font-mono text-[10px] font-semibold uppercase tracking-wider">
                      {prod.subCategory}
                    </span>
                    {prod.chemicalFormula && (
                      <span className="font-mono text-[10px] text-slate-400 truncate max-w-[140px]" title={prod.chemicalFormula}>
                        {prod.chemicalFormula}
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-teal-200 transition-colors mb-2">
                    {prod.name}
                  </h3>

                  {/* Primary Application Tag */}
                  <div className="text-xs font-mono text-[#F28C28] font-medium mb-3">
                    App: <span className="text-slate-300 font-sans">{prod.application}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {prod.description}
                  </p>

                  {/* Key Specifications Snippet */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded p-2.5 text-[11px] mb-4">
                    <span className="text-slate-400 font-mono block text-[10px] uppercase tracking-wider mb-0.5">
                      Available Specification:
                    </span>
                    <span className="text-slate-200 line-clamp-2">
                      {prod.availableSpecifications}
                    </span>
                  </div>

                  {/* Packaging Summary */}
                  <div className="flex items-start gap-2 text-[11px] text-slate-400 mb-4">
                    <Package className="h-3.5 w-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{prod.packaging}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProduct(prod)}
                    className="text-xs font-bold text-teal-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1.5"
                  >
                    <span>View Technical Specs</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => onRequestQuote(prod.name)}
                    className="px-3 py-1.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#071A2B] border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-[#0B6670]/20 border border-[#0B6670]/40 flex items-center justify-center text-teal-400">
                  <FlaskConical className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-semibold block">
                    {activeModalProduct.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">
                    {activeModalProduct.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close product modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300">
              
              {/* Chemical Formula / Sub-category badge */}
              {activeModalProduct.chemicalFormula && (
                <div className="flex items-center gap-2 p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 font-mono text-xs">Formula / Composition:</span>
                  <span className="text-white font-mono font-bold text-xs">{activeModalProduct.chemicalFormula}</span>
                </div>
              )}

              {/* Full Description */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-1.5">
                  Product Overview &amp; Function
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              {/* Technical Benefits */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-2">
                  Technical Advantages &amp; Operational Benefits
                </h4>
                <ul className="space-y-2">
                  {activeModalProduct.technicalBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0B6670] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Specifications & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-800">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Available Specifications
                  </span>
                  <span className="text-white font-medium text-xs">
                    {activeModalProduct.availableSpecifications}
                  </span>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Packaging Format
                  </span>
                  <span className="text-white font-medium text-xs">
                    {activeModalProduct.packaging}
                  </span>
                </div>
              </div>

              {/* Compliance & Documentation Status */}
              <div className="bg-slate-900/50 p-3.5 rounded-lg border border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[11px]">Technical Data Sheet (TDS):</span>
                  <span className="text-emerald-400 font-bold font-mono">Available on Request</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[11px]">Safety Data Sheet (SDS):</span>
                  <span className="text-emerald-400 font-bold font-mono">Dispatched with Shipment</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[11px]">Quality Certification:</span>
                  <span className="text-teal-300 font-semibold">{activeModalProduct.certifications}</span>
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400 hidden sm:inline">
                Certificates of Analysis provided per batch shipment.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="px-4 py-2 rounded text-slate-400 hover:text-white text-xs font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const prodName = activeModalProduct.name;
                    setActiveModalProduct(null);
                    onRequestQuote(prodName);
                  }}
                  className="px-5 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span>Request Quote for this Product</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
