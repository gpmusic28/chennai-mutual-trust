import shreeLogo from "@/assets/shree-logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={shreeLogo} alt="Shree Mutual Fund Services" className="h-12 w-14 brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">Shree Mutual Fund Services</h3>
                <p className="text-sm text-background/70">Chennai's Most Trusted</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your journey to smarter investing starts with trust and transparency. Building financial futures since 2009.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-background/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>4th Floor, A14, Thiru Vi Ka Industrial Estate,<br />Guindy, Chennai - 600032, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 98848 91111</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>connect@shreemfs.com</span>
              </div>
            </div>
          </div>

          {/* Compliance Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Compliance</h4>
            <div className="space-y-2 text-background/70 text-sm">
              <p> Shree Mutual Fund Services is an AMFI Registered Mutual Fund Distributor</p>
              <p>ARN: 174093 </p>
              <p className="text-xs pt-4">
                Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>© {currentYear} Shree Mutual Fund Services. All rights reserved.</p>
          <p className="mt-2">
            Designed with care for Chennai's financial well-being
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
