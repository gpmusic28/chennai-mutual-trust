// src/components/ReviewsSection.tsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

type Review = {
  Name: string;
  Platform: string; // "Google" or "Trustpilot" (case-insensitive)
  Rating: string | number;
  Review: string;
  Date: string;
};

const SHEET_JSON_URL =
  "https://script.google.com/macros/s/AKfycbxmez3MBANABWcUIilEA8jgQE2wKEhGcqXpSJUjNz327TJIVMLYKCcLYW6_4mQuFtyS/exec";

const VIDEO_IDS = [
  "cI3YidsHVWc",
  "e4Tzh_MnO_s",
  "fZhJpqEGtSI"
];

const truncate = (text: string, limit = 220) =>
  text.length > limit ? text.slice(0, limit).trim() + "..." : text;

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ review: Review | null; type?: "review" | "video" }>(
    { review: null, type: "review" }
  );
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(SHEET_JSON_URL);
        const json = await res.json();
        const raw = json.reviews || json; // tolerate different shapes
        // normalize to Review[]
        const parsed: Review[] = (raw || [])
          .map((r: any) => ({
            Name: r.Name || r.name || "",
            Platform: (r.Platform || r.platform || "Google").trim(),
            Rating: r.Rating || r.rating || 5,
            Review: r.Review || r.review || "",
            Date: r.Date || r.date || "",
          }))
          .filter((r: Review) => r.Name && r.Review);
        if (!cancelled) setReviews(parsed);
      } catch (err) {
        console.error("Failed to fetch reviews", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchReviews();

    // optional: poll every 60s for updates (live-ish)
    const interval = setInterval(fetchReviews, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const openReviewModal = (r: Review) => {
    setModalContent({ review: r, type: "review" });
    setModalOpen(true);
  };

  const openVideoModal = (videoId: string) => {
    setActiveVideo(videoId);
    setModalContent({ review: null, type: "video" });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ review: null, type: "review" });
    setActiveVideo(null);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading (match your style) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why families across Chennai trust Shree Mutual Fund Services
          </p>
        </div>

        {/* Top: Video carousel */}
        <div className="max-w-5xl mx-auto mb-10">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            loop={true}
            effect="fade"
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="rounded-2xl overflow-hidden"
          >
            {VIDEO_IDS.map((id) => (
              <SwiperSlide key={id}>
                <div
                  className="relative group cursor-pointer"
                  onClick={() => openVideoModal(id)}
                >
                  {/* Use iframe muted autoplay/loop — YouTube requires playlist param for loop */}
                  <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&controls=0&playlist=${id}`}
                      title={`video-${id}`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-white/90 rounded-full p-4 shadow-lg">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom: mixed reviews carousel */}
        <div className="max-w-3xl mx-auto">
          {loading && <div className="text-center text-muted-foreground">Loading reviews...</div>}

          {!loading && reviews.length === 0 && (
            <div className="text-center text-muted-foreground">No reviews yet.</div>
          )}

          {!loading && reviews.length > 0 && (
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                navigation={{
                  nextEl: ".reviews-next",
                  prevEl: ".reviews-prev",
                } as any}
                onSwiper={(swiper) => {
                  // ensure navigation elements exist
                }}
                effect="fade"
                className="rounded-xl"
              >
                {reviews.map((r, idx) => {
                  const platform = (r.Platform || "").toLowerCase();
                  const rating = Number(r.Rating) || 5;
                  const isGoogle = platform.includes("google");
                  const starColor = isGoogle ? "text-yellow-500" : "text-green-500";

                  return (
                    <SwiperSlide key={idx}>
                      <Card className="p-6 border-0 shadow-lg rounded-2xl">
                        <CardContent className="p-0">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-lg font-semibold">{r.Name}</h4>
                                <p className="text-sm text-muted-foreground">{r.Date}</p>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className={`flex gap-1 ${starColor}`}>
                                  {Array.from({ length: rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                  ))}
                                </div>
                                {/* Platform label when Trustpilot (as requested show platform name) */}
                                {!isGoogle && (
                                  <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full">
                                    Trustpilot
                                  </span>
                                )}
                              </div>
                            </div>

                            <div
                              className="text-foreground leading-relaxed relative"
                              // clicking anywhere opens modal
                              onClick={() => openReviewModal(r)}
                              style={{ cursor: "pointer" }}
                            >
                              <p className="text-base">
                                {truncate(r.Review, 280)}
                              </p>

                              {/* Fade overlay if long */}
                              {r.Review && r.Review.length > 280 && (
                                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                              )}

                              {r.Review && r.Review.length > 280 && (
                                <div className="mt-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openReviewModal(r);
                                    }}
                                    className="text-sm text-primary font-medium hover:underline"
                                  >
                                    Read more
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Arrows */}
              <button
                className="reviews-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="reviews-next absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal (for both video and review) */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-end">
              <button onClick={closeModal} className="text-muted-foreground">Close</button>
            </div>

            {modalContent.type === "video" && activeVideo && (
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=0`}
                  title="video-player"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {modalContent.type === "review" && modalContent.review && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{modalContent.review.Name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{modalContent.review.Date}</p>
                <div className="mb-4 flex items-center gap-2">
                  {(() => {
                    const platform = (modalContent.review?.Platform || "").toLowerCase();
                    const rating = Number(modalContent.review?.Rating) || 5;
                    const isGoogle = platform.includes("google");
                    const starClass = isGoogle ? "text-yellow-500" : "text-green-500";
                    return (
                      <>
                        <div className={`flex gap-1 ${starClass}`}>
                          {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        {!isGoogle && (
                          <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full">
                            Trustpilot
                          </span>
                        )}
                      </>
                    );
                  })()}
                </div>
                <p className="text-foreground whitespace-pre-line">{modalContent.review.Review}</p>
                <div className="mt-6 text-right">
                  <button onClick={closeModal} className="px-4 py-2 bg-primary text-white rounded-lg">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
