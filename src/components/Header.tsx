import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import shreeLogo from "@/assets/shree-logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

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
          <Link to="/" className="flex items-center gap-3">
            <img src={shreeLogo} alt="Shree Mutual Fund Services" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-foreground leading-tight">
                Shree Mutual Fund Services
              </h1>
              <p className="text-xs text-muted-foreground">Chennai's Most Trusted</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/calculators"
              className={`text-sm font-medium transition-colors ${
                isActive("/calculators") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Calculators
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive("/blog") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
