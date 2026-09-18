import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ViewMode } from "./types";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomeView } from "./components/views/HomeView";
import { ChemicalsView } from "./components/views/ChemicalsView";
import { ProcurementView } from "./components/views/ProcurementView";
import { LogisticsView } from "./components/views/LogisticsView";
import { AboutView } from "./components/views/AboutView";
import { LeadershipView } from "./components/views/LeadershipView";
import { QuoteView } from "./components/views/QuoteView";
import { RfqModal } from "./components/RfqModal";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { WhatsAppWidget } from "./components/WhatsAppWidget";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>("home");
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [rfqPrefillProduct, setRfqPrefillProduct] = useState<string>("");

  // Hash-based client-side routing synchronization
  useEffect(() => {
    const parseHash = (): ViewMode => {
      const hash = window.location.hash.replace("#/", "").replace("#", "").toLowerCase();
      const validViews: ViewMode[] = [
        "home",
        "chemicals",
        "procurement",
        "logistics",
        "about",
        "leadership",
        "quote",
      ];
      return validViews.includes(hash as ViewMode) ? (hash as ViewMode) : "home";
    };

    // Set initial view from hash
    setCurrentView(parseHash());

    const handleHashChange = () => {
      setCurrentView(parseHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    window.location.hash = `#/${view}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenRfq = (productName?: string) => {
    setRfqPrefillProduct(productName || "");
    setIsRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setIsRfqModalOpen(false);
    setRfqPrefillProduct("");
  };

  return (
    <div className="min-h-screen bg-[#071A2B] text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[#F28C28] selection:text-[#071A2B]">
      
      {/* 1. Navigation Shell */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onRequestQuote={handleOpenRfq}
      />

      {/* 2. Main Viewport Container with Full Frame Route Motion */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {currentView === "home" && (
              <HomeView
                onNavigate={handleNavigate}
                onRequestQuote={handleOpenRfq}
              />
            )}
            {currentView === "chemicals" && (
              <ChemicalsView
                onRequestQuote={handleOpenRfq}
              />
            )}
            {currentView === "procurement" && (
              <ProcurementView
                onRequestQuote={handleOpenRfq}
              />
            )}
            {currentView === "logistics" && (
              <LogisticsView
                onRequestQuote={() => handleOpenRfq("Material Logistics Coordination")}
              />
            )}
            {currentView === "about" && <AboutView />}
            {currentView === "leadership" && <LeadershipView />}
            {currentView === "quote" && <QuoteView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Corporate Application Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenRfq()}
      />

      {/* 4. Global RFQ Modal Workflow */}
      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={handleCloseRfq}
        prefillProduct={rfqPrefillProduct}
      />

      {/* 5. Floating Action Controls: Scroll to Top & WhatsApp Commercial Desk */}
      <ScrollToTop />
      <WhatsAppWidget />
    </div>
  );
}
