import { useState } from "react";
import { Building, Factory, Zap, MapPin, Expand, Milestone, ArrowBigUpDash } from "lucide-react";

const timelineEvents = [
  {
    year: "1942",
    title: "Starting Point",
    description: "Foundations of our family-owned business were first laid in 1942 by Dervis Erel in Nicosia. Production and distribution of general construction materials have been our main dealings for many years.",
    icon: Building,
    color: "from-primary to-primary-light"
  },
  {
    year: "2010", 
    title: "New Milestone",
    description: "We started importing electrical and lighting products from the biggest companies all over the world. This was a major milestone for our company and the first step we took becoming a leading company in the local market.",
    icon: Milestone,
    color: "from-solar to-accent"
  },
  {
    year: "2011",
    title: "Manufacturing",
    description: "Our first production line for energy cables was constructed. Our cable insulations are above standards. We keep the cable resistance low and flexibility high.",
    icon: Factory,
    color: "from-primary to-primary-light"
  },
  {
    year: "2016",
    title: "Growing",
    description: "Our second sales office in Kyrenia was opened. We expanded our distribution network. We sustain our highest level of service and quality in all our branches.",
    icon: MapPin,
    color: "from-solar to-accent-light"
  },
  {
    year: "2019",
    title: "Innovating",
    description: "We set up an electrical pipes manufacturing facility with cutting-edge technology machinery.",
    icon: Factory,
    color: "from-primary to-primary-light"
  },
  {
    year: "2020",
    title: "Expanding",
    description: "We started importing and distributing solar energy products. Partnered with TIER 1 solar energy brands. We have become a major player in the renewable energy sector.",
    icon: Expand,
    color: "from-solar to-accent-light"
  },
  {
    year: "2024",
    title: "Medium Voltage",
    description: "We started importing and distributing medium voltage cables, transformers and components.",
    icon: Zap,
    color: "from-primary to-primary-light"
  },
  {
    year: "2026",
    title: "The Biggest",
    description: "We proudly opened our Mağusa branch — the largest store of its kind in North Cyprus, offering the widest selection of products in the industry and redefining the shopping experience.",
    icon: ArrowBigUpDash,
    color: "from-solar to-accent-light"
  }
];

export const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our History
          </h2>
          <p className="text-xl text-muted-foreground">
            Significant steps we've taken throughout our 84-year legacy
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-solar"></div>
              
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  onMouseEnter={() => setActiveEvent(index)}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-left pl-8" : "text-left pr-8"}`}>
                    <div className={`p-6 rounded-2xl shadow-card bg-white border-l-4 border-primary hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                      activeEvent === index ? "scale-105" : ""
                    }`}>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {event.year}
                      </h3>
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-glow transition-all duration-300 ${
                    activeEvent === index ? "scale-125" : ""
                  }`}>
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start mb-8 pl-12">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
                
                {/* Icon */}
                <div className={`absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                  <event.icon className="h-4 w-4 text-white" />
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-card p-4 border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {event.year}
                  </h3>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};