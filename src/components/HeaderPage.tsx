import { Link } from "react-router-dom";
import viteLogo from "../assets/logo.svg";

const HeaderPage = () => {
  return (
    <div className="flex items-start justify-between p-8 md:p-8">
      {/* Logo on the left */}
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="w-32 h-auto logo" alt="Vite logo" />
      </a>

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
        <button className="text-gray-700">
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
    </div>
  );
};

export default HeaderPage;
