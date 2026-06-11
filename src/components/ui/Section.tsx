import { ReactNode } from "react";
import Container from "./Container";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  alt?: boolean;
}

const Section = ({ children, id, className = "", alt = false }: SectionProps) => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alt ? "bg-slate-50" : "bg-white"} ${className}`}
    >
      <Container>
        <div
          ref={ref}
          className={visible ? "reveal-visible" : "reveal-hidden"}
        >
          {children}
        </div>
      </Container>
    </section>
  );
};

export default Section;
