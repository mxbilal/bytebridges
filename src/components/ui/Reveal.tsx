import { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms — pass index * step for a cascade. */
  delay?: number;
  className?: string;
}

// Wraps a single element so it fades + slides in when it scrolls into view.
// Use a per-item `delay` to stagger a grid of cards into a cascade.
const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`${visible ? "reveal-visible" : "reveal-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
