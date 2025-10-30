import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { TextReveal } from "@/hooks/useScrollTextReveal";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <TrendingUp className="absolute top-32 left-[15%] w-8 h-8 text-primary/20 animate-float" />
        <Shield className="absolute top-48 right-[20%] w-10 h-10 text-accent/20 animate-float" style={{ animationDelay: "1s" }} />
        <Users className="absolute bottom-32 left-[25%] w-9 h-9 text-primary/20 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimatedSection animation="fade" delay={0}>
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Chennai's Most Trusted
              </span>
            </div>
          </AnimatedSection>

          <TextReveal 
            as="h1"
            text="Chennai's Most Trusted Mutual Fund Distributor"
            className="text-5xl md:text-7xl font-bold leading-tight"
          />

          <AnimatedSection animation="slide-up" delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your journey to smarter investing starts with trust and transparency.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-glow hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your SIP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("calculators")}
                className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Explore Calculators
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust Indicators */}
          <AnimatedSection animation="fade" delay={600}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
              <div className="text-center space-y-2 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center space-y-2 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center space-y-2 hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary">₹500Cr+</div>
                <div className="text-sm text-muted-foreground">AUM Managed</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
