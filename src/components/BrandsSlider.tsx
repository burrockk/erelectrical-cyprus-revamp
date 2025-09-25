import { useEffect, useState } from "react";
import fumagalliLogo from "@/assets/fumagalli-logo.webp";

// Simulated brand logos - in real implementation, these would be actual brand images
const brands = [
  "Schneider Electric", "ABB", "Siemens", "Legrand", "Phoenix Contact",
  "Weidmuller", "Rittal", "Moeller", "KLEMSAN", "Nexans", "Prysmian",
  "General Electric", "Osram", "Philips", "Toshiba", "Panasonic"
];

export const BrandsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(brands.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Çalıştığımız Markalar
          </h2>
          <p className="text-xl text-muted-foreground">
            Dünya çapında tanınmış markaların Kıbrıs distribütörüyüz
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, slideIndex) => {
              const slideBrands = brands.slice(slideIndex * 4, (slideIndex + 1) * 4);
              // Pad with empty slots to ensure consistent grid
              const paddedBrands = [...slideBrands];
              while (paddedBrands.length < 4) {
                paddedBrands.push(null);
              }
              
              return (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {paddedBrands.map((brand, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-center h-24 rounded-lg transition-all duration-300 group cursor-pointer p-4 ${
                          brand ? "bg-muted hover:bg-primary hover:text-white" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        {brand && (
                          <div className="flex items-center gap-6 group-hover:scale-105 transition-transform">
                            <div className="w-36 h-20 bg-muted-foreground/20 rounded-md flex-shrink-0 group-hover:bg-white/20 transition-colors flex items-center justify-center overflow-hidden">
                              {brand === "Legrand" ? (
                                <img 
                                  src={fumagalliLogo} 
                                  alt="Fumagalli Logo" 
                                  className="w-full h-full object-contain"
                                />
                              ) : null}
                            </div>
                            <span className="text-lg font-semibold text-center">
                              {brand}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary shadow-glow" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};