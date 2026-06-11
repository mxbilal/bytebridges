import ServiceCard from "./ServiceCard";
import Section from "./ui/Section";
import Button from "./ui/Button";
import { services } from "../content/services";
import { whatsappUrl } from "../content/site";

interface ServicesProps {
  home?: boolean;
  detailed?: boolean;
}

const Services = ({ home = false, detailed = false }: ServicesProps) => {
  const displayServices = home ? services.slice(0, 6) : services;

  const content = (
    <>
      {home && (
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Services
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 mb-4">
            What I build
          </h2>
          <p className="text-muted">
            MVPs, CRMs, admin panels, APIs. Whatever gets your product in front
            of users.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayServices.map((service) => (
          <div key={service.slug} id={detailed ? service.slug : undefined}>
            <ServiceCard
              title={service.title}
              image={service.image}
              description={service.description}
              slug={home ? service.slug : undefined}
              whoFor={service.whoFor}
              timeline={service.timeline}
              detailed={detailed}
            />
          </div>
        ))}
      </div>

      {home && (
        <div className="text-center mt-12 space-y-4">
          <Button to="/services" variant="outline">
            View all services
          </Button>
          <p className="text-sm text-muted">
            Have a similar need?{" "}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Let's talk on WhatsApp
            </a>
          </p>
        </div>
      )}
    </>
  );

  if (home) {
    return <Section>{content}</Section>;
  }

  return <div>{content}</div>;
};

export default Services;
