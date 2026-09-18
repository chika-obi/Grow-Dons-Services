import React, { useState } from "react";
import { COMPANY_NAME, COMPANY_RC, CORE_VALUES, INDUSTRIES_SERVED } from "../data";
import {
  Landmark,
  Target,
  Eye,
  Shield,
  Award,
  Users,
  Scale,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Building,
  ChevronDown
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "values" | "industries">("overview");

  const getIcon = (name: string) => {
    switch (name) {
      case "Shield":
        return <Shield className="h-4 w-4" />;
      case "Award":
        return <Award className="h-4 w-4" />;
      case "Users":
        return <Users className="h-4 w-4" />;
      case "Scale":
        return <Scale className="h-4 w-4" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-4 w-4" />;
      default:
        return <Cpu className="h-4 w-4" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-[#17232D] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071A2B]/5 border border-[#071A2B]/10 text-[#071A2B] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Landmark className="h-3.5 w-3.5 text-[#0B6670]" />
            <span>CORPORATE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#071A2B]">
            About Grow Dons Services Ltd
          </h2>
          <div className="h-1 w-20 bg-[#F28C28] mx-auto mt-4 rounded-full" />
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-3">
            REGISTRATION NUMBER: <span className="font-bold text-[#071A2B]">{COMPANY_RC}</span>
          </p>
        </div>

        {/* Corporate Overview 2-Column Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-[#071A2B] font-semibold">{COMPANY_NAME}</strong> is an indigenous Nigerian oilfield chemical supply and technical procurement company incorporated under Nigerian corporate law with registration number <strong className="text-[#071A2B]">{COMPANY_RC}</strong>.
            </p>
            <p>
              Headquartered in Port Harcourt, Rivers State, our core operations center on supplying verified, high-grade specialty chemicals for drilling fluid formulation, completion and workover brines, and production flow assurance. 
            </p>
            <p>
              Rather than maintaining a generic service model, we focus our expertise where chemical integrity directly influences operational efficiency, downhole stability, and reservoir recovery. Our chemical capabilities are complemented by disciplined procurement sourcing and dedicated site logistics.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* Vision Card */}
            <div className="bg-[#071A2B] text-white p-6 rounded-xl shadow-md border-l-4 border-[#F28C28]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F28C28] mb-2">
                <Eye className="h-4 w-4" />
                <span>Our Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To be the most dependable indigenous technical partner for oilfield chemicals and specialized industrial procurement in Nigeria and the Gulf of Guinea.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#F5F7F6] border border-slate-200 p-6 rounded-xl shadow-sm border-l-4 border-[#0B6670]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B6670] mb-2">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                To deliver certified chemical products and technical supplies that strictly conform to client specifications, maintaining uncompromising standards in safety, product quality, and delivery schedules.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Values Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0B6670] font-bold block mb-1">
              Guiding Principles
            </span>
            <h3 className="text-2xl font-display font-bold text-[#071A2B]">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val) => (
              <div
                key={val.name}
                className="bg-[#F5F7F6] border border-slate-200/90 rounded-xl p-5 hover:border-[#0B6670] transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0B6670] mb-3">
                  {getIcon(val.iconName)}
                </div>
                <h4 className="text-sm font-display font-bold text-[#071A2B] mb-1.5">
                  {val.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0B6670] font-bold block mb-1">
              Operational Scope
            </span>
            <h3 className="text-2xl font-display font-bold text-[#071A2B]">
              Industries &amp; Sectors Served
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-mono font-bold text-[#F28C28] uppercase tracking-wider mb-2">
                  Sector 0{idx + 1}
                </div>
                <h4 className="text-sm font-display font-bold text-[#071A2B] mb-2">
                  {ind.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
