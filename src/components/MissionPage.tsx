import missionImg from "../assets/m.svg";
const MissionPage = () => {
  return (
    <div className="p-8 text-center flex justify-between gap-4 flex-col-reverse md:flex-row md:px-20">
      <div className="w-full md:w-2/5 pt-6 text-left">
        {" "}
        <h2 className="text-4xl md:text-5xl font-bold text-light_black leading-tight font-readax_pro mb-4 animate-slow-fade-in">
          Turning your vision into a success story!
        </h2>
        <hr className="border-primary" />
        <p className="text-gray-700 font-readax_pro mb-8 animate-slow-fade-in delay-500 opacity-0 pt-4">
          With a focus on AI, cloud, and mobile solutions, Red Buffer’s
          experienced teams optimize cost, resources, and timelines for startups
          and enterprises across multiple industries.
        </p>
        <button className="bg-primary text-white px-10 py-6">
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
