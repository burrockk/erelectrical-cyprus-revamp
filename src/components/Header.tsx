import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    { name: "Hompage", sectionId: "top" },
    { name: "Sectors", sectionId: "sectors" },
    { name: "About Us", sectionId: "about" },
    { name: "Locations", sectionId: "branches" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Erel Electrical Logo" className="h-14 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Erel Electrical</h1>
              <p className="text-sm text-muted-foreground">Electrical • Lighting • Solar</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button (placeholder for future mobile menu) */}
          <div className="md:hidden">
            <button className="text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;