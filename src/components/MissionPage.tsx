import missionImg from "../assets/mission-svg.svg";
import "./component.scss";

const MissionPage = () => {
  return (
    <div className="p-8 text-center flex justify-between gap-4 flex-col-reverse md:flex-row md:px-20">
      <div className="w-full md:w-2/5 pt-6 text-left">
        {" "}
        <h2 className="text-4xl md:text-5xl font-bold text-light_black leading-tight font-readax_pro mb-4 animate-slow-fade-in">
          Turning your vision into a success story!
        </h2>
        <hr className="border-primary" />
        <p className="text-gray-700 text-sm font-readax_pro mb-8 animate-slow-fade-in delay-500 opacity-0 pt-4">
          Bytebridges specializes in delivering tailored web development
          solutions, including CRM, CMS, and SAS applications. Our seasoned
          teams optimize costs, maximize resources, and ensure efficient
          timelines for startups and enterprises across diverse industries.
        </p>
        <button className="bg-primary text-white px-10 py-6 mission-btn">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 ">
        <img src={missionImg} className="w-4/5" />
      </div>
    </div>
  );
};

export default MissionPage;
