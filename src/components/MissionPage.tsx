import missionImg from "../assets/mission-svg.svg";
import ed from "../assets/ed.svg";
import "./component.scss";

const MissionPage = ({ home }: { home: Boolean }) => {
  const handleContact = () => {
    let id = window.document.getElementById("contact-form");
    id?.scrollIntoView({ behavior: "smooth" });
  };

  let homeHeading = () => (
    <>
      Turning your vision into <span className="text-primary">success</span>{" "}
      story!
    </>
  );
  return (
    <div className="p-8 text-center flex justify-between gap-4 flex-col-reverse md:flex-row md:px-20">
      <div className="w-full md:w-2/5 lg:3/4 pt-6 text-left">
        <h2 className="text-2xl md:text-5xl font-bold text-light_black leading-tight font-readax_pro mb-4 animate-slow-fade-in">
          {home ? homeHeading() : "Connecting tommorow's technology today"}
        </h2>
        <div className="line-container">
          <hr className=" border-primary m-auto animated-line w-0" />
        </div>
        {/* <hr className="border-primary" /> */}
        <p
          className={`text-graay-700 text-lg font-readax_pro mb-8 animate-slow-fade-in delay-500 opacity-0 pt-4`}
        >
          Bytebridges specializes in delivering tailored web development
          solutions, including CRM, CMS, and SAS applications. Our seasoned
          teams optimize costs, maximize resources, and ensure efficient
          timelines for startups and enterprises across diverse industries.
        </p>
        {home && (
          <button
            className="bg-primary text-white px-10 py-6 mission-btn"
            onClick={handleContact}
          >
            Get Started
          </button>
        )}
      </div>
      <div className="md:w-1/2">
        <img src={home ? missionImg : ed} className="w-full lg:w-4/5" />
      </div>
    </div>
  );
};

export default MissionPage;
