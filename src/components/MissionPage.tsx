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
                  We're <strong className="text-slate-800">ByteBridges</strong>.
                  We build CRM, CMS, and SaaS apps for startups and businesses,
                  backed by a team of developers who've shipped this stuff
                  before.
                </>
              ) : (
                <>
                  We're a full-stack team based in Islamabad, building CRMs, CMS
                  tools, and SaaS products for startups and growing businesses.
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
            <div className="relative">
              {/* soft floating glow behind the illustration */}
              <div
                className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl scale-90 hero-float"
                aria-hidden
              />
              <img
                src={home ? missionImg : ed}
                alt={home ? "Web development illustration" : "About ByteBridges"}
                className="relative w-full max-w-lg hero-float"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissionPage;
