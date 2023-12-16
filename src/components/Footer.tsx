function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="mb-6 sm:mb-0">
          <a
            href="/"
            className="text-xl font-bold text-gray-200 hover:text-gray-100"
          >
            ByteBridges
          </a>
        </div>
        <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-4">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/portfolio" className="hover:underline">
            Portfolio
          </a>
          <a href="/careers" className="hover:underline">
            Careers
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-6 sm:mt-10">
        <p className="text-sm text-gray-500">
          © 2023 ByteBridges. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
