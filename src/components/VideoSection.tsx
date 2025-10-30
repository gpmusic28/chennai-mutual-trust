import { useRef } from "react";

const VIDEOS = [
  "https://www.youtube.com/embed/cI3YidsHVWc",
  "https://www.youtube.com/embed/e4Tzh_MnO_s",
  "https://www.youtube.com/embed/fZhJpqEGtSI"
];

const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Client Experiences
      </h2>

      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-6 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide"
      >
        {VIDEOS.map((url, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[90%] sm:w-[60%] md:w-[33%] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 mx-auto"
          >
            <iframe
              src={url + "?mute=1&enablejsapi=1"}
              title={`Video ${i + 1}`}
              className="w-full h-64 sm:h-80 md:h-[400px] rounded-2xl"
              allow="autoplay; encrypted-media"
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
