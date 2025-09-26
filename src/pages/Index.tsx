import Header from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { OnlineStoreBanner } from "@/components/OnlineStoreBanner";
import { SectorsSection } from "@/components/SectorsSection";
import { WhyErelSection } from "@/components/WhyErelSection";
import { BrandsSlider } from "@/components/BrandsSlider";
import { Timeline } from "@/components/Timeline";
import { CyprusMap } from "@/components/CyprusMap";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <OnlineStoreBanner />
      <SectorsSection />
      <WhyErelSection />
      <BrandsSlider />
      <Timeline />
      <CyprusMap />
      <ContactSection />
    </div>
  );
};

export default Index;
