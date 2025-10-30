"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Swiper imports (for latest version)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Replace this Google Apps Script URL with your live sheet endpoint
    fetch("https://script.google.com/macros/s/AKfycbxmez3MBANABWcUIilEA8jgQE2wKEhGcqXpSJUjNz327TJIVMLYKCcLYW6_4mQuFtyS/exec")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const videos = [
    { id: "cI3YidsHVWc", title: "Client Story: How SIP Built My Wealth" },
    { id: "e4Tzh_MnO_s", title: "Retirement Success Journey" },
    { id: "fZhJpqEGtSI", title: "From Beginner to Investor" },
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See why families across Chennai trust Shree Mutual Fund Services
          </p>
        </div>

        {/* 🎥 Video Testimonials */}
        <div className="mb-20">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            loop
            spaceBetween={30}
            className="max-w-5xl mx-auto"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-gradient-to-br from-card to-secondary/30">
                  <div className="relative aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-xl">{video.title}</h4>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🌟 Reviews Section */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all rounded-3xl bg-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{review.Name}</h4>
                    <p className="text-sm text-muted-foreground">{review.Date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(Number(review.Rating))].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          review.Platform === "Google"
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-green-500 text-green-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-4">
                  {review.Review}
                </p>
                <p className="text-xs text-primary mt-4 font-semibold">
                  {review.Platform}
                </p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <Button
            variant="outline"
            size="icon"
            className="swiper-button-prev rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="swiper-button-next rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
