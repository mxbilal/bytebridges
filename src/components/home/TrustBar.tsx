import { aboutContent } from "../../content/about";

const TrustBar = () => (
  <div className="border-y border-slate-100 bg-surface py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {aboutContent.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading font-bold text-2xl md:text-3xl text-primary">
              {stat.value}
            </p>
            <p className="text-sm text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
