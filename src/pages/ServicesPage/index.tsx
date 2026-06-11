import Services from "../../components/Services";
import ServiceCard from "../../components/ServiceCard";
import Section from "../../components/ui/Section";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { techStack } from "../../content/services";
import { whatsappUrl } from "../../content/site";

const ServicesPage = () => (
  <>
    <div className="hero-gradient py-16 md:py-20">
      <Container>
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          Services
        </p>
        <h1 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-4">
          Services
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          MVPs, CRMs, APIs, cloud setup, and ongoing maintenance. Scope and price
          are clear before we start.
        </p>
      </Container>
    </div>

    <Container className="py-12 md:py-16">
      <Services detailed />
    </Container>

    <Section alt>
      <div className="text-center mb-12">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          Stack
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
          Technology stack
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </Section>

    <div className="py-16 bg-primary text-white text-center">
      <Container>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
          Not sure which service fits?
        </h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Message me on WhatsApp and we'll figure out the right approach for your
          project in a quick conversation.
        </p>
        <Button
          href={whatsappUrl("Hi Bilal, I'm not sure which service I need. Can we discuss?")}
          external
          variant="secondary"
          className="!bg-white !text-primary hover:!bg-slate-100"
        >
          Chat on WhatsApp
        </Button>
      </Container>
    </div>
  </>
);

export default ServicesPage;
