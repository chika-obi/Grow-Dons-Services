import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, MessageCircle } from "lucide-react";

// Premium WhatsApp Brand SVG Path
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.012 2c-5.506 0-9.988 4.476-9.988 9.988 0 1.761.459 3.479 1.332 5.006L2 22l5.132-1.313a9.907 9.395 0 0 0 4.88 1.301c5.506 0 10-4.476 10-9.988s-4.494-10-10-10zm.012 18.28c-1.579 0-3.131-.418-4.502-1.206l-.323-.191-3.34.856.885-3.155-.213-.33c-.859-1.348-1.311-2.924-1.311-4.544 0-4.551 3.738-8.287 8.304-8.287s8.304 3.736 8.304 8.287-3.738 8.287-8.304 8.287zm4.567-6.223c-.25-.124-1.474-.711-1.701-.791-.227-.08-.393-.12-.559.125-.164.246-.641.791-.786.953-.141.162-.284.183-.532.06a6.726 6.726 0 0 1-1.979-1.191c-.77-.668-1.289-1.488-1.442-1.741-.152-.254-.016-.391.109-.515.112-.112.251-.284.375-.426.124-.141.165-.241.25-.403.081-.162.041-.305-.021-.428-.06-.123-.559-1.311-.767-1.802-.2-.482-.403-.418-.559-.426-.145-.008-.31-.008-.475-.008-.166 0-.435.061-.664.305-.227.246-.869.831-.869 2.029 0 1.196.892 2.348.991 2.472.1.124 1.75 2.613 4.244 3.661.593.25 1.055.4 1.417.514.597.185 1.141.157 1.571.094.479-.071 1.474-.593 1.681-1.166.206-.576.206-1.07.145-1.166-.062-.101-.206-.162-.456-.285z" />
  </svg>
);

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Trigger sub-prompt automatic slide-in notification bubble after 5 seconds to invite action
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasPrompted(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const primaryPhone = "2348034638006"; // Grow Dons Primary Support Line
  const defaultMsg = "Hello Grow Dons Services, I would like to request an oilfield chemical solution quote.";

  const handleMessageClick = (customText?: string) => {
    const encodedText = encodeURIComponent(customText || defaultMsg);
    const url = `https://wa.me/${primaryPhone}?text=${encodedText}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none font-sans flex flex-col items-end">
      {/* Animated notification tip above the main badge */}
      <AnimatePresence>
        {hasPrompted && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-3.5 bg-white border border-slate-200 text-slate-800 rounded-xl p-3.5 shadow-2xl max-w-[260px] text-xs relative flex items-start gap-2 cursor-pointer hover:border-emerald-500/40 transition-colors"
            onClick={() => {
              setIsOpen(true);
              setHasPrompted(false);
            }}
          >
            {/* Small red close tag */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHasPrompted(false);
              }}
              className="absolute -top-1.5 -right-1.5 h-5 w-5 bg-slate-900 border border-slate-800 text-white rounded-full flex items-center justify-center hover:bg-slate-850 cursor-pointer"
            >
              <X className="h-2.5 w-2.5" />
            </button>

            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mt-0.5">
              <MessageSquare className="h-3.5 w-3.5 animate-pulse" />
            </div>
            <div>
              <p className="font-bold text-slate-900 flex items-center gap-1">
                <span>Engr. Obi is Available</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </p>
              <p className="text-slate-500 mt-1 leading-relaxed">
                Need urgent fluid parameter quotes? Ask on WhatsApp!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main chat window box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="bg-[#0c142c] text-white border border-slate-800/80 rounded-2xl shadow-2xl w-80 overflow-hidden mb-4"
          >
            {/* Chat header */}
            <div className="bg-emerald-600 p-4 flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-slate-900/40 border border-white/20 overflow-hidden flex items-center justify-center font-display font-black tracking-tight text-white select-none">
                  PHC
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-450 border-2 border-emerald-600 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wide">Grow Dons Helpdesk</h4>
                  <p className="text-[10px] text-emerald-100 flex items-center gap-1 mt-0.5 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-110 bg-white inline-block animate-ping" />
                    <span>Typically replies instantly</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-black/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Chat body containing sample queries */}
            <div className="p-4 bg-slate-950/95 space-y-3.5">
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                Welcome to Grow Dons Services Limited. Choose a quick operational parameter below to launch a direct technical inquiry:
              </p>

              {/* Quick Preset Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => handleMessageClick("Hello Grow Dons, I would like to request an instant quote for Downhole Chemicals & mud formulation compounds.")}
                  className="w-full text-left bg-slate-900 hover:bg-slate-850 hover:border-emerald-500/30 border border-slate-800/80 p-2.5 rounded-lg text-xs leading-relaxed transition-all cursor-pointer flex justify-between items-center group"
                >
                  <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Inquire about Chemicals</span>
                  <Send className="h-3 w-3 text-slate-500 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={() => handleMessageClick("Hello Grow Dons, I am reaching out to inquire about Solids Control Loop rental equipment and mud logging services.")}
                  className="w-full text-left bg-slate-900 hover:bg-slate-850 hover:border-emerald-500/30 border border-slate-800/80 p-2.5 rounded-lg text-xs leading-relaxed transition-all cursor-pointer flex justify-between items-center group"
                >
                  <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Mud Logging &amp; Filtration</span>
                  <Send className="h-3 w-3 text-slate-500 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={() => handleMessageClick("Hi Support, I would like to receive details on hiring Offshore Cargo Carrying Units (CCU) and transport leases.")}
                  className="w-full text-left bg-slate-900 hover:bg-slate-850 hover:border-emerald-500/30 border border-slate-800/80 p-2.5 rounded-lg text-xs leading-relaxed transition-all cursor-pointer flex justify-between items-center group"
                >
                  <span className="text-slate-200 group-hover:text-emerald-400 transition-colors">Offshore Rentals &amp; Lease</span>
                  <Send className="h-3 w-3 text-slate-500 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>

              {/* Direct manual message option */}
              <div className="pt-2 border-t border-slate-900">
                <button
                  onClick={() => handleMessageClick()}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-950/10"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  <span>Start Live Chat Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Icon Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasPrompted(false);
        }}
        className={`h-14 w-14 rounded-full flex items-center justify-center cursor-pointer shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-slate-900 text-white border border-slate-800 rotate-90"
            : "bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-110 active:scale-[0.93] animate-bounce"
        }`}
        aria-label="Contact WhatsApp support"
        title="Contact technical support"
      >
        {isOpen ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
      </button>
    </div>
  );
};
