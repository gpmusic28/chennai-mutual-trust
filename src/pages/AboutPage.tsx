import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
