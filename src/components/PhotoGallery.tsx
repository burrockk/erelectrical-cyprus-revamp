import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import gallerySolar from "@/assets/gallery-solar.webp";
import galleryLightingShowroom from "@/assets/gallery-lighting-showroom.webp";
import galleryWarehouse from "@/assets/gallery-warehouse.webp";
import galleryCables from "@/assets/gallery-cables.webp";
import galleryFacility from "@/assets/gallery-facility.webp";
import galleryCableReels from "@/assets/gallery-cable-reels.webp";
import galleryLightingDisplay from "@/assets/gallery-lighting-display.webp";
import galleryShowroomExterior from "@/assets/gallery-showroom-exterior.webp";
import galleryStorage from "@/assets/gallery-storage.webp";

const galleryImages = [
  {
    id: 1,
    image: gallerySolar,
    title: "Solar Enerji Sistemleri",
    description: "Profesyonel güneş enerjisi kurulumları"
  },
  {
    id: 2,
    image: galleryLightingShowroom,
    title: "Aydınlatma Showroom",
    description: "Zengin aydınlatma ürün yelpazesi"
  },
  {
    id: 3,
    image: galleryShowroomExterior,
    title: "Modern Showroom",
    description: "Çağdaş mağaza tasarımımız"
  },
  {
    id: 4,
    image: galleryLightingDisplay,
    title: "Aydınlatma Koleksiyonu",
    description: "Geniş ürün çeşitliliği"
  },
  {
    id: 5,
    image: galleryCables,
    title: "Kablo ve Elektrik Malzemeleri",
    description: "Kapsamlı stok çeşitliliği"
  },
  {
    id: 6,
    image: galleryWarehouse,
    title: "Modern Depo Tesisimiz",
    description: "Organize lojistik altyapı"
  },
  {
    id: 7,
    image: galleryFacility,
    title: "Lojistik Merkezi",
    description: "Geniş depolama kapasitesi"
  },
  {
    id: 8,
    image: galleryCableReels,
    title: "Kablo Stok Alanı",
    description: "Profesyonel kablo tedariki"
  },
  {
    id: 9,
    image: galleryStorage,
    title: "Organize Depolama",
    description: "Verimli stok yönetimi"
  }
];

export const PhotoGallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tesislerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern altyapımız ve geniş ürün yelpazemizle Kıbrıs'ın en büyük elektrik distribütörüyüz
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
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
