import Header from "@/components/Header";
import Calculators from "@/components/Calculators";
import Footer from "@/components/Footer";

const CalculatorsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Calculators />
      </div>
      <Footer />
    </div>
  );
};

export default CalculatorsPage;
