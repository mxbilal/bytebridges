import Services from "../../components/Services";
import ServiceCard from "../../components/ServiceCard";
import js from "../../assets/js.svg";
import backend from "../../assets/backend.svg";
import hosting from "../../assets/hosting.svg";
import db from "../../assets/db.svg";

const ServicesPage = () => {
  return (
    <div className="p-8 md:px-24">
      <h2 className="text-3xl md:text-5xl font-bold text-light_black leading-tight font-readax_pro mb-4 animate-slow-fade-in">
        SERVICES
      </h2>
      <hr className="border-primary w-1/5" />
      <p
        className={`text-graay-700 text-lg font-readax_pro mb-8 animate-slow-fade-in delay-500 opacity-0 pt-4`}
      >
        If it’s digital, you name it and we do it!
      </p>
      <Services home={false} />
      <h2 className="pt-10 text-3xl md:text-5xl font-bold text-light_black leading-tight font-readax_pro mb-4 animate-slow-fade-in">
        TECHNOLOGY STACK
      </h2>
      <hr className="border-primary w-2/5 pb-8" />

      <div className="md:p-8 md:px-24 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Frontend"
          image={js}
          description="Reactjs, Nextjs, Vuejs, Angularjs, Javascript, Html 5, Css, Scss, Tailwind css"
        />
        <ServiceCard
          title="Backend"
          image={backend}
          description="Nodejs, Expressjs, Nestjs, .NET Core 8,  ASP .NET Core, MVC, Microservices"
        />
        <ServiceCard
          title="Database"
          image={db}
          description="MySQL, SQLite, PostgreSQL, MongoDB, Elastic Search, Redis, Influx DB "
        />
        <ServiceCard
          title="Deployment"
          image={hosting}
          description="Digital Ocean,  Microsoft Azure, AWS, Docker, Jenkins"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
