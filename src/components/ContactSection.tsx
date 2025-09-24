import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const ContactSection = () => {
  return <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            İletişim Bilgileri
          </h2>
          <p className="text-xl text-white/90">
            Bizimle iletişime geçin, profesyonel ekibimiz size yardımcı olmaktan mutluluk duyacaktır
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-white/80 mb-2">Merkez Ofis</p>
              <p className="text-lg">+90 392 227 55 00</p>
              <p className="text-white/80 text-sm mt-2">
                Pazartesi - Cumartesi: 08:00 - 18:00
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-solar flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-posta</h3>
              <p className="text-white/80 mb-2">Genel Bilgi</p>
              <p className="text-lg">info@erelelectrical.com</p>
              <p className="text-white/80 mb-2 mt-4">Satış</p>
              <p className="text-lg">sales@erelelectrical.com</p>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Adres</h3>
              <p className="text-white/80 mb-2">Merkez Ofis & Depo</p>
              <p className="text-lg">
                Bedrettin Demirel Caddesi No:15<br />
                Lefkoşa, Kuzey Kıbrıs
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">Online Mağaza</h4>
                    <p className="text-white/80">store.erelelectrical.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-solar flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">Acil Destek</h4>
                    <p className="text-white/80">7/24 Teknik Destek Hattı</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Projeleriniz için teklif almaya hazır mısınız?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent hover:bg-accent-dark transition-smooth shadow-glow">
              Teklif Talep Et
            </Button>
            <Button variant="outline" size="lg" className="border-white text-black hover:text-primary transition-smooth bg-[#ff992e]">
              Katalog İndir
            </Button>
          </div>
        </div>
      </div>
    </section>;
};