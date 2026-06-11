import Section from "../ui/Section";
import Accordion from "../ui/Accordion";
import { faqItems } from "../../content/faq";

const FAQ = () => (
  <Section alt id="faq">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          FAQ
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
          Common questions
        </h2>
      </div>
      <Accordion items={faqItems} />
    </div>
  </Section>
);

export default FAQ;
