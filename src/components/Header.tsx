import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import shreeLogo from "@/assets/shree-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={shreeLogo} alt="Shree Mutual Fund Services" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-foreground leading-tight">
                Shree Mutual Fund Services
              </h1>
              <p className="text-xs text-muted-foreground">Chennai's Most Trusted</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("calculators")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Calculators
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
