import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import onlineStoreBanner from "@/assets/online-store-banner.jpg";
export const OnlineStoreBanner = () => {
  return <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="h-12 w-12 text-accent" />
              <h2 className="text-4xl font-bold">Online Store</h2>
            </div>
            <p className="text-xl mb-6 text-primary-foreground/90">Explore our full range of lighting and solar solutions online and get instant updates on the latest prices.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Thousands of products</span>
              </li>
              
            </ul>
            <Button size="lg" className="bg-gradient-accent hover:bg-accent-dark transition-smooth shadow-glow group" onClick={() => window.open('https://store.erelelectrical.com', '_blank')}>
              Visit Online Store
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
              <img src={onlineStoreBanner} alt="Erel Electrical Online Store" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-accent rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>;
};