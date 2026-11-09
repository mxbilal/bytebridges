import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
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
        href={whatsappUrl("Hi ByteBridges, I'd like to discuss a project similar to your portfolio work.")}
        external
        variant="outline"
      >
        Discuss your project
      </Button>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <Reveal key={project.title} delay={(i % 2) * 110} className="h-full">
        <article
          className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
        >
          {/* Thumbnail — image if provided, otherwise a branded gradient fallback */}
          <div className="relative h-40 overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary_dark flex items-center justify-center">
                <span className="font-heading font-bold text-5xl text-white/90">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
            {project.metric && (
              <span className="absolute bottom-3 left-3 text-xs font-semibold bg-white/95 text-primary px-3 py-1 rounded-full shadow-sm">
                {project.metric}
              </span>
            )}
            {project.year && (
              <span className="absolute top-3 right-3 text-xs font-semibold bg-black/30 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                {project.year}
              </span>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <span className="inline-block w-fit text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
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
            <p className="text-sm text-slate-700 border-l-2 border-primary pl-3 mb-4">
              {project.outcome}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all w-fit"
              >
                Visit site →
              </a>
            )}
          </div>
        </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default FeaturedWork;
