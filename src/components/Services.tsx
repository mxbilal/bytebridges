import ServiceCard from "./ServiceCard";
import reactLogo from "../assets/react.svg";
import microServiceLogo from "../assets/micro_services.png";
import crmLogo from "../assets/crm.svg";
import awsLogo from "../assets/aws.svg";
import storybook from "../assets/storybook.svg";
import hostingLogo from "../assets/hosting.svg";

const Services = ({ home }: { home: Boolean }) => {
  const services = [
    {
      title: "All Applications",
      image: crmLogo,
      description:
        "Tailoring custom CRM/CMS and ERP solutions to streamline your business processes, enhancing efficiency and customer relationship management.",
    },
    {
      title: "Responsive Designs",
      image: reactLogo,
      description:
        "Creating websites with responsive designs that adapt seamlessly to various devices, providing an optimal user experience.",
    },
    {
      title: "Storybook UI Components",
      image: storybook,
      description:
        "Building UI components and pages in isolation. Thousands of teams use it for UI development",
    },
    {
      title: "Microservices Architecture",
      image: microServiceLogo,
      description:
        "Designing and implementing scalable microservices architectures to enhance system flexibility, resilience, and ease of maintenance.",
    },
    {
      title: "AWS Services Integration",
      image: awsLogo,
      description:
        "Leveraging the full potential of AWS services for cloud computing, storage, and scalable solutions tailored to your needs.",
    },
    {
      title: "Hosting Services",
      image: hostingLogo,
      description:
        "Providing reliable hosting solutions for web applications, ensuring high availability and security for your online presence.",
    },
  ];

  return (
    <div className="md:p-8 md:px-24 lg:px-16">
      {home && (
        <>
          <p className="p-4 text-2xl md:text-5xl font-bold text-light_black text-center leading-tight font-readax_pro mb-4">
            Solutions tailored to your business
          </p>
          <hr className="w-1/2 border-primary m-auto" />
        </>
      )}
      <div
        className={`${home && "p-8"
          } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
