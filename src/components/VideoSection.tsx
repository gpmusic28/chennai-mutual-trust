import { useState, useRef } from "react";

const VIDEO_IDS = ["cI3YidsHVWc", "e4Tzh_MnO_s", "fZhJpqEGtSI"];

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Watch What Our Clients Say
      </h2>

      <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide px-4"
        onScroll={handleScroll}
      >
        {VIDEO_IDS.map((id, index) => (
          <div
            key={index}
            className="snap-center flex-none w-full md:w-1/3 px-4 transition-transform duration-300"
          >
            <div
              className={`relative overflow-hidden rounded-2xl shadow-lg border ${
                index === activeIndex ? "scale-105" : "scale-95 opacity-70"
              }`}
            >
              <div className="aspect-video w-full overflow-hidden group">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?mute=1&enablejsapi=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
                  title={`Client Video ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {VIDEO_IDS.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === activeIndex ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
