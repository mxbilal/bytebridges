import Section from "../ui/Section";
import { Search, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We talk through your goals, users, and constraints. I ask questions upfront so we don't miss anything important.",
  },
  {
    icon: FileText,
    title: "Proposal",
    description:
      "You get scope, timeline, and price in writing. We agree on that before any code gets written.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "I ship in iterations with regular updates. You see progress each week and can give feedback as we go.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Deploy, handoff docs, and optional ongoing support. The app goes live and stays maintainable.",
  },
];

const HowIWork = () => (
  <Section>
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
        Process
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4">
        How I work
      </h2>
      <p className="text-muted">
        Simple steps. You stay in the loop the whole way.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="relative p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
        >
          <span className="absolute -top-3 -left-1 font-heading font-bold text-5xl text-primary/10">
            {i + 1}
          </span>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <step.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default HowIWork;
