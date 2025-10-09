import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import gallerySolar from "@/assets/gallery-solar.jpg";
import galleryLightingShowroom from "@/assets/gallery-lighting-showroom.jpg";
import galleryWarehouse from "@/assets/gallery-warehouse.jpg";
import galleryCables from "@/assets/gallery-cables.jpg";
import galleryFacility from "@/assets/gallery-facility.jpg";
import galleryCableReels from "@/assets/gallery-cable-reels.jpg";
import galleryLightingDisplay from "@/assets/gallery-lighting-display.jpg";
import galleryShowroomExterior from "@/assets/gallery-showroom-exterior.jpg";
import galleryStorage from "@/assets/gallery-storage.jpg";
import mediumClose from "@/assets/medium-close.jpg";
import cableGeneral from "@/assets/cable-general.jpg";
import galleryUnloading from "@/assets/gallery-unloading.jpg";

const galleryImages = [
  {
    id: 1,
    image: gallerySolar,
    title: "Solar Panel Farm",
    description: "We use solar energy to power our facilities"
  },
  {
    id: 2,
    image: galleryLightingShowroom,
    title: "Nicosia Showroom",
    description: ""
  },
  {
    id: 3,
    image: galleryShowroomExterior,
    title: "Nicosia Showroom Exterior",
    description: ""
  },
  {
    id: 4,
    image: galleryLightingDisplay,
    title: "Nicosia Showroom 3",
    description: "Extensive Lighting Options"
  },
  {
    id: 5,
    image: galleryCables,
    title: "NYA Cables",
    description: "Variety of Sizes and Types"
  },
  {
    id: 6,
    image: galleryWarehouse,
    title: "Nicosia Warehouse",
    description: "Extensive Inventory"
  },
  {
    id: 7,
    image: galleryFacility,
    title: "Yerolakko Warehouse",
    description: "Spacious Storage"
  },
  {
    id: 8,
    image: galleryCableReels,
    title: "Nicosia Warehouse Armored Cables",
    description: "High Quality Cables"
  },
  {
    id: 9,
    image: galleryStorage,
    title: "Nicosia Warehouse Wholesale",
    description: "Wholesale Products"
  },
  {
    id: 10,
    image: mediumClose,
    title: "Medium Voltage Cable Stocks",
    description: ""
  },
  {
    id: 11,
    image: cableGeneral,
    title: "Aromored Cable Stocks",
    description: ""
  },
  {
    id: 12,
    image: galleryUnloading,
    title: "Always in Stock",
    description: ""
  }
  
];

export const PhotoGallery = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are the leading supplier of electrical products in North Cyprus. Here are some photos
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-lg aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/0 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
