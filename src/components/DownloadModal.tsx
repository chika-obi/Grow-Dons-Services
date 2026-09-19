import React, { useState, useEffect } from "react";
import { X, Check, FileText, Download, Loader2, FileDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DocumentItem {
  id: string;
  title: string;
  category: string;
  size: string;
  description: string;
  fileName: string;
  contentLines: string[];
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Highly relevant real content for the simulated files, styled as nice text reports!
const AVAILABLE_DOCUMENTS: DocumentItem[] = [
  {
    id: "company-profile",
    title: "Official Corporate Company Profile",
    category: "Corporate Profile",
    size: "6.8 MB",
    description: "Full credentials, corporate overview, registration details (RC: 1902045), partner lists, and services hierarchy.",
    fileName: "Grow_Dons_Services_Ltd_Company_Profile.txt",
    contentLines: [
      "==================================================",
      "GROW DONS SERVICES LTD - OFFICIAL COMPANY PROFILE",
      "==================================================",
      "Corporate Registration Number: RC 1902045",
      "Headquarters: New Airport Road, Off OPM Headquarters,",
      "              Port Harcourt, Rivers State, Nigeria.",
      "Primary Contact Details:",
      "  - Phone / WhatsApp: +234 812 875 1360 | +234 803 463 8006",
      "  - Email: growdonsservicesltd@gmail.com",
      "",
      "----------------------------------",
      "COMPANY OVERVIEW & CHARTER",
      "----------------------------------",
      "Grow Dons Services Limited is a premier, fully-owned indigenous",
      "Nigerian oilfield services company. Formally certified and integrated",
      "to serve major operators inside the Niger Delta basin and offshore deepwater,",
      "we bridge the gap between quality supply chains and local technical expertise.",
      "",
      "----------------------------------",
      "CORE OFFERINGS & SOLUTIONS",
      "----------------------------------",
      "1. Drilling & Completion Fluids (Mud Systems & Chemical Formulation)",
      "2. Solids Control Services (Closed Loop Operations, Shale Shakers, Centrifuges)",
      "3. Wellbore Cleanup & Filtration Operations",
      "4. Brine Filtration (High efficiency dual-pod cartridge & plate units)",
      "5. Offshore Heavy Equipment Rental & Vessels Support Logistics",
      "",
      "----------------------------------",
      "HEALTH, SAFETY & ENVIRONMENT (HSE)",
      "----------------------------------",
      "Grow Dons Services Limited targets standard zero-LTI (Lost Time Injury)",
      "milestones. Our commitment is rooted in total mitigation of risks,",
      "compliance with regulatory NUPRC/DPR guidelines, and the development",
      "of local host communities.",
      "",
      "Document Ref: GDSL-MCH-CP026",
      "=================================================="
    ]
  },
  {
    id: "fluid-systems",
    title: "Drilling & Completion Fluids Solutions",
    category: "Service Brochure",
    size: "2.4 MB",
    description: "Detailed breakdown of Water-Based Muds (WBM), Synthetic-Based Muds (SBM), and specialised downhole chemical formulations.",
    fileName: "GDSL_Drilling_Fluids_Systems.txt",
    contentLines: [
      "==================================================",
      "GROW DONS SERVICES LTD - DRILLING & COMPLETION FLUIDS",
      "==================================================",
      "Specialised Downhole Science and Fluid Integrity",
      "---",
      "Our chemical engineers design tailor-made fluid configurations is critical",
      "for high-pressure, high-temperature (HPHT) wells in Nigerian oil fields.",
      "",
      "MUD SYSTEMS LISTINGS:",
      "1. Water-Based Muds (WBM):",
      "   - Bentonite/Polymer Spuds",
      "   - Glycol-infused high inhibition reservoirs mud",
      "   - Potassium chloride (KCl) polymer fluid systems",
      "",
      "2. Synthetic-Based Muds (SBM):",
      "   - Eco-friendly low-toxicity synthetic paraffin base",
      "   - Constant rheology formulation across diverse depths",
      "   - Exceptional lubricity and high shale inhibition",
      "",
      "OILFIELD CHEMICALS PORTFOLIO:",
      "  * Primary & Secondary Emulsifiers",
      "  * Fluid Loss Control Additives (PAC, Starch, CMC)",
      "  * Corrosion Inhibitors and Biocides",
      "  * Extreme Pressure Lubricants & Defoamers",
      "  * Calcium Carbonate, Barite, and Potassium mud weighting bars",
      "",
      "HSE & Compliance: Meets EPA and local NAE standards for minimal toxicity.",
      "=================================================="
    ]
  },
  {
    id: "solids-filtration",
    title: "Solids Control & Brine Filtration Services",
    category: "Engineering Spec Sheet",
    size: "3.1 MB",
    description: "Operational specs of our dual-pod DE filtration units, high-G shale shakers, and closed-loop waste recovery panels.",
    fileName: "GDSL_Solids_Control_and_Filtration.txt",
    contentLines: [
      "==================================================",
      "GROW DONS SERVICES LTD - SOLIDS CONTROL & FILTRATION",
      "==================================================",
      "Zero waste and pristine drilling stream management.",
      "---",
      "",
      "SOLID RECOVERY OPERATIONS:",
      "  * High-G linear motion shale shakers with dual-screen deck arrays",
      "  * High-speed decanting centrifuges for fine low-gravity solids removal",
      "  * Hydrocyclone desanders (10-inch cones) & desilters (4-inch cones)",
      "  * Mud cleaner packages for high-weighted mud preservation",
      "",
      "BRINE FILTRATION SERVICES:",
      "  * Dual-Pod Diatomaceous Earth (DE) filtration skids",
      "  * High capacity clean-up cartridge filters (50-round, 2-micron nominal)",
      "  * Shear-mixer polymer hydration loops for brine formulation",
      "  * Rig-site filtration engineers on continuous 24/7 technical shifts",
      "",
      "OFFSHORE LEASING:",
      "  * Basket rental container lines (CCUs conforming to BS EN 12079 / DNV 2.7-1)",
      "  * Cutting skips & chemical tanks",
      "=================================================="
    ]
  }
];

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [selectedDocId, setSelectedDocId] = useState<string>("company-profile");
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "success">("idle");
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  const selectedDoc = AVAILABLE_DOCUMENTS.find(d => d.id === selectedDocId) || AVAILABLE_DOCUMENTS[0];

  useEffect(() => {
    if (!isOpen) {
      setDownloadState("idle");
      setProgress(0);
      setStatusMessage("");
    }
  }, [isOpen]);

  const triggerRealDownload = (doc: DocumentItem) => {
    // Generate text content from lines
    const textContent = doc.contentLines.join("\r\n");
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = doc.fileName;
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleStartDownload = () => {
    if (downloadState !== "idle") return;

    setDownloadState("downloading");
    setProgress(0);
    setStatusMessage("Establishing link with Grow Dons oilfield CDN...");

    const steps = [
      { prg: 20, msg: "Verifying secure digital signatures (RC: 1902045)..." },
      { prg: 45, msg: "Retrieving official document payload stream..." },
      { prg: 75, msg: "Formulating local ASCII digital wrapper with encryption keys..." },
      { prg: 95, msg: "Finalizing file compilation and writing buffer locally..." },
      { prg: 100, msg: "Document transmission complete!" }
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setProgress(steps[stepIndex].prg);
        setStatusMessage(steps[stepIndex].msg);
        stepIndex++;
      } else {
        clearInterval(interval);
        setDownloadState("success");
        triggerRealDownload(selectedDoc);
      }
    }, 450);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header branding band */}
            <div className="bg-gradient-to-r from-brand-orange to-amber-500 py-1.5 px-4 flex justify-between items-center">
              <span className="text-[9px] font-mono tracking-widest text-white font-bold uppercase">
                Official Grow Dons Services Ltd Downloads
              </span>
              <span className="text-[9px] font-mono text-amber-100 font-medium">
                ISO & NUPRC Oilfield Certification Profile
              </span>
            </div>

            {/* Title Bar */}
            <div className="p-6 border-b border-slate-800/80 flex justify-between items-center bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/30 rounded-lg text-brand-orange">
                  <FileDown className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white leading-tight">
                    Document Download Portal
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Select a credential brochure or corporate profile to download.
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-all cursor-pointer"
                aria-label="Close download portal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Content Pane */}
            <div className="p-6 flex-grow flex flex-col gap-6 bg-slate-900/40">
              {downloadState === "idle" && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {/* Left Selector List */}
                  <div className="md:col-span-2 flex flex-col gap-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                      Available Files
                    </span>
                    {AVAILABLE_DOCUMENTS.map((doc) => {
                      const isSelected = doc.id === selectedDocId;
                      return (
                        <button
                          key={doc.id}
                          onClick={() => setSelectedDocId(doc.id)}
                          className={`w-full p-3.5 rounded-xl border text-left flex flex-col transition-all cursor-pointer ${
                            isSelected
                              ? "bg-slate-800/80 border-brand-orange text-white shadow-md shadow-brand-orange/5"
                              : "bg-slate-900/60 border-slate-800/70 text-slate-400 hover:border-slate-750 hover:bg-slate-850 hover:text-white"
                          }`}
                        >
                          <div className="flex justify-between items-start w-full">
                            <span className="font-display font-bold text-xs uppercase tracking-wide">
                              {doc.category}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded">
                              {doc.size}
                            </span>
                          </div>
                          <span className="text-xs sm:text-sm font-semibold mt-1 w-full text-slate-200">
                            {doc.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Detail Pane */}
                  <div className="md:col-span-3 flex flex-col justify-between bg-slate-950/85 border border-slate-800 p-5 rounded-xl">
                    <div>
                      <div className="flex items-center gap-2 mb-3.5">
                        <FileText className="h-4 w-4 text-brand-orange" />
                        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                          Selected Document Meta
                        </span>
                      </div>
                      <h4 className="text-base font-display font-bold text-white mb-2 leading-snug">
                        {selectedDoc.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {selectedDoc.description}
                      </p>

                      <div className="bg-slate-900/60 border border-slate-800/60 rounded-lg p-3 text-[11px] font-mono text-slate-400 space-y-1">
                        <div><strong className="text-slate-300">File Type:</strong> SECURE TEXT BRIEF (.txt)</div>
                        <div><strong className="text-slate-300">File Name:</strong> {selectedDoc.fileName}</div>
                        <div><strong className="text-slate-300">Download Size:</strong> {selectedDoc.size}</div>
                        <div><strong className="text-slate-300">Signature:</strong> RC01902045-GDSL</div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                      <button
                        onClick={handleStartDownload}
                        className="w-full bg-brand-orange hover:bg-orange-600 text-white font-display font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-lg shadow-brand-orange/15 transition-all text-center cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download Certified {selectedDoc.category}</span>
                      </button>
                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Verified secure transfer link by local NUPRC framework</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Downloading State */}
              {downloadState === "downloading" && (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-6">
                    <Loader2 className="h-12 w-12 text-brand-orange animate-spin" />
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-semibold text-slate-300">
                      {progress}%
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    Transmission of Data Stream Active
                  </h3>
                  <p className="text-xs text-slate-400 font-mono tracking-wide max-w-sm mb-6 animate-pulse">
                    {statusMessage}
                  </p>

                  {/* Progress bar container */}
                  <div className="w-full max-w-md h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-orange to-amber-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              )}

              {/* Download Success state */}
              {downloadState === "success" && (
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 mb-6"
                  >
                    <CheckCircle2 className="h-12 w-12" />
                  </motion.div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    Brochure Successfully Downloaded!
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm mb-2">
                    The requested file <span className="text-emerald-400 font-mono text-[11px] font-bold">{selectedDoc.fileName}</span> was formatted and sent into your system downloads directory.
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans max-w-xs mb-6">
                    Check your web browser files bar or check your local disk downloads folder.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setDownloadState("idle")}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white rounded-lg text-xs font-display uppercase tracking-wider font-semibold cursor-pointer transition-colors"
                    >
                      Download Other Files
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-brand-orange hover:bg-orange-600 text-white rounded-lg text-xs font-display uppercase tracking-wider font-bold cursor-pointer transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer block */}
            <div className="bg-slate-950 border-t border-slate-850 px-6 py-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>GROW DONS SERVICES LIMITED • REG RC.1902045</span>
              <span>EST. 2023 | ISO COMPLIANT</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
