import missionImg from "../assets/mission.jpg";
const MissionPage = () => {
  return (
    <div className="p-8 text-center flex items-center gap-4 flex-col md:flex-row">
      <div className="  md:w-1/2 ">
        <img src={missionImg} className="w-full" />
      </div>
      <div className="w-full md:w-1/2">
        {" "}
        <h2 className="text-4xl font-bold mb-4 animate-slow-fade-in">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-8 text-xl text-justify animate-slow-fade-in delay-500 opacity-0">
          At ByteBridges, our mission is to seamlessly blend innovation and
          craftsmanship, crafting web solutions that transcend expectations. We
          pledge to make every pixel perfect, optimizing not just code but
          experiences. Our commitment extends beyond lines of code; it's about
          making the web a space of satisfaction for our clients. We don't just
          build websites; we sculpt digital ecosystems that thrive.
        </p>
      </div>
    </div>
  );
};

export default MissionPage;
