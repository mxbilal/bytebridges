import { ReactNode } from "react";
import Footer from "../../components/Footer";
import HeaderPage from "../../components/HeaderPage";
import ScrollToTop from "../../components/ScrollToTop";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderPage />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
