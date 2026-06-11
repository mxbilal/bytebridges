import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import Section from "../ui/Section";
import { aboutContent } from "../../content/about";
import { site } from "../../content/site";

const PersonalIntro = () => (
  <Section alt>
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-2 flex justify-center">
        <div className="profile-avatar w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-6xl shadow-xl ring-4 ring-primary/10">
          B
        </div>
      </div>
      <div className="md:col-span-3">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          About me
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4">
          Hi, I'm {site.founder}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{aboutContent.intro}</p>
        <p className="text-muted leading-relaxed mb-6">{aboutContent.story}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-colors text-sm font-medium"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-colors text-sm font-medium"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default PersonalIntro;
