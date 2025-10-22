import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWarehouse from "@/assets/hero-electrical-warehouse.jpg";
import heroSolar from "@/assets/hero-solar-installation.jpg";
import heroLighting from "@/assets/hero-lighting-showroom.jpg";
import heroIndustrial from "@/assets/solarbanner.jpg";

const slides = [
  {
    id: 1,
    image: heroWarehouse,
  },
  {
    id: 2,
    image: heroSolar,
  },
  {
    id: 3,
    image: heroLighting,
  },
  {
    id: 4,
    image: heroIndustrial,
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full aspect-[1920/650] overflow-hidden bg-background">
      {slides.map((slide, index) => {
        let position = "translate-x-full opacity-0";
        
        if (index === currentSlide) {
          position = "translate-x-0 opacity-100";
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
          position = "-translate-x-full opacity-0";
        }
        
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${position}`}
          >
            <img 
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-smooth z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-smooth z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-smooth ${
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