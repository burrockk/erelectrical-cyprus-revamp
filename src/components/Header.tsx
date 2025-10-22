import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navigationItems = [
    { name: "Hompage", sectionId: "top" },
    { name: "Sectors", sectionId: "sectors" },
    {
      name: "About Us",
      sectionId: "about",
      subItems: [
        { name: "Our History", sectionId: "timeline" },
        { name: "Investments", sectionId: "investments" }
      ]
    },
    { name: "Gallery", sectionId: "gallery" },
    { name: "Brands", sectionId: "brands" },
    { name: "Locations", sectionId: "branches" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-auto md:h-16 py-2 md:py-0 gap-4">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("top")} 
            className="flex items-center gap-2 md:gap-3 cursor-pointer flex-shrink-0 min-w-0"
          >
            <img src={logo} alt="Erel Electrical Logo" className="h-12 md:h-14 w-auto flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">Erel Electrical</h1>
              <p className="text-xs md:text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">Electrical • Lighting • Solar • Tyres</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigationItems.map((item) =>
              item.subItems ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer relative text-sm xl:text-base"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-2 py-2 min-w-[200px] bg-white rounded-lg shadow-lg transition-all duration-200 ${
                      activeDropdown === item.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => scrollToSection(subItem.sectionId)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors duration-200"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer text-sm xl:text-base"
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Mobile menu */}
          <div className="lg:hidden ml-auto">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-foreground p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  {navigationItems.map((item) =>
                    item.subItems ? (
                      <div key={item.name}>
                        <button
                          onClick={() => scrollToSection(item.sectionId)}
                          className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2 px-4 hover:bg-accent rounded-md"
                        >
                          {item.name}
                        </button>
                        <div className="ml-4">
                          {item.subItems.map((sub) => (
                            <button
                              key={sub.name}
                              onClick={() => scrollToSection(sub.sectionId)}
                              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2 px-4 hover:bg-accent rounded-md"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.sectionId)}
                        className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2 px-4 hover:bg-accent rounded-md"
                      >
                        {item.name}
                      </button>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;