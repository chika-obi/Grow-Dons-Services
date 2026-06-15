import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Roadmap } from "./components/Roadmap";
import { IndustryNews } from "./components/IndustryNews";
import { Testimonials } from "./components/Testimonials";
import { TeamHse } from "./components/TeamHse";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { DownloadModal } from "./components/DownloadModal";
import { WhatsAppWidget } from "./components/WhatsAppWidget";

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Fixed Header Navigation */}
      <Navbar onDownloadClick={() => setIsDownloadOpen(true)} />

      <main className="flex-grow">
        {/* Cinematic Hero Landing area */}
        <Hero />

        {/* Corporate Profile, RC details & partnerships */}
        <AboutUs />

        {/* Main interactive chemical & engineering services */}
        <Services />

        {/* Multi-category fluid products browser */}
        <Products />

        {/* Interactive project roadmap and milestones */}
        <Roadmap />

        {/* Real-time search-grounded Nigerian news */}
        <IndustryNews />

        {/* Client Testimonials to establish operational trust */}
        <Testimonials />

        {/* Professional Team profile and HSE safety system */}
        <TeamHse />

        {/* Unified Request for Quotation (RFQ) and geographical maps */}
        <Contact />
      </main>

      {/* Structured Copyable Contact channels & back to top chevron */}
      <Footer onDownloadClick={() => setIsDownloadOpen(true)} />

      {/* Corporate Profile & Brochure Downloads Modal Window */}
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />

      {/* Instant WhatsApp Helpdesk Support Floating Widget */}
      <WhatsAppWidget />
    </div>
  );
}
