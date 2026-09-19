import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CHEMICAL_PRODUCTS, CONTACT_INFO, COMPANY_RC } from "../../data";
import { SectionHeader } from "../common/SectionHeader";
import {
  FileSpreadsheet,
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  Phone,
} from "lucide-react";

export const QuoteView: React.FC = () => {
  const [formData, setFormData] = useState({
    productOrMaterial: "",
    specification: "",
    quantity: "",
    deliveryLocation: "Port Harcourt",
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    additionalRequirements: "",
  });

  const [rfqRef, setRfqRef] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const generateRef = () => {
    return `GD-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatRfqMessage = (ref: string) => {
    return `*GROW DONS SERVICES LTD - OFFICIAL RFQ SUBMISSION*
Reference: ${ref}
---------------------------------
*Product / Material:* ${formData.productOrMaterial || "General Oilfield Chemicals"}
*Specifications / Grade:* ${formData.specification || "Standard API / ASTM"}
*Required Quantity:* ${formData.quantity || "To be discussed"}
*Target Delivery Site:* ${formData.deliveryLocation || "Port Harcourt"}
---------------------------------
*Company / Operator:* ${formData.companyName || "Confidential Client"}
*Contact Person:* ${formData.contactPerson || "Procurement Desk"}
*Email:* ${formData.email || "N/A"}
*Phone:* ${formData.phone || "N/A"}
*Additional Scope:* ${formData.additionalRequirements || "None specified"}
---------------------------------
Sent via Grow Dons Services Ltd Quotation Portal (${COMPANY_RC})`;
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const newRef = generateRef();
    setRfqRef(newRef);
    setIsGenerated(true);
  };

  const handleSendWhatsApp = () => {
    const ref = rfqRef || generateRef();
    const message = formatRfqMessage(ref);
    const encoded = encodeURIComponent(message);
    const waNumber = CONTACT_INFO.whatsappRaw || "2348128751360";
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank");
  };

  const handleSendEmail = () => {
    const ref = rfqRef || generateRef();
    const subject = encodeURIComponent(`[RFQ: ${ref}] Supply Inquiry: ${formData.productOrMaterial || "Oilfield Chemicals"}`);
    const body = encodeURIComponent(formatRfqMessage(ref));
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    const message = formatRfqMessage(rfqRef || generateRef());
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
            code="RFQ-PORTAL"
            tag="Commercial Inquiry Gateway"
            title="Request a Formal Technical Quotation"
            description="Prepare and dispatch detailed chemical specifications, volumes, and delivery criteria directly to our Port Harcourt commercial desk via WhatsApp or corporate email."
            dark={true}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive RFQ Form (7 cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 bg-[#091C2E] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <form onSubmit={handleGenerate} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Product / Chemical Required *
                  </label>
                  <input
                    type="text"
                    name="productOrMaterial"
                    required
                    value={formData.productOrMaterial}
                    onChange={handleInputChange}
                    placeholder="e.g. API Bentonite, Demulsifier, CaBr2"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Specification or Grade
                  </label>
                  <input
                    type="text"
                    name="specification"
                    value={formData.specification}
                    onChange={handleInputChange}
                    placeholder="e.g. API 13A, 94-97% Anhydrous, SG 1.40"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Required Quantity / Packaging *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g. 50 MT (25kg bags), 20 Drums, 4 IBCs"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Target Delivery Location *
                  </label>
                  <select
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#051320] border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                  >
                    <option value="Port Harcourt Facility">Port Harcourt Facility / Yard</option>
                    <option value="Onne Port & Free Zone">Onne Port &amp; Free Zone</option>
                    <option value="Warri Shorebase">Warri Shorebase</option>
                    <option value="Lagos Logistics Corridor">Lagos Commercial Hub</option>
                    <option value="Custom Wellsite / Client Gate">Custom Wellsite / Client Gate</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="font-mono text-xs text-[#0B6670] uppercase font-bold tracking-wider mb-3">
                  Client &amp; Requester Credentials
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Shell Nigeria, Seplat, TotalEnergies"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Contact Person &amp; Title *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="e.g. Engr. Johnson - Drilling Super"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="procurement@company.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Direct Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Additional Scope / Delivery Directives (Optional)
                </label>
                <textarea
                  name="additionalRequirements"
                  rows={3}
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  placeholder="Specific delivery target date, required CoA parameters, bulk sac lifting requirements, etc."
                  className="w-full px-3.5 py-2 rounded-lg bg-[#051320] border border-slate-700 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-[#0B6670] transition-colors"
                />
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#F28C28] hover:bg-[#e07b16] text-[#071A2B] font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Format &amp; Generate RFQ Package</span>
                </button>
              </div>

            </form>
          </motion.div>

          {/* Right: Dispatch Console (5 cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            
            {/* Dispatch Instructions & Quick Actions */}
            <div className="bg-[#091C2E] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-800 font-mono text-xs text-teal-400 uppercase font-bold">
                <Send className="h-4 w-4 text-teal-400" />
                <span>Instant Quotation Transmission</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Transmit your formatted RFQ directly to our commercial coordinators via WhatsApp or email. All inquiries receive direct technical and commercial review.
              </p>

              {rfqRef && (
                <div className="mb-6 p-3 rounded bg-[#051320] border border-slate-700 font-mono text-xs flex items-center justify-between">
                  <span className="text-slate-400">Generated Reference:</span>
                  <span className="text-teal-300 font-bold">{rfqRef}</span>
                </div>
              )}

              <div className="space-y-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 rounded-lg border border-emerald-500/80 bg-emerald-950/60 hover:bg-emerald-900/70 text-emerald-300 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>Send via WhatsApp Commercial Desk</span>
                </button>

                <button
                  onClick={handleSendEmail}
                  className="w-full py-3.5 rounded-lg bg-[#0B6670] hover:bg-[#12828e] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send via Corporate Email</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="w-full py-2.5 rounded-lg bg-[#051320] hover:bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copied ? "Copied to Clipboard!" : "Copy Formatted RFQ Text"}</span>
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-teal-400" />
                  <span>Phone / WhatsApp: {CONTACT_INFO.phone}</span>
                </div>
                {CONTACT_INFO.phoneSecondary && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-slate-500" />
                    <span>Alt Line: {CONTACT_INFO.phoneSecondary}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-teal-400" />
                  <span>Email: {CONTACT_INFO.email}</span>
                </div>
              </div>

            </div>

            {/* Credibility Checklist */}
            <div className="bg-[#051320] border border-slate-800 rounded-2xl p-6 text-xs text-slate-300 font-mono space-y-2 shadow-lg">
              <div className="text-[#F28C28] font-bold uppercase mb-2">Verified Sourcing Standards</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                <span>Certificate of Analysis (CoA) matched per batch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                <span>TDS and SDS documentation supplied</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                <span>Port Harcourt staging &amp; shorebase delivery</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};
