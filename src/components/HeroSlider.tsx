import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWarehouse from "@/assets/hero-electrical-warehouse.jpg";
import heroSolar from "@/assets/hero-solar-installation.jpg";
import heroLighting from "@/assets/hero-lighting-showroom.jpg";

const slides = [
  {
    id: 1,
    image: heroWarehouse,
    title: "Kıbrıs'ın En Büyük Elektrik Distribütörü",
    subtitle: "A'dan Z'ye tüm elektrik malzemeleriniz tek çatı altında",
    description: "70 yıllık deneyimimizle profesyonel çözümler sunuyoruz"
  },
  {
    id: 2,
    image: heroSolar,
    title: "Solar Enerji Çözümleri",
    subtitle: "Gelecek nesillere temiz enerji bırakın",
    description: "Premium solar panel ve sistem bileşenleri"
  },
  {
    id: 3,
    image: heroLighting,
    title: "Aydınlatma Çözümleri",
    subtitle: "Modern ve enerji verimli aydınlatma sistemleri",
    description: "LED teknolojisi ile tasarruf edin"
  },
  {
    id: 4,
    image: heroWarehouse,
    title: "Endüstriyel Çözümler",
    subtitle: "Orta gerilim ve endüstriyel elektrik malzemeleri",
    description: "Büyük projelerde güvenilir partneriniz"
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => {
        const position = index === currentSlide 
          ? "translate-x-0" 
          : index === (currentSlide - 1 + slides.length) % slides.length
          ? "-translate-x-full"
          : "translate-x-full";
        
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${position}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl text-white animate-fade-in">
                <h1 className="text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-2xl mb-4 text-accent">
                  {slide.subtitle}
                </h2>
                <p className="text-xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:bg-primary-dark transition-smooth shadow-glow"
                  >
                    Ürünlerimizi Keşfedin
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary transition-smooth"
                  >
                    İletişime Geçin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-smooth"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-smooth"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-smooth ${
              index === currentSlide 
                ? "bg-accent shadow-glow" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};