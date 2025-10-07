import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/footer-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img 
              src={logo} 
              alt="Erel Electric Logo" 
              className="h-[145px] w-auto object-contain"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com/erelelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com/erel_lighting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/80 text-sm">
            <p>&copy; {new Date().getFullYear()} Erel Electric. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
