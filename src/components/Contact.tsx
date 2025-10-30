import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Thank you! We’ve received your message.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    toast.error("Failed to send message. Try again later.");
    console.error(error);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your investment journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-2xl rounded-3xl bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-semibold mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base font-semibold mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your investment goals..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A14, Thiru Vi Ka Industrial Estate, SIDCO <br />
                    Guindy, Chennai - 600032<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    +91 98848 91111<br />
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    connect@shreemfs.com<br />
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:30 AM - 6:30 PM<br />
                    Saturday, Sunday: Closed<br />
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="overflow-hidden rounded-3xl border-0 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.6920230347403!2d80.2085787388358!3d13.01119819682698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677156976bed%3A0x3e25c2c424427f77!2sShree%20Mutual%20Fund%20Services!5e0!3m2!1sen!2sin!4v1761809399926!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Mutual Fund Services Location"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
