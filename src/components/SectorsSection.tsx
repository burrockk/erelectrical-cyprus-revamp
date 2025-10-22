import { Zap, Sun, Lightbulb, LoaderPinwheel } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const sectors = [
  {
    icon: Zap,
    title: "Electrical Products",
    description: "A complete range of low and medium voltage electrical materials and accessories",
    features: [
      "Low and medium voltage energy cables and accessories",
      "Power transformers", 
      "Industrial solutions",
      "Decorative electrical products"
    ],
    gradient: "from-primary to-primary-light"
  },
  {
    icon: Sun,
    title: "Solar Energy Products",
    description: "Only high quality and TIER 1 brands of all kinds of solar energy components",
    features: [
      "Solar panels",
      "Gel and lithium energy storage",
      "ON-OFF grid and hybrid inverters",
      "Protection, control and cable solutions",
    ],
    gradient: "from-solar to-accent"
  },
  {
    icon: Lightbulb,
    title: "Lighting",
    description: "Modern and industrial lighting solutions",
    features: [
      "Decorative lighting",
      "Industrial lighting",
      "Outdoor lighting",
      "Solar lighting",
    ],
    gradient: "from-primary to-primary-light"
  },
  {
    icon: LoaderPinwheel,
    title: "Vehicle Tyres",
    description: "High-quality tyres for all types of vehicles",
    features: [
      "From sport tyres to commercial vehicle tyres",
      "Reasonable prices for all vehicle types",
      "Durable and reliable brands",
      "High performance and safety features",
    ],
    gradient: "from-solar to-accent"
  }
];

export const SectorsSection = () => {
  return (
    <section id="sectors" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Business Areas
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            As the leading company in four key sectors, we provide comprehensive
            solutions for all your electrical and tyre needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-none bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br ${sector.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {sector.title}
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  {sector.description}
                </p>
                <ul className="space-y-2 text-left">
                  {sector.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.gradient} flex-shrink-0 mt-1.5`}></div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};