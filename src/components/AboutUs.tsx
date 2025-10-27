import { Target, Award, Heart, TrendingUp } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground leading-relaxed">
                At <span className="font-semibold text-primary">Shree Mutual Fund Services</span>, we are dedicated to empowering individuals and families in Chennai to achieve their financial goals through smart and strategic mutual fund investments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience in the financial services industry, we have built a reputation as Chennai's most trusted mutual fund distributor. Our team of expert advisors brings deep market knowledge, personalized service, and unwavering commitment to transparency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that every investor's journey is unique. That's why we take the time to understand your financial aspirations, risk tolerance, and investment horizon to create customized SIP and lumpsum investment strategies that align perfectly with your goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're planning for your child's education, buying your dream home, building a retirement corpus, or simply growing your wealth, we're here to guide you every step of the way with trust, expertise, and care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Goal-Focused</h3>
                <p className="text-muted-foreground text-sm">
                  Every investment strategy is aligned with your specific financial goals
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Trusted Experts</h3>
                <p className="text-muted-foreground text-sm">
                  15+ years of proven track record in Chennai's financial market
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Client-First</h3>
                <p className="text-muted-foreground text-sm">
                  Your financial well-being is our top priority, always
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Growth Driven</h3>
                <p className="text-muted-foreground text-sm">
                  Strategies designed for consistent long-term wealth creation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
