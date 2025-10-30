import React, { useState } from "react";

const videos = [
  { id: 1, url: "https://www.youtube.com/embed/cI3YidsHVWc" },
  { id: 2, url: "https://www.youtube.com/embed/e4Tzh_MnO_s" },
  { id: 3, url: "https://www.youtube.com/embed/fZhJpqEGtSI" },
];

const VideoSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">
        Our Clients Speak
      </h2>
      <div className="flex justify-center gap-6 overflow-x-auto px-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`relative flex-shrink-0 w-[300px] h-[180px] rounded-xl overflow-hidden transition-transform duration-300 ${
              hovered === video.id ? "scale-105" : "scale-95 opacity-70"
            }`}
            onMouseEnter={() => setHovered(video.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <iframe
              width="300"
              height="180"
              src={`${video.url}?autoplay=${hovered === video.id ? 1 : 0
                }&mute=1&controls=0&loop=1`}
              title={`video-${video.id}`}
              allow="autoplay; encrypted-media"
              className="rounded-xl"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
