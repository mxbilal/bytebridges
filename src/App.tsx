import HeaderPage from "./components/HeaderPage";
import "./App.scss";
import MissionPage from "./components/MissionPage";
import ServicesPage from "./components/ServicePage";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <HeaderPage />
      <MissionPage />
      <ServicesPage />
      <Technologies />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
