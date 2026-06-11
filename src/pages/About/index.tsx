import MissionPage from "../../components/MissionPage";
import ContactUs from "../../components/ContactUs";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import { aboutContent } from "../../content/about";
import { workExperience } from "../../content/experience";
import { site, whatsappUrl } from "../../content/site";
import { GitHubIcon, LinkedInIcon } from "../../components/ui/SocialIcons";

const About = () => (
  <>
    <MissionPage home={false} />
    <Section>
      <div className="max-w-3xl">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          About ByteBridges
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-6">
          {aboutContent.headline}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{aboutContent.intro}</p>
        <p className="text-muted leading-relaxed mb-8">{aboutContent.story}</p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Button href={whatsappUrl()} external>
            Work with me
          </Button>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>

    <Section alt>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">
            Skills & expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {aboutContent.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">
            When projects scale
          </h3>
          <p className="text-muted leading-relaxed">{aboutContent.scaling}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-slate-200">
        {aboutContent.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading font-bold text-2xl text-primary">{stat.value}</p>
            <p className="text-sm text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-8">
        Work experience
      </h3>
      <div className="space-y-8">
        {workExperience.map((job) => (
          <div
            key={job.company}
            className="border-l-2 border-primary pl-6 pb-2"
          >
            <p className="text-sm text-primary font-semibold mb-1">{job.period}</p>
            <h4 className="font-heading font-bold text-lg text-slate-900">
              {job.role} at {job.company}
            </h4>
            <p className="text-sm text-muted mb-3">{job.location}</p>
            <ul className="space-y-1.5">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-muted flex gap-2">
                  <span className="text-primary shrink-0">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section alt>
      <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-4">
        Education
      </h3>
      <div className="max-w-xl">
        <p className="font-semibold text-slate-900">{aboutContent.education.degree}</p>
        <p className="text-muted">{aboutContent.education.school}</p>
        <p className="text-sm text-muted mt-1">
          {aboutContent.education.location} · {aboutContent.education.period}
        </p>
      </div>
    </Section>

    <ContactUs />
  </>
);

export default About;
