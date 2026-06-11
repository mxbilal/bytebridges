import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ContactUs from "./components/ContactUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/contact"
          element={<ContactUs showChannels showPageHeader />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
