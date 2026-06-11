import Section from "./ui/Section";
import mernIcon from "../assets/mern.svg";
import mevnIcon from "../assets/mevn.svg";
import angularIcon from "../assets/angular.svg";

const technologies = [
  {
    name: "MERN Stack",
    icon: mernIcon,
    description:
      "Full-stack development using MongoDB, Express, React, and Node.js.",
  },
  {
    name: "Angular",
    icon: angularIcon,
    description:
      "TypeScript apps with Angular Material and RxJS. Good fit for larger admin panels and internal tools.",
  },
  {
    name: "MEVN Stack",
    icon: mevnIcon,
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
        Stacks I work with
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {technologies.map((tech) => (
        <div key={tech.name} className="text-center">
          <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4 hover:shadow-lg transition-shadow">
            <img src={tech.icon} alt={`${tech.name} logo`} className="w-20" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
            {tech.name}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{tech.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Technologies;
