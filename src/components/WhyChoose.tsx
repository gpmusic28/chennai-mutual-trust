import { Shield, Users, FileCheck, MapPin } from "lucide-react";
import { ColorRevealText } from "@/hooks/useScrollColorReveal";

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Since 2009",
      description: "Over 15 years of building trust with Chennai families through transparent and ethical practices.",
      color: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "Tailored SIP Plans",
      description: "Customized investment strategies based on your unique financial goals and risk profile.",
      color: "from-accent to-primary",
    },
    {
      icon: FileCheck,
      title: "Transparent Process",
      description: "Complete clarity on fees, performance, and processes. No hidden charges, ever.",
      color: "from-primary to-accent",
    },
    {
      icon: MapPin,
      title: "Local Expertise in Chennai",
      description: "Deep understanding of Chennai market dynamics and personalized local service.",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Shree Mutual Fund Services?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with Chennai's most trusted mutual fund partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="leading-relaxed">
                  <ColorRevealText text={feature.description} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
