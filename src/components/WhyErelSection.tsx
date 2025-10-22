import { Award, ShieldCheck, BadgePercent, BadgeCheck } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Trustworthy Company",
    description: "Family business that has not compromised on ethical values and principles since 1942"
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description: "No lower or middle class - only top quality products"
  },
  {
    icon: BadgePercent,
    title: "Reasonable Prices",
    description: "1st class products are offered for the most affordable prices"
  },
  {
    icon: ShieldCheck,
    title: "The Most Relaible Brands",
    description: "The most trusted brands on a global level with proven track records"
  }
];

export const WhyErelSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Why Erel Electrical?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every product we trade is imported by ourselves. All types of electrical
            cables and pipes which are economically viable to produce in North Cyprus
            are produced in our own facilities. Thus, we make sure of the quality of everything
            we offer and supply them at the most affordable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                <advantage.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-white/80">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Wide Product Range
            </h3>
            <p className="text-white/90 text-lg">
              Thousands of electrical, lighting and solar energy products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};