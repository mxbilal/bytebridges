import { Link } from "react-router-dom";
import viteLogo from "../assets/logo.svg";
import { useEffect, useState } from "react";

const HeaderPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="flex items-start justify-between p-8 md:p-8">
      <img src={viteLogo} className="w-32 h-auto logo" alt="Vite logo" />

      <div className="hidden md:flex space-x-7 items-center ">
        <Link to="/" className="text-gray-700">
          Home
        </Link>
        <Link to="/" className="text-gray-700">
          About Us
        </Link>
        <Link to="/" className="text-gray-700">
          Blogs
        </Link>
        <Link to="/" className="text-gray-700">
          Our Services
        </Link>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-on_hover ">
          Contact Us
        </button>
      </div>

      <div className="md:hidden">
        <button className="text-gray-700" onClick={handleDrawerToggle}>
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
      </div>
      {drawerOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ease-in duration-300"
            onClick={handleDrawerToggle}
          ></div>
          <div className="md:hidden fixed inset-y-0 right-0 bg-white w-64 p-4 z-30 transition-transform ease-in-out duration-300">
            <svg
              className="h-6 w-6 cursor-pointer absolute top-4 right-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleDrawerToggle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <Link to="/" className="block py-2 text-gray-700">
              Home
            </Link>
            <Link to="/" className="block py-2 text-gray-700">
              About Us
            </Link>
            <Link to="/" className="block py-2 text-gray-700">
              Blogs
            </Link>
            <Link to="/" className="block py-2 text-gray-700">
              Our Services
            </Link>
            <button className="bg-primary text-white py-2 rounded hover:bg-on_hover">
              Contact Us
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderPage;
