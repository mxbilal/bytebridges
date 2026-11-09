import { Link } from "react-router-dom";
import Icon, { IconName } from "./ui/Icon";

interface CardProps {
  title: string;
  description: string;
  icon: IconName;
  slug?: string;
  whoFor?: string;
  timeline?: string;
  detailed?: boolean;
}

const ServiceCard = ({
  title,
  description,
  icon,
  slug,
  whoFor,
  timeline,
  detailed = false,
}: CardProps) => {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300">
        <Icon name={icon} className="w-7 h-7" />
      </div>
      <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed flex-grow">{description}</p>

      {detailed && whoFor && (
        <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
          <span className="font-semibold text-slate-700">Best for: </span>
          {whoFor}
        </p>
      )}
      {detailed && timeline && (
        <p className="text-xs text-primary font-medium mt-2">{timeline}</p>
      )}

      {slug && !detailed && (
        <Link
          to={`/services#${slug}`}
          className="inline-block mt-4 text-sm font-semibold text-primary hover:underline"
        >
          Learn more →
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
