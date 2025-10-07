import { useState } from "react";
import { MapPin, Phone, Mail, Clock, X, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import cyprusMapSvg from "@/assets/cyprus-map.svg";

const branches = [
  {
    id: "lefkosa",
    name: "Nicosia Branch",
    city: "Nicosia",
    address: "Şht. Mustafa Mehmet St., No:28, Göçmenköy, Nicosia",
    phone: "+90 392 223 87 21 / 22",
    email: "info@erelelectrical.com",
    hours: "Pazartesi - Cumartesi: 08:00 - 17:00",
    description: "Main store and warehouse",
    position: { x: 570, y: 330 }, // Updated for real SVG coordinates
    image: null // Will add branch images later
  },
  {
    id: "girne",
    name: "Kyrenia Branch",
    city: "Kyrenia", 
    address: "İnönü St. No:15, Kyrenia",
    phone: "+90 392 815 29 96",
    email: "info@erelelectrical.com",
    hours: "Pazartesi - Cuma: 08:00 - 17:00, Cumartesi: 8:00 - 13:00",
    description: "Kyrenia sales office and warehouse",
    position: { x: 490, y: 220 }, // Updated for real SVG coordinates
    image: null
  },
  {
    id: "magusa",
    name: "Famagusta Branch",
    city: "Famagusta",
    address: "Opposite Mağusa State Hospital, on Salamis Road, Famagusta",
    phone: "Very Soon",
    email: "info@erelelectrical.com", 
    hours: "Very Soon",
    description: "The largest store of its kind",
    position: { x: 850, y: 380 }, // Updated for real SVG coordinates
    image: null
  }
];

export const CyprusMap = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const selectedBranchData = branches.find(b => b.id === selectedBranch);

  return (
    <section id="branches" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Stores
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our closest store across Cyprus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative bg-white rounded-2xl shadow-card p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Select a Branch
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
                Select a point on the map to view branch information
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
                  {/* Branch Location Map */}
                  <div className="mb-6">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedBranchData.address)}&output=embed`}
                      className="w-full h-64 rounded-lg border-2 border-muted"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${selectedBranchData.name} Konumu`}
                    />
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
                    Select a Branch
                  </h3>
                  <p className="text-muted-foreground">
                    Select a point on the map to view branch information.
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
