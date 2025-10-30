// src/components/ReviewsSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const reviews = [
  {
    name: "Arun Kumar",
    review:
      "Fantastic experience! The Shree Mutual Fund team guided me perfectly for my long-term SIPs.",
  },
  {
    name: "Priya S",
    review:
      "Professional service and complete transparency. Highly recommend for anyone starting their investment journey!",
  },
  {
    name: "Suresh R",
    review:
      "I've been investing with them for years — consistent returns and timely advice. Very trustworthy.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-secondary/20 to-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-primary">Client Reviews</h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-card rounded-2xl p-10 mx-4 hover:shadow-lg transition-shadow">
                <p className="text-lg text-muted-foreground italic mb-4">
                  “{item.review}”
                </p>
                <p className="text-primary font-semibold">— {item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
