import MissionPage from "../../components/MissionPage";
import Services from "../../components/Services";
import Technologies from "../../components/Technologies";
import ContactUs from "../../components/ContactUs";
import Testimonials from "../../components/Testimonials";
const Home = () => {
  return (
    <>
      <MissionPage home={true} />
      <Services home={true} />
      <Technologies />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
