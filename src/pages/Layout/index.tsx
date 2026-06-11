import { ReactNode } from "react";
import Footer from "../../components/Footer";
import HeaderPage from "../../components/HeaderPage";
import ScrollToTop from "../../components/ScrollToTop";
import FloatingCTA from "../../components/contact/FloatingCTA";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <HeaderPage />
    <main>{children}</main>
    <ScrollToTop />
    <FloatingCTA />
    <Footer />
  </>
);

export default Layout;
