import MissionPage from "../../components/MissionPage";
import ServicesPage from "../../components/ServicePage";
import Technologies from "../../components/Technologies";
import ContactUs from "../../components/ContactUs";
import Testimonials from "../../components/Testimonials";
const Home = () => {
  return (
    <>
      <MissionPage home={true} />
      <ServicesPage />
      <Technologies />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
