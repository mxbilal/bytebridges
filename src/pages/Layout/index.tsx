import { ReactNode } from "react";
import Footer from "../../components/Footer";
import HeaderPage from "../../components/HeaderPage";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderPage />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
