import logo from "../../assets/byte_logo.svg";

const blogs = [
  {
    title: "Custom Web Development: Tailoring Solutions to Your Business Needs",
    date: "August 31, 2024",
    excerpt:
      "Discover how Bytebridges tailors CRM, CMS, and ERP solutions to streamline business processes and enhance efficiency, enabling companies to stay ahead in their industries.",
    link: "#",
    image: logo, // Replace with the actual path to your image
  },
  {
    title: "Responsive Design: Why Your Website Needs to Adapt to Every Device",
    date: "July 20, 2024",
    excerpt:
      "Learn how Bytebridges creates responsive web designs that offer an optimal user experience, no matter the device.",
    link: "#",
    image: logo, // Replace with the actual path to your image
  },
  {
    title: "Microservices Architecture: Enhancing Flexibility and Scalability",
    date: "June 15, 2024",
    excerpt:
      "Microservices architecture has revolutionized the way businesses approach software development. Bytebridges offers cutting-edge microservices solutions that enhance system flexibility, resilience, and ease of maintenance.",
    link: "#",
    image: logo, // Replace with the actual path to your image
  },
  {
    title: "AWS Integration: Unlocking the Full Potential of Cloud Services",
    date: "May 10, 2024",
    excerpt:
      "Explore how Bytebridges integrates AWS services to deliver scalable, secure, and cost-effective cloud solutions tailored to your business needs.",
    link: "#",
    image: logo, // Replace with the actual path to your image
  },
];

function BlogPage() {
  return (
    <div className="container p-8 md:px-24">
      <h2 className="text-3xl md:text-5xl font-bold text-light_black leading-tight font-readax_pro mb-4 animate-slow-fade-in">
        Blogs
      </h2>
      <hr className="border-primary w-32 border-2" />
      <div className="grid gap-8 py-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex bg-gray-100 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="w-1/5 flex justify-center items-center ">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-1/2 object-cover mix-blend-multiply "
              />
            </div>
            <div className="p-6 w-2/3">
              <h2 className="text-3xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
              <p className="text-gray-800 mb-4">{blog.excerpt}</p>
              <a href={blog.link} className="text-red-500 hover:underline">
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
