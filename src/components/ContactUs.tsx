import { useState } from "react";
import contactIcon from "../assets/contact-svg.svg";
import { useSnackbar } from "notistack";

interface formTypes {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formdata, setFormdata] = useState<formTypes>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: [value] });
  };
  function handleSubmit(event) {
    event.preventDefault();
    const templateId = "template_l1j6brt";
    sendFeedback(templateId, {
      message: formdata.message,
      subject: formdata.subject,
      from_name: formdata.name,
      to_name: "Bilal",
      reply_to: formdata.email,
    });
    enqueueSnackbar("Email is Sent!", { variant: "success" });
  }

  function sendFeedback(templateId: any, variables: any) {
    window.emailjs
      .send("service_yw9mev8", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
  return (
    <div className="p-8 w-full">
      <div className="md:w-full flex flex-col-reverse md:flex-row gap-4 md:gap-x-40 lg:gap-28 bg-white p-8">
        {/* Form Section */}
        <div className="md:w-1/2 md:pr-8">
          <p className="text-2xl font-bold mb-4">Contact Us</p>
          <form onSubmit={handleSubmit}>
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
                value={formdata.name}
                onChange={handleChange}
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
                value={formdata.subject}
                onChange={handleChange}
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
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-light_gray border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary resize-none"
                value={formdata.message}
                onChange={handleChange}
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
          <img src={contactIcon} className="md:w-3/4 lg:w-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
