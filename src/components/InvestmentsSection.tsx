import { Card, CardContent } from "@/components/ui/card";
import galleryShowroomExterior from "@/assets/gallery-showroom-exterior.jpg";

const investments = [
  {
    id: 1,
    title: "Famagusta Branch",
    subtitle: "The biggest of its kind",
    image: galleryShowroomExterior,
    hasImage: true,
  },
  {
    id: 2,
    title: "New Warehouse is Under Construction",
    hasImage: false,
  },
  {
    id: 3,
    title: "Adding new business sector to our dealings",
    hasImage: false,
  },
];

export const InvestmentsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title */}
          <div className="flex items-center lg:sticky lg:top-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-accent">Our Investments</span>
              <br />
              <span className="text-accent">Continue at</span>
              <br />
              <span className="text-accent">Full Speed</span>
            </h2>
          </div>

          {/* Right Side - Investment Cards */}
          <div className="space-y-6">
            {investments.map((investment) => (
              <Card
                key={investment.id}
                className="bg-primary border-none shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  {investment.hasImage && investment.image ? (
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                          {investment.title}
                        </h3>
                        {investment.subtitle && (
                          <p className="text-accent text-lg font-medium">
                            {investment.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="relative h-64 md:h-full overflow-hidden rounded-br-lg">
                        <img
                          src={investment.image}
                          alt={investment.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                        {investment.title}
                      </h3>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
