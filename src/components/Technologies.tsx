import mernIcon from "../assets/mern.svg";
import mevnIcon from "../assets/mevn.svg";
import dotNetIcon from "../assets/dot_net.svg";

const Technologies = () => {
  return (
    <div className="p-8 bg-slate-50 md:py-24">
      <p className="text-2xl md:text-5xl font-bold text-light_black text-center leading-tight font-readax_pro mb-4">
        Technologies We Embrace
      </p>
      <hr className="w-1/2 border-primary m-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:px-52 lg:px-28 py-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center flex-col">
            <div className="h-40 w-40 rounded-full mix-blend-multiply hover:bg-white flex items-center justify-center shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={100}
                className="mix-blend-multiply"
              />
            </div>

            <div className="p-6 text-center flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-700 md:w-1/2 lg:w-full">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const technologies = [
  {
    name: "MERN Stack",
    icon: mernIcon,
    description:
      "Full-stack development using MongoDB, Express, React, and Node.js.",
  },
  {
    name: ".NET Core",
    icon: dotNetIcon,
    description:
      "Development with ASP.Net MVC, ASP.Net Core Web APIs, LINQ, Entity Framework and ADO.NET",
  },
  {
    name: "MEVN Stack",
    icon: mevnIcon,
    description:
      "Full-stack development using MongoDB, Express, Vue.js, and Node.js.",
  },
];

export default Technologies;
