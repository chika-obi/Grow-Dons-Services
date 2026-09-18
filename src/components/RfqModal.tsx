import React, { useState, useEffect } from "react";
import { RfqFormData } from "../types";
import {
  FileSpreadsheet,
  X,
  CheckCircle2,
  Copy,
  MessageSquare,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building,
  MapPin,
  Calendar,
  AlertCircle
} from "lucide-react";

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProduct?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  prefillProduct = ""
}) => {
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

  useEffect(() => {
    if (prefillProduct) {
      setFormData((prev) => ({ ...prev, productOrMaterial: prefillProduct }));
    }
  }, [prefillProduct]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate realistic generation of RFQ tracking document
    setTimeout(() => {
      const refId = `GD-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date().toLocaleString();

      // Store locally for offline persistence
      try {
        const stored = JSON.parse(localStorage.getItem("grow_dons_rfqs") || "[]");
        stored.push({ refId, ...formData, timestamp: now });
        localStorage.setItem("grow_dons_rfqs", JSON.stringify(stored));
      } catch (err) {
        // Safe fallback if local storage disabled
      }

      setSubmissionResult({ referenceId: refId, timestamp: now });
      setIsSubmitting(false);
    }, 700);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#071A2B] border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden text-white">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-[#F28C28]/20 border border-[#F28C28]/40 flex items-center justify-center text-[#F28C28]">
              <FileSpreadsheet className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#F28C28] uppercase tracking-widest font-semibold block">
                COMMERCIAL SERVICES DESK
              </span>
              <h3 className="text-base sm:text-lg font-display font-bold">
                Request for Quotation (RFQ)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close RFQ modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submissionResult ? (
            /* Confirmation Step with realistic next actions */
            <div className="space-y-6">
              <div className="bg-emerald-950/40 border border-emerald-800/80 rounded-xl p-5 text-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-lg font-display font-bold text-white">
                  RFQ Generated Successfully
                </h4>
                <div className="font-mono text-sm font-bold text-[#F28C28] mt-1">
                  Reference ID: {submissionResult.referenceId}
                </div>
                <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                  Your quotation request has been compiled. You can directly dispatch this requirement to our commercial desk via WhatsApp or email for immediate processing.
                </p>
              </div>

              {/* RFQ Summary Box */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 whitespace-pre-line max-h-60 overflow-y-auto select-all">
                {getRfqSummaryText()}
              </div>

              {/* Action Buttons */}
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
                  <span>{copied ? "Copied!" : "Copy Summary"}</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    setSubmissionResult(null);
                    onClose();
                  }}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* RFQ Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-[#0B6670] flex-shrink-0 mt-0.5" />
                <span>
                  Please provide exact material specifications and quantities. Technical Data Sheets (TDS) and Certificates of Analysis (CoA) will be provided with commercial offers.
                </span>
              </div>

              {/* Section 1: Product / Material Information */}
              <div>
                <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block mb-3">
                  1. Material &amp; Specification Requirements
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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                    >
                      <option value="Port Harcourt">Port Harcourt Central Depot</option>
                      <option value="Onne Free Zone">Onne Free Zone Corridor</option>
                      <option value="Warri Shorebase">Warri Shorebase Terminals</option>
                      <option value="Lagos Industrial">Lagos Commercial Hub</option>
                      <option value="Offshore Field Delivery">Offshore Field Supply Vessel</option>
                      <option value="Other Specified Site">Other Specified Operational Site</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1">
                      Required Delivery Date / Timeline
                    </label>
                    <input
                      type="date"
                      name="requiredDeliveryDate"
                      value={formData.requiredDeliveryDate}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Contact & Company Details */}
              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block mb-3">
                  2. Organization &amp; Commercial Contact
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
                      placeholder="e.g. TotalEnergies E&P, Seplat, Oando, NLNG"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
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
                      placeholder="e.g. Engr. B. Okonkwo (Materials Lead)"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1">
                      Official Corporate Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="procurement@company.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
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
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Scope Notes */}
              <div className="pt-3 border-t border-slate-800">
                <label className="block text-xs text-slate-300 font-medium mb-1">
                  Project / Scope Notes &amp; Special Packaging Requirements
                </label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Provide any specific packaging requirements (e.g., shrink-wrapped pallets, UN drums, bulk pneumatic tankers) or discharge timelines..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#0B6670]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  <span className="text-rose-400">*</span> Required fields for formal quotation
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded bg-[#F28C28] hover:bg-[#e07b16] disabled:opacity-50 text-[#071A2B] font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-[#071A2B] border-t-transparent rounded-full animate-spin" />
                        <span>Compiling RFQ...</span>
                      </>
                    ) : (
                      <>
                        <FileSpreadsheet className="h-4 w-4" />
                        <span>Compile &amp; Submit RFQ</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
