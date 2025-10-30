import { Target, Award, Heart, TrendingUp } from "lucide-react";
import { TextReveal } from "@/hooks/useScrollTextReveal";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedSection animation="slide-right" delay={100}>
                <TextReveal 
                  as="p"
                  text="At Shree Mutual Fund Services, we are dedicated to empowering individuals and families in Chennai to achieve their financial goals through smart and strategic mutual fund investments."
                  className="text-lg leading-relaxed"
                />
              </AnimatedSection>
              
              <AnimatedSection animation="slide-right" delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 15 years of experience in the financial services industry, we have built a reputation as Chennai's most trusted mutual fund distributor. Our team of expert advisors brings deep market knowledge, personalized service, and unwavering commitment to transparency.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-right" delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that every investor's journey is unique. That's why we take the time to understand your financial aspirations, risk tolerance, and investment horizon to create customized SIP and lumpsum investment strategies that align perfectly with your goals.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-right" delay={400}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're planning for your child's education, buying your dream home, building a retirement corpus, or simply growing your wealth, we're here to guide you every step of the way with trust, expertise, and care.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <AnimatedSection animation="scale" delay={100}>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Goal-Focused</h3>
                  <p className="text-muted-foreground text-sm">
                    Every investment strategy is aligned with your specific financial goals
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={200}>
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 mt-8">
                  <Award className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Trusted Experts</h3>
                  <p className="text-muted-foreground text-sm">
                    15+ years of proven track record in Chennai's financial market
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={300}>
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Client-First</h3>
                  <p className="text-muted-foreground text-sm">
                    Your financial well-being is our top priority, always
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale" delay={400}>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 mt-8">
                  <TrendingUp className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Growth Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    Strategies designed for consistent long-term wealth creation
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
