import ContactUs from "../../components/ContactUs";
import MissionPage from "../../components/MissionPage";

const About = () => {
  return (
    <>
      <MissionPage home={false} />
      <div className="p-8 md:px-24">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-light_black mb-4">
            About Us
          </h2>
          <p className="text-gray-700">
            Welcome to ByteBridges, where innovation meets excellence. As a new
            and dynamic company, we specialize in creating bespoke CRM, CMS, and
            SaaS applications that redefine digital experiences. Our mission is
            to seamlessly blend creativity and technology, bringing your ideas
            to life in the digital realm.
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-light_black mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-700 mb-4">
            At ByteBridges, our strength lies in our diverse and talented team.
            Currently, our dynamic team comprises skilled individuals from both
            the frontend and backend realms. With a focus on collaboration and
            innovation, we're on a mission to expand our family and continue
            pushing the boundaries of web development. Join us on this exciting
            journey as we grow and evolve together.
          </p>
          <p className="text-gray-700">
            <strong>Team Count:</strong> Currently, we have a dedicated team of
            4-5 individuals from both frontend and backend expertise. However,
            we are actively seeking more talented individuals to join us in
            shaping the future of web development.
          </p>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default About;
