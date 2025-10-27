import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "T. Nagar, Chennai",
      rating: 5,
      text: "Shree Mutual Fund Services transformed my understanding of systematic investments. Their personalized approach helped me build a substantial corpus for my daughter's education. The team is professional, transparent, and genuinely cares about client success.",
      investment: "SIP Investor since 2018",
    },
    {
      name: "Priya Venkatesh",
      location: "Adyar, Chennai",
      rating: 5,
      text: "I was skeptical about mutual funds until I met the Shree team. They patiently explained every detail and created a customized plan for my retirement. Five years later, I'm amazed at the growth. Best financial decision I ever made!",
      investment: "Retirement Planning Client",
    },
    {
      name: "Sundar Raman",
      location: "Anna Nagar, Chennai",
      rating: 5,
      text: "What sets Shree apart is their local presence and understanding of Chennai families. They don't just sell funds; they educate and empower. My entire family now invests through them. Highly recommended!",
      investment: "Family Wealth Management",
    },
    {
      name: "Kavitha Subramanian",
      location: "Velachery, Chennai",
      rating: 5,
      text: "Started my SIP journey with just ₹3,000 per month on their advice. Today, after 7 years, I have a portfolio worth over ₹6 lakhs! Their goal-based planning approach really works. Thank you, Shree team!",
      investment: "SIP Investor since 2017",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See why families across Chennai trust Shree Mutual Fund Services
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-card to-secondary/30">
                    <CardContent className="p-12">
                      <Quote className="w-16 h-16 text-primary/20 mb-6" />
                      
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                        ))}
                      </div>

                      <p className="text-xl text-foreground leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center justify-between border-t border-border pt-6">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {testimonial.location}
                          </p>
                          <p className="text-sm text-primary font-semibold">
                            {testimonial.investment}
                          </p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
