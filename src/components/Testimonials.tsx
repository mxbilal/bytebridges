import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo from "../assets/logo.svg";

const Testimonial = () => {
  const testimonials = [
    {
      rating: 5,
      feedback:
        "ByteBridges demonstrated unparalleled ReactJS proficiency, transforming our ideas into a visually stunning and highly responsive user interface. Their attention to detail and commitment to excellence truly set them apart.",
      name: "Peter Novotny",
    },
    {
      rating: 5,
      feedback:
        "Incredible teamwork! ByteBridges not only met but exceeded our expectations with their MERN stack expertise. The result? A website that not only looks stunning but functions flawlessly.",
      name: "Hammad Ahmed",
    },
    {
      rating: 5,
      feedback:
        "Working with ByteBridges was a game-changer. Their mastery of AWS services and hosting solutions ensured our online presence is not just reliable but also scalable for future growth.",
      name: "Johnny Dorvilien",
    },
    {
      rating: 4,
      feedback:
        "Efficient and professional, ByteBridges' ExpressJS development provided robust and fast web applications, meeting our project deadlines with precision. Highly recommend their services!",
      name: "Asif Ghafoor",
    },
    {
      rating: 5,
      feedback:
        "From concept to execution, ByteBridges' commitment to innovation shines through. Their expertise in MERN stack solutions transformed our digital presence, resulting in a seamless and user-centric experience",
      name: "Jacob Martin",
    },
    {
      rating: 5,
      feedback:
        "ByteBridges delivered an exceptional web solution, showcasing unparalleled innovation and attention to detail. Their commitment to perfection transformed our digital presence into a seamless, user-centric experience..",
      name: "Jack Moons",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed for your design
        settings: {
          slidesToShow: 1, // Display 1 testimonial on smaller screens
        },
      },
    ],
  };

  return (
    <div className="p-8 md:p-24 bg-slate-100">
      <p className="text-center">TESTIMONIAL</p>
      <p className="text-2xl md:text-5xl font-bold text-light_black text-center leading-tight font-readax_pro mb-4">
        What Our Clients Say
      </p>
      <Slider {...settings} className="custom-slick">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="outline-none focus:outline-none md:pr-12 py-10"
          >
            <div className="bg-white p-6 rounded-lg hover:shadow-md h-80 flex flex-col justify-between">
              <div className="flex items-center justify-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-xl mr-1">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-center overflow-hidden">
                {testimonial.feedback}
              </p>
              <div className="flex justify-between">
                <p className="text-primary font-semibold">{testimonial.name}</p>
                <img src={Logo} width={30} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
