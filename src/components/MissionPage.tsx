import missionImg from "../assets/mission-svg.svg";
import ed from "../assets/ed.svg";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { scrollToContactForm } from "../lib/scroll";
import { whatsappUrl } from "../content/site";
import { aboutContent } from "../content/about";
import "./component.scss";

const MissionPage = ({ home }: { home: boolean }) => {
  return (
    <div className="hero-gradient grid-pattern">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 text-left">
            {home ? (
              <>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 animate-slow-fade-in">
                  {aboutContent.stats[2].value} · {aboutContent.stats[3].value}
                </p>
                <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-4 animate-slow-fade-in">
                  Turning your vision into{" "}
                  <span className="text-primary">success</span> story!
                </h1>
              </>
            ) : (
              <h1 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 leading-tight mb-4 animate-slow-fade-in">
                About{" "}
                <span className="text-primary">ByteBridges</span>
              </h1>
            )}

            <div className="line-container mb-6">
              <hr className="border-primary animated-line w-0" />
            </div>

            <p className="text-muted text-lg leading-relaxed mb-8 animate-slow-fade-in delay-500 opacity-0 max-w-xl">
              {home ? (
                <>
                  I'm <strong className="text-slate-800">Bilal</strong>. I build
                  CRM, CMS, and SaaS apps for startups and businesses. Bigger
                  projects? I work with a small team I've used before.
                </>
              ) : (
                <>
                  I build custom web apps from Islamabad: CRMs, CMS tools, and
                  SaaS products for startups and growing businesses.
                </>
              )}
            </p>

            {home && (
              <div className="flex flex-wrap gap-4 animate-slow-fade-in delay-500 opacity-0">
                <Button
                  href={whatsappUrl()}
                  external
                  className="mission-btn"
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  onClick={scrollToContactForm}
                >
                  Contact Form
                </Button>
                <Button variant="ghost" to="/services">
                  View Services →
                </Button>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={home ? missionImg : ed}
              alt={home ? "Web development illustration" : "About ByteBridges"}
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissionPage;
