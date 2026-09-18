import React, { useState } from "react";
import { TECHNICAL_SOLUTIONS } from "../data";
import { FlaskConical, Droplets, ShieldCheck, CheckCircle2, ArrowRight, Activity, Wrench } from "lucide-react";

interface TechnicalSolutionsProps {
  onSelectSolutionCategory?: (category: string) => void;
  onRequestQuote: () => void;
}

export const TechnicalSolutions: React.FC<TechnicalSolutionsProps> = ({
  onSelectSolutionCategory,
  onRequestQuote
}) => {
  const [activeTab, setActiveTab] = useState<string>(TECHNICAL_SOLUTIONS[0].id);

  const activeSolution =
    TECHNICAL_SOLUTIONS.find((s) => s.id === activeTab) || TECHNICAL_SOLUTIONS[0];

  const handleCategoryNavigate = (domain: string) => {
    const chemicalsSection = document.querySelector("#chemicals");
    if (chemicalsSection) {
      const offset = 80;
      const elementPos = chemicalsSection.getBoundingClientRect().top;
      const offsetPos = elementPos + window.scrollY - offset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-[#F5F7F6] text-[#17232D] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B6670]/10 border border-[#0B6670]/20 text-[#0B6670] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Activity className="h-3.5 w-3.5 text-[#0B6670]" />
            <span>OPERATIONAL APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#071A2B]">
            Engineered Technical Solutions
          </h2>
          <div className="h-1 w-20 bg-[#F28C28] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Grow Dons provides purposeful chemical systems tailored to solve complex downhole and surface operational challenges across the asset lifecycle.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {TECHNICAL_SOLUTIONS.map((sol) => {
            const isActive = sol.id === activeTab;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                className={`px-5 py-3 rounded-lg font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#071A2B] text-white shadow-md border-b-2 border-[#F28C28]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <FlaskConical className={`h-4 w-4 ${isActive ? "text-[#F28C28]" : "text-[#0B6670]"}`} />
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Deep-Dive Card */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B6670]">
                {activeSolution.domain}
              </span>
              <h3 className="text-2xl font-display font-bold text-[#071A2B] mt-1">
                {activeSolution.title}
              </h3>
            </div>
            <button
              onClick={() => handleCategoryNavigate(activeSolution.domain)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B6670] hover:text-[#071A2B] transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>View Chemical Products</span>
              <ArrowRight className="h-4 w-4 text-[#F28C28]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Operational Challenges Column */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-lg p-5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F28C28]" />
                <span>Operational Challenges Addressed</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {activeSolution.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-slate-400 font-mono text-xs mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Key Formulated Products
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeSolution.keyChemicals.map((chem, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white border border-slate-200 text-slate-800 rounded text-xs font-medium"
                    >
                      {chem}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Benefits & Value Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B6670] mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#0B6670]" />
                  <span>Technical &amp; Engineering Value</span>
                </h4>
                <div className="space-y-3.5">
                  {activeSolution.operationalBenefits.map((benefit, idx) => {
                    const [headline, detail] = benefit.split(": ");
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#0B6670] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-sm font-bold text-[#071A2B] block">
                            {headline}
                          </strong>
                          <span className="text-xs sm:text-sm text-slate-600 leading-relaxed block mt-0.5">
                            {detail || benefit}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inquire for Solution Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Custom chemical formulations available for specific well parameters.
                </span>
                <button
                  onClick={onRequestQuote}
                  className="px-4 py-2 rounded bg-[#071A2B] hover:bg-[#0B6670] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Inquire for Project
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
