import Section from "../ui/Section";
import Button from "../ui/Button";
import { projects } from "../../content/projects";
import { whatsappUrl } from "../../content/site";

const FeaturedWork = () => (
  <Section alt>
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
      <div>
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          Portfolio
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
          Featured work
        </h2>
      </div>
      <Button
        href={whatsappUrl("Hi Bilal, I'd like to discuss a project similar to your portfolio work.")}
        external
        variant="outline"
      >
        Discuss your project
      </Button>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <article
          key={project.title}
          className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
            {project.category}
          </span>
          <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-700 border-l-2 border-primary pl-3">
            {project.outcome}
          </p>
        </article>
      ))}
    </div>
  </Section>
);

export default FeaturedWork;
