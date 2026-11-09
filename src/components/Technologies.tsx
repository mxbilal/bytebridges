import Section from "./ui/Section";
import Icon, { IconName } from "./ui/Icon";
import Reveal from "./ui/Reveal";

const technologies: { name: string; icon: IconName; description: string }[] = [
  {
    name: "MERN Stack",
    icon: "react",
    description:
      "Full-stack development using MongoDB, Express, React, and Node.js.",
  },
  {
    name: "Angular",
    icon: "angular",
    description:
      "TypeScript apps with Angular Material and RxJS. Good fit for larger admin panels and internal tools.",
  },
  {
    name: "MEVN Stack",
    icon: "vue",
    description:
      "Full-stack development using MongoDB, Express, Vue.js, and Node.js.",
  },
];

const Technologies = () => (
  <Section alt>
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
        Tech stacks
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
        Stacks we work with
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {technologies.map((tech, i) => (
        <Reveal key={tech.name} delay={i * 110}>
          <div className="group text-center">
            <div className="w-32 h-32 rounded-full bg-white text-primary shadow-md flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
              <Icon name={tech.icon} className="w-16 h-16" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              {tech.name}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {tech.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Technologies;
