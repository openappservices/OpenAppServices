import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/generated_images/Modern_tech_company_logo_5eea7bc7.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
              <img 
                src={logoPath} 
                alt="Open App Services" 
                className="w-6 h-6 text-white"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Network className="w-6 h-6 text-white hidden" />
            </div>
            <span className="text-xl font-semibold text-white">
              Open App Services
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-primary-green transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-300 hover:text-primary-green transition-colors"
              data-testid="nav-benefits"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-primary-green transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-primary-green transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary-green hover:bg-emerald-600 px-6 py-2 rounded-lg font-medium transition-all btn-glow"
              data-testid="nav-consultation-cta"
            >
              Free Consultation
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 mt-2 py-4"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-primary-green transition-colors text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-300 hover:text-primary-green transition-colors text-left"
                data-testid="mobile-nav-benefits"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-primary-green transition-colors text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-primary-green transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary-green hover:bg-emerald-600 w-full mt-4"
                data-testid="mobile-consultation-cta"
              >
                Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
