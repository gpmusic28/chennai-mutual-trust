import { useState, useRef } from "react";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
];

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleMouseEnter = (index: number) => {
    videoRefs.current[index]?.play();
  };

  const handleMouseLeave = (index: number) => {
    videoRefs.current[index]?.pause();
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  return (
    <section className="w-full bg-gray-50 py-10">
      <div
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
      >
        {videos.map((src, index) => (
          <div
            key={index}
            className="snap-center flex-none w-1/3 px-4 transition-transform duration-300"
          >
            <div
              className={`relative rounded-2xl overflow-hidden shadow-lg border ${
                index === activeIndex ? "scale-105" : "scale-95 opacity-70"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el!)}
                src={src}
                muted
                playsInline
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {videos.map((_, i) => (
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
