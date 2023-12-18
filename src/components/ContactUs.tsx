import contactIcon from "../assets/contact-svg.svg";

const ContactUs = () => {
  return (
    <div className="p-8 w-full">
      <div className="md:w-full flex flex-col-reverse md:flex-row gap-4 md:gap-x-40 bg-white p-8">
        {/* Form Section */}
        <div className="md:w-1/2 md:pr-8">
          <p className="text-2xl font-bold mb-4">Contact Us</p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-light_gray border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-light_gray border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-light_gray border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full bg-light_gray border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-on_hover"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="md:w-1/2 ">
          <img src={contactIcon} className="md:w-3/4" />
        </div>
        {/* <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src={contactIcon}
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
