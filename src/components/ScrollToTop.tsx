import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showScroll) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-colors"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
