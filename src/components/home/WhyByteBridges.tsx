import Section from "../ui/Section";
import { Zap, Shield, MessageSquare } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Fast without cutting corners",
    description:
      "MVPs in weeks, not months. I move quickly because I've done this before, not because I skip testing or docs.",
  },
  {
    icon: Shield,
    title: "Code you can hand off",
    description:
      "Typed where it matters, structured sensibly, and documented enough that the next developer isn't lost.",
  },
  {
    icon: MessageSquare,
    title: "You talk to me directly",
    description:
      "No account managers. I'm the one writing your code and sending you updates. Timelines are honest.",
  },
];

const WhyByteBridges = () => (
  <Section>
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
        Why ByteBridges
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
        Why work with me
      </h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {pillars.map((pillar) => (
        <div key={pillar.title} className="text-center px-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <pillar.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
            {pillar.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed">{pillar.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default WhyByteBridges;
