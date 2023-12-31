import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">About ByteBridges</h2>
            <p>
              We are a team of experienced web developers, working together to
              deliver exceptional digital solutions to our clients.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p>Phone: +92 3495683110</p>
            <p>Email: mxbilal0@gmail.com</p>
            <p>Address: Islamabad, Pakistan</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6">
        <div className="container mx-auto px-8 py-4 text-center">
          <p>&copy; 2023 ByteBridges. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
