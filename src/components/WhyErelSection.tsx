import { Award, Clock, Users, Truck } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "70 Yıllık Deneyim",
    description: "1954'ten beri sektörde güvenilir ve kaliteli hizmet sunuyoruz"
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "Alanında uzman teknik personelimizle profesyonel destek"
  },
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    description: "Kıbrıs genelinde hızlı ve güvenli teslimat ağımız"
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "Kesintisiz müşteri hizmetleri ve teknik destek"
  }
];

export const WhyErelSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Neden Erel Electrical?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Kıbrıs'ın en büyük elektrik distribütörü olarak, müşterilerimize 
            kaliteli ürünler ve mükemmel hizmet sunma konusundaki kararlılığımız 
            bizi sektörde lider yapmıştır.
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
              Binlerce Mutlu Müşteri
            </h3>
            <p className="text-white/90 text-lg">
              Konut projelerinden endüstriyel tesislere kadar geniş bir yelpazede 
              çözümler sunarak müşteri memnuniyetini her zaman ön planda tutuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};