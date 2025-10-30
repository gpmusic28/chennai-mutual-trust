import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import AboutUs from "@/components/AboutUs";
import WhyChoose from "@/components/WhyChoose";
import Calculators from "@/components/Calculators";
import Performance from "@/components/Performance";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection /> {/* 👈 YouTube videos right below hero */}
      <AboutUs />
      <WhyChoose />
      <Calculators />
      <Performance />
      <Testimonials />
      <CTA />
      <Contact />
      <ReviewsSection /> {/* 👈 Reviews at the bottom */}
      <Footer />
    </div>
  );
};

export default Index;
