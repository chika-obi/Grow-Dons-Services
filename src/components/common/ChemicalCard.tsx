import React from "react";
import { ChemicalProductItem } from "../../types";
import { FileText, ShieldCheck, ArrowRight, Package } from "lucide-react";

interface ChemicalCardProps {
  product: ChemicalProductItem;
  onRequestQuote: (productName: string) => void;
  onViewSpecs?: (product: ChemicalProductItem) => void;
}

export const ChemicalCard: React.FC<ChemicalCardProps> = ({
  product,
  onRequestQuote,
  onViewSpecs,
}) => {
  return (
    <div className="group relative bg-[#0B1E30] border border-slate-700/70 hover:border-[#0B6670] rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-[#0B6670]/10">
      
      {/* Top Header Strip: Category & Formula */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-[#0B6670] bg-[#0B6670]/10 px-2 py-0.5 rounded border border-[#0B6670]/30 uppercase">
            {product.category}
          </span>
          {product.chemicalFormula && (
            <span className="font-mono text-[11px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              {product.chemicalFormula}
            </span>
          )}
        </div>

        {/* Product Name & Subcategory */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#F28C28] transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-xs font-mono text-[#0B6670] font-semibold mt-1">
          {product.subCategory}
        </p>

        {/* Technical Description */}
        <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Technical Specifications / Packaging Readout (Only verified data) */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
          {product.packaging && (
            <div className="flex items-start gap-2 text-[11px] text-slate-400 font-mono">
              <Package className="h-3.5 w-3.5 text-[#F28C28] flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{product.packaging}</span>
            </div>
          )}

          {/* Documentation Compliance Badges */}
          <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-slate-400">
            {product.tdsAvailable && (
              <span className="flex items-center gap-1 text-emerald-400">
                <FileText className="h-3 w-3" />
                <span>TDS Available</span>
              </span>
            )}
            {product.sdsAvailable && (
              <span className="flex items-center gap-1 text-teal-400">
                <ShieldCheck className="h-3 w-3" />
                <span>SDS Certified</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Strip: Direct RFQ Quote Trigger */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
        {onViewSpecs && (
          <button
            onClick={() => onViewSpecs(product)}
            className="text-xs font-mono font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Technical Specs
          </button>
        )}

        <button
          onClick={() => onRequestQuote(product.name)}
          className="ml-auto px-3.5 py-2 rounded bg-[#0B6670] hover:bg-[#12828e] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm group-hover:bg-[#F28C28] group-hover:text-[#071A2B]"
        >
          <span>Request Quote</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Subtle Corner Accent Marker */}
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0B6670]/40 rounded-tr" />
    </div>
  );
};
