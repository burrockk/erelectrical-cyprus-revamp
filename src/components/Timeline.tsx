import { useState } from "react";
import { Building, Factory, Zap, MapPin } from "lucide-react";

const timelineEvents = [
  {
    year: "1954",
    title: "Kuruluş",
    description: "Foundations of our family-owned business were first laid in 1942 by Dervis Erel in Nicosia. Production and distribution of general construction materials have been our main dealings for many years.",
    icon: Building,
    color: "from-primary to-primary-light"
  },
  {
    year: "2008", 
    title: "Sektör Değişikliği",
    description: "Elektrik malzemeleri distribütörlüğüne odaklanıldı",
    icon: Zap,
    color: "from-accent to-accent-light"
  },
  {
    year: "2011",
    title: "Kablo Üretimi",
    description: "Kablo üretim fabrikamızın açılışı gerçekleştirildi",
    icon: Factory,
    color: "from-solar to-accent"
  },
  {
    year: "2022",
    title: "PVC Boru Üretimi",
    description: "PVC elektrik borusu üretim hattımız devreye alındı",
    icon: Factory,
    color: "from-primary-light to-accent"
  },
  {
    year: "2026",
    title: "Mağusa Şubesi",
    description: "Kıbrıs'ın en büyük elektrik ve aydınlatma şubesinin açılışı",
    icon: MapPin,
    color: "from-accent to-solar"
  }
];

export const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tarihçemiz
          </h2>
          <p className="text-xl text-muted-foreground">
            70 yıllık yolculuğumuzda attığımız önemli adımlar
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