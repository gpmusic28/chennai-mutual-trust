// src/components/VideoSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videos = [
  "cI3YidsHVWc", // Video 1
  "e4Tzh_MnO_s", // Video 2
  "fZhJpqEGtSI", // Video 3
];

const VideoSection = () => {
  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-b from-white to-secondary/30 text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-primary">
        Our Financial Insights
      </h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {videos.map((id, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video rounded-xl overflow-hidden shadow-card hover:scale-105 transition-transform duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSection;
