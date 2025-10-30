import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyChoose from "@/components/WhyChoose";
import Calculators from "@/components/Calculators";
import Performance from "@/components/Performance";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <WhyChoose />
      <Calculators />
      <Performance />
      <Testimonials /> {/* ✅ Keep only one review section */}
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
