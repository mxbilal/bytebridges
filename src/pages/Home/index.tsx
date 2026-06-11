import MissionPage from "../../components/MissionPage";
import TrustBar from "../../components/home/TrustBar";
import Services from "../../components/Services";
import HowIWork from "../../components/home/HowIWork";
import FeaturedWork from "../../components/home/FeaturedWork";
import Technologies from "../../components/Technologies";
import WhyByteBridges from "../../components/home/WhyByteBridges";
import PersonalIntro from "../../components/home/PersonalIntro";
import FAQ from "../../components/home/FAQ";
import ContactUs from "../../components/ContactUs";

const Home = () => (
  <>
    <MissionPage home={true} />
    <TrustBar />
    <PersonalIntro />
    <Services home />
    <HowIWork />
    <FeaturedWork />
    <Technologies />
    <WhyByteBridges />
    <FAQ />
    <ContactUs />
  </>
);

export default Home;
