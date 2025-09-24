import { useState } from "react";
import { MapPin, Phone, Mail, Clock, X, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cyprusMapSvg from "@/assets/cyprus-map.svg";

const branches = [
  {
    id: "lefkosa",
    name: "Lefkoşa Merkez Şube",
    city: "Lefkoşa",
    address: "Bedrettin Demirel Caddesi No:15, Lefkoşa",
    phone: "+90 392 227 55 00",
    email: "lefkosa@erelelectrical.com",
    hours: "Pazartesi - Cumartesi: 08:00 - 18:00",
    description: "Ana merkez şubemiz ve ana depo tesisimiz",
    position: { x: 570, y: 330 }, // Updated for real SVG coordinates
    image: null // Will add branch images later
  },
  {
    id: "girne",
    name: "Girne Şubesi",
    city: "Girne", 
    address: "Karaoğlanoğlu Caddesi No:42, Girne",
    phone: "+90 392 815 25 30",
    email: "girne@erelelectrical.com",
    hours: "Pazartesi - Cumartesi: 08:30 - 17:30",
    description: "Kuzey Kıbrıs bölgesi hizmet merkezi",
    position: { x: 490, y: 220 }, // Updated for real SVG coordinates
    image: null
  },
  {
    id: "magusa",
    name: "Mağusa Şubesi",
    city: "Mağusa",
    address: "Salamis Yolu Üzeri No:88, Mağusa",
    phone: "+90 392 366 78 90",
    email: "magusa@erelelectrical.com", 
    hours: "Pazartesi - Cumartesi: 08:00 - 18:00",
    description: "2026'da açılacak Kıbrıs'ın en büyük elektrik ve aydınlatma şubesi",
    position: { x: 850, y: 380 }, // Updated for real SVG coordinates
    image: null
  }
];

export const CyprusMap = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const selectedBranchData = branches.find(b => b.id === selectedBranch);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Şubelerimiz
          </h2>
          <p className="text-xl text-muted-foreground">
            Kıbrıs genelinde size en yakın şubemizi keşfedin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative bg-white rounded-2xl shadow-card p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Kıbrıs Haritası
            </h3>
            
            {/* Real Cyprus SVG Map */}
            <div className="relative mx-auto" style={{ maxWidth: "600px", height: "400px" }}>
              <div className="relative w-full h-full">
                <img 
                  src={cyprusMapSvg} 
                  alt="Kıbrıs Haritası"
                  className="w-full h-full object-contain"
                />
                
                {/* Branch markers positioned over the SVG */}
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${(branch.position.x / 1140) * 100}%`,
                      top: `${(branch.position.y / 740) * 100}%`
                    }}
                    onClick={() => setSelectedBranch(branch.id)}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 bg-accent rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-semibold text-primary bg-white px-2 py-1 rounded shadow">
                          {branch.city}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Şube detaylarını görmek için harita üzerindeki noktaları tıklayın
              </p>
            </div>
          </div>

          {/* Branch Information */}
          <div className="space-y-6">
            {selectedBranchData ? (
              <Card className="shadow-card border-l-4 border-l-accent">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-2xl text-primary">
                    {selectedBranchData.name}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedBranch(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Branch Image Area */}
                  <div className="mb-6">
                    <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                      <div className="text-center text-muted-foreground">
                        <Building className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm">Şube Görseli</p>
                        <p className="text-xs">(Yakında eklenecek)</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    {selectedBranchData.description}
                  </p>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Adres</p>
                      <p className="text-muted-foreground">{selectedBranchData.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p className="text-muted-foreground">{selectedBranchData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">E-posta</p>
                      <p className="text-muted-foreground">{selectedBranchData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold">Çalışma Saatleri</p>
                      <p className="text-muted-foreground">{selectedBranchData.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="text-center py-12">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Şube Seçin
                  </h3>
                  <p className="text-muted-foreground">
                    Harita üzerindeki noktalardan birini tıklayarak şube bilgilerini görüntüleyin
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick branch list */}
            <div className="grid gap-3">
              {branches.map((branch) => (
                <Button
                  key={branch.id}
                  variant={selectedBranch === branch.id ? "default" : "outline"}
                  className="justify-start h-auto p-4"
                  onClick={() => setSelectedBranch(branch.id)}
                >
                  <div className="text-left">
                    <p className="font-semibold">{branch.name}</p>
                    <p className="text-sm opacity-80">{branch.city}</p>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};