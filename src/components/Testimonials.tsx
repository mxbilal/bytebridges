import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

interface Testimonial {
  rating: number;
  feedback: string;
  name: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    feedback:
      "ByteBridges demonstrated unparalleled React proficiency, transforming our ideas into a visually stunning and highly responsive interface. Their attention to detail truly set them apart.",
    name: "Peter Novotny",
  },
  {
    rating: 5,
    feedback:
      "Incredible teamwork. ByteBridges not only met but exceeded our expectations with their MERN stack expertise. The result was a product that looks great and functions flawlessly.",
    name: "Hammad Ahmed",
  },
  {
    rating: 5,
    feedback:
      "Working with ByteBridges was a game-changer. Their mastery of AWS and hosting ensured our online presence is reliable and ready to scale for future growth.",
    name: "Johnny Dorvilien",
  },
  {
    rating: 4,
    feedback:
      "Efficient and professional. ByteBridges' backend work delivered robust, fast applications and hit our project deadlines with precision. Highly recommend them.",
    name: "Asif Ghafoor",
  },
  {
    rating: 5,
    feedback:
      "From concept to execution, their commitment to innovation shines through. Their MERN stack work transformed our digital presence into a seamless, user-centric experience.",
    name: "Jacob Martin",
  },
  {
    rating: 5,
    feedback:
      "ByteBridges delivered an exceptional web solution with real attention to detail. Their commitment to quality made our launch smooth from start to finish.",
    name: "Jack Moons",
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-amber-400" : "text-slate-200"}
        aria-hidden
      >
        ★
      </span>
    ))}
  </div>
);

const Testimonials = () => (
  <Section alt>
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
        Testimonials
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900">
        What clients say
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={(i % 3) * 90} className="h-full">
          <figure className="h-full bg-white p-6 rounded-2xl border border-slate-200 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Stars rating={t.rating} />
            <blockquote className="text-slate-700 text-sm leading-relaxed flex-grow">
              “{t.feedback}”
            </blockquote>
            <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-heading font-bold flex items-center justify-center shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                {t.role && <p className="text-xs text-muted">{t.role}</p>}
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Testimonials;
