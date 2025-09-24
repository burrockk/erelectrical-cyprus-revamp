import { Zap, Sun, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const sectors = [
  {
    icon: Zap,
    title: "Elektrik Malzemeleri",
    description: "A'dan Z'ye tüm düşük voltaj elektrik malzemeleri ve orta gerilim elektrik malzemeleri",
    features: [
      "Düşük voltaj sistemleri",
      "Orta gerilim ekipmanları", 
      "Endüstriyel çözümler",
      "Kontrol ve kumanda sistemleri",
      "Kablo ve bağlantı elemanları"
    ],
    gradient: "from-primary to-primary-light"
  },
  {
    icon: Sun,
    title: "Solar Sistem Bileşenleri",
    description: "Güneş enerjisi sistemleri için kaliteli ve verimli bileşenler",
    features: [
      "Solar paneller",
      "İnverterler ve dönüştürücüler",
      "Aküler ve enerji depolama",
      "Montaj sistemleri",
      "İzleme ve kontrol sistemleri"
    ],
    gradient: "from-solar to-accent"
  },
  {
    icon: Lightbulb,
    title: "Aydınlatma Çözümleri",
    description: "Modern ve enerji verimli aydınlatma sistemleri",
    features: [
      "LED aydınlatma teknolojileri",
      "Endüstriyel aydınlatma",
      "Mimari aydınlatma çözümleri",
      "Akıllı aydınlatma sistemleri",
      "Dış mekan aydınlatması"
    ],
    gradient: "from-accent to-accent-light"
  }
];

export const SectorsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Faaliyet Alanlarımız
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Üç ana sektörde uzmanlaşmış ekibimizle, elektrik ve enerji ihtiyaçlarınıza 
            kapsamlı çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-none bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${sector.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {sector.title}
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {sector.description}
                </p>
                <ul className="space-y-2 text-left">
                  {sector.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.gradient}`}></div>
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