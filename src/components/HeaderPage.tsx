import { Link, useLocation, useNavigate } from "react-router-dom";
import byteLogo from "../assets/byte_logo.png";
import { useState } from "react";
import { scrollToContactForm } from "../lib/scroll";
import "./component.scss";

const HeaderLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const HeaderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleContact = () => {
    setDrawerOpen(false);
    if (!scrollToContactForm()) {
      navigate("/contact");
    }
  };

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/">
          <img
            src={byteLogo}
            className="h-14 sm:h-16 w-auto logo"
            alt="Byte Bridges Technology"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {HeaderLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-primary"
                  : "text-slate-600 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary_dark transition-colors contact-btn"
            onClick={handleContact}
          >
            Let's Talk
          </button>
        </nav>

        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {drawerOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setDrawerOpen(false)}
            />
            <div className="md:hidden fixed inset-y-0 right-0 bg-white w-72 p-6 z-50 shadow-xl flex flex-col gap-1">
              <button
                className="self-end p-2 text-slate-500"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {HeaderLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-3 text-base font-medium border-b border-slate-100 ${
                    isActive(link.path) ? "text-primary" : "text-slate-700"
                  }`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                className="mt-4 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary_dark w-full"
                onClick={handleContact}
              >
                Let's Talk
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default HeaderPage;
