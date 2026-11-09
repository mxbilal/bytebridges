import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string; // e.g. "15+", "5+", "Full Stack"
  className?: string;
  duration?: number; // ms
}

// Animates a leading number from 0 up to its target when it scrolls into view,
// keeping any suffix (like "+"). Values without a leading number (e.g.
// "Full Stack") render as-is. Respects prefers-reduced-motion.
const CountUp = ({ value, className, duration = 1400 }: CountUpProps) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(
    target === null ? value : `0${suffix}`
  );

  useEffect(() => {
    if (target === null) return;
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setDisplay(`${Math.round(eased * target)}${suffix}`);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;
