import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-24 right-6 z-40 h-11 w-11 rounded-full bg-[#071A2B] border-2 border-slate-700/80 hover:border-[#0B6670] text-slate-300 hover:text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-cyan-950/40 active:translate-y-0 cursor-pointer group"
    >
      <ArrowUp className="h-5 w-5 text-slate-300 group-hover:text-[#F28C28] transition-colors" />
    </button>
  );
};
