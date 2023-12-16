import ServiceCard from "./ServiceCard";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg";
import jsLogo from "../assets/js.svg";
import nextLogo from "../assets/next.svg";
import nestLogo from "../assets/nest.svg";
import vueLogo from "../assets/vue.svg";
import awsLogo from "../assets/aws.svg";
import hostingLogo from "../assets/hosting.svg";

const ServicesPage = () => {
  const services = [
    {
      title: "ReactJS Development",
      image: reactLogo,
      description:
        "Building dynamic and interactive user interfaces with React.",
    },
    {
      title: "NodeJS Development",
      image: nodeLogo,
      description:
        "Creating scalable and efficient server-side applications with NodeJS.",
    },
    {
      title: "ExpressJS Development",
      image: jsLogo,
      description:
        "Developing robust and fast web applications using ExpressJS.",
    },
    {
      title: "Chatbots with Websockets",
      image: jsLogo,
      description:
        "Implementing real-time communication using websockets for interactive chatbots.",
    },
    {
      title: "NextJS Development",
      image: nextLogo,
      description:
        "Building performant and SEO-friendly React applications with NextJS.",
    },
    {
      title: "NestJS Development",
      image: nestLogo,
      description:
        "Constructing scalable and modular server-side applications with NestJS.",
    },
    {
      title: "VueJS Development",
      image: vueLogo,
      description: "Crafting dynamic and intuitive user interfaces with VueJS.",
    },
    {
      title: "AWS Services Integration",
      image: awsLogo,
      description:
        "Utilizing AWS services for cloud computing, storage, and more.",
    },
    {
      title: "Hosting Services",
      image: hostingLogo,
      description: "Providing reliable hosting solutions for web applications.",
    },
  ];

  return (
    <div className="bg-blue-100 py-2">
      <p className=" md:text-4xl font-bold text-center">
        Solutions tailored to your business
      </p>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default ServicesPage;
