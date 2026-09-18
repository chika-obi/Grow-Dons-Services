import React, { useState } from "react";
import { CONTACT_INFO, COMPANY_RC, COMPANY_NAME } from "../data";
import { RfqFormData } from "../types";
import {
  FileSpreadsheet,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Copy,
  ShieldCheck,
  Building,
  Calendar,
  AlertCircle
} from "lucide-react";

interface ContactProps {
  prefillProduct?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefillProduct = "" }) => {
  const [formData, setFormData] = useState<RfqFormData>({
    productOrMaterial: prefillProduct || "",
    specification: "",
    quantity: "",
    deliveryLocation: "Port Harcourt",
    requiredDeliveryDate: "",
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    additionalRequirements: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    timestamp: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refId = `GD-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date().toLocaleString();

      try {
        const stored = JSON.parse(localStorage.getItem("grow_dons_rfqs") || "[]");
        stored.push({ refId, ...formData, timestamp: now });
        localStorage.setItem("grow_dons_rfqs", JSON.stringify(stored));
      } catch (err) {
        // Safe fallback
      }

      setSubmissionResult({ referenceId: refId, timestamp: now });
      setIsSubmitting(false);
    }, 600);
  };

  const getRfqSummaryText = () => {
    return `GROW DONS SERVICES LTD - REQUEST FOR QUOTATION (RFQ)
Reference: ${submissionResult?.referenceId || "NEW"}
Date: ${submissionResult?.timestamp || new Date().toLocaleDateString()}

[MATERIAL REQUIREMENTS]
• Product/Material: ${formData.productOrMaterial}
• Specification/Grade: ${formData.specification || "Standard Technical Grade"}
• Quantity & Unit: ${formData.quantity}
• Delivery Location: ${formData.deliveryLocation}
• Required By: ${formData.requiredDeliveryDate || "Earliest Available"}

[CLIENT DETAILS]
• Company Name: ${formData.companyName}
• Contact Person: ${formData.contactPerson}
• Email: ${formData.email}
• Phone: ${formData.phone}

[ADDITIONAL NOTES]
${formData.additionalRequirements || "None provided"}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getRfqSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppDispatch = () => {
    const text = encodeURIComponent(
      `Hello Grow Dons Commercial Desk, please find our official RFQ details below:\n\n${getRfqSummaryText()}`
    );
    window.open(`https://wa.me/2348034638006?text=${text}`, "_blank");
  };

  const handleEmailDispatch = () => {
    const subject = encodeURIComponent(
      `RFQ [${submissionResult?.referenceId}]: ${formData.productOrMaterial} - ${formData.companyName}`
    );
    const body = encodeURIComponent(getRfqSummaryText());
    window.location.href = `mailto:growdonsservicesltd@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div id="quote" className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F28C28]/20 border border-[#F28C28]/40 text-[#F28C28] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <FileSpreadsheet className="h-3.5 w-3.5" />
            <span>REQUEST A QUOTE &amp; CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
            Commercial &amp; Technical Inquiries
          </h2>
          <div className="h-1 w-20 bg-[#F28C28] mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Submit your material requirements for prompt quotation and technical verification, or contact our commercial desks in Port Harcourt directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Company Channels & Operating Hubs */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-md">
                <span className="text-[10px] font-mono text-[#F28C28] font-bold uppercase tracking-wider block mb-1">
                  Registration &amp; Governance
                </span>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {COMPANY_NAME}
                </h3>
                <div className="text-xs font-mono text-teal-400 font-semibold mb-4">
                  {COMPANY_RC}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialized oilfield chemicals and technical supply solutions for upstream, midstream, and industrial processing operations.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-md space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                    Corporate Headquarters &amp; Warehouse Hub
                  </span>
                  <div className="flex items-start gap-2.5 text-slate-200">
                    <MapPin className="h-4 w-4 text-[#0B6670] flex-shrink-0 mt-0.5" />
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                    Commercial Desk Phone
                  </span>
                  <a
                    href="tel:+2348034638006"
                    className="flex items-center gap-2.5 text-slate-200 hover:text-[#F28C28] font-semibold transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#0B6670]" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                    Official Quotation Email
                  </span>
                  <a
                    href="mailto:growdonsservicesltd@gmail.com"
                    className="flex items-center gap-2.5 text-slate-200 hover:text-[#F28C28] font-semibold transition-colors break-all"
                  >
                    <Mail className="h-4 w-4 text-[#F28C28]" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                    Instant Messaging Channel
                  </span>
                  <a
                    href="https://wa.me/2348034638006?text=Hello%20Grow%20Dons%20Commercial%20Desk%2C%20I%20would%20like%20to%20request%20a%20quotation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Connect with WhatsApp Commercial Desk</span>
                  </a>
                </div>
              </div>

              {/* Operating Staging Hubs */}
              <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-xs">
                <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-2 font-semibold">
                  Operating Hubs &amp; Staging Depots:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {CONTACT_INFO.operatingHubs.map((hub, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-[11px]"
                    >
                      {hub}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Professional RFQ Form */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {submissionResult ? (
                /* Confirmation View */
                <div className="space-y-6">
                  <div className="bg-emerald-950/40 border border-emerald-800/80 rounded-xl p-6 text-center">
                    <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-xl font-display font-bold text-white">
                      RFQ Generated &amp; Registered
                    </h3>
                    <div className="font-mono text-base font-bold text-[#F28C28] mt-1">
                      Reference ID: {submissionResult.referenceId}
                    </div>
                    <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Your commercial requirement has been formatted. Dispatch directly to our commercial coordinators via WhatsApp or email for immediate pricing review.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 whitespace-pre-line max-h-60 overflow-y-auto select-all">
                    {getRfqSummaryText()}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={handleWhatsAppDispatch}
                      className="px-4 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      onClick={handleEmailDispatch}
                      className="px-4 py-3 rounded bg-[#0B6670] hover:bg-[#12828e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Send via Email</span>
                    </button>

                    <button
                      onClick={handleCopySummary}
                      className="px-4 py-3 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copied ? "Copied to Clipboard!" : "Copy Summary"}</span>
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => setSubmissionResult(null)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary RFQ Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-lg font-display font-bold text-white">
                        Formal RFQ Submission
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Receive verified pricing, TDS specifications, and lead-time schedules.
                      </p>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 bg-slate-800 text-teal-300 font-mono text-[10px] rounded uppercase font-semibold">
                      TDS / CoA Included
                    </span>
                  </div>

                  {/* Material Specs */}
                  <div>
                    <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block mb-3">
                      1. Material &amp; Specification Parameters
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Product / Material Required <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="productOrMaterial"
                          value={formData.productOrMaterial}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Bentonite (API Grade), Calcium Chloride, Demulsifier, Barite"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Specification / Grade
                        </label>
                        <input
                          type="text"
                          name="specification"
                          value={formData.specification}
                          onChange={handleChange}
                          placeholder="e.g. API Spec 13A, 94-97% Anhydrous, BaSO4 > 4.20 SG"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Quantity &amp; Unit <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 100 MT, 50 Drums (200L), 20 IBCs (1000L)"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Target Delivery Location <span className="text-rose-400">*</span>
                        </label>
                        <select
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        >
                          <option value="Port Harcourt">Port Harcourt Central Depot</option>
                          <option value="Onne Free Zone">Onne Free Zone Corridor</option>
                          <option value="Warri Shorebase">Warri Shorebase Terminals</option>
                          <option value="Lagos Industrial">Lagos Commercial Hub</option>
                          <option value="Offshore Field Delivery">Offshore Field Supply Vessel</option>
                          <option value="Other Specified Site">Other Specified Site</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Required Delivery Date
                        </label>
                        <input
                          type="date"
                          name="requiredDeliveryDate"
                          value={formData.requiredDeliveryDate}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block mb-3">
                      2. Company &amp; Commercial Contact
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Company / Organization Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Energy Operator or EPC Contractor"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Contact Person &amp; Title <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Materials Lead / Procurement Officer"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Official Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="procurement@company.com"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-medium mb-1">
                          Phone / WhatsApp Number <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+234 800 000 0000"
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Scope Notes */}
                  <div className="pt-3 border-t border-slate-800">
                    <label className="block text-xs text-slate-300 font-medium mb-1">
                      Project Notes / Special Packaging / Discharge Requirements
                    </label>
                    <textarea
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Note any specific packaging formats (shrink-wrapped pallets, bulk pneumatic tanks, UN drums) or specific well test criteria..."
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400">
                      <span className="text-rose-400">*</span> Required for official commercial verification
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 rounded bg-[#F28C28] hover:bg-[#e07b16] disabled:opacity-50 text-[#071A2B] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-[#071A2B] border-t-transparent rounded-full animate-spin" />
                          <span>Generating RFQ...</span>
                        </>
                      ) : (
                        <>
                          <FileSpreadsheet className="h-4 w-4" />
                          <span>Compile &amp; Submit RFQ</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
