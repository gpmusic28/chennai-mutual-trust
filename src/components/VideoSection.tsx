"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/SxP7ES8i3Q8",
  "https://www.youtube.com/embed/_xDxxHOXZoc",
  "https://www.youtube.com/embed/91Pn7_h9C5I",
];

export default function VideoSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        Client Video Testimonials
      </h2>

      <div className="relative w-full flex justify-center items-center">
        {videos.map((video, index) => {
          const offset = (index - current + videos.length) % videos.length;
          const isActive = offset === 0;

          const transformClass =
            offset === 0
              ? "z-30 scale-100"
              : offset === 1
              ? "z-20 scale-75 -translate-x-40"
              : "z-10 scale-75 translate-x-40";

          return (
            <motion.div
              key={video}
              className={`absolute rounded-2xl shadow-lg transition-all duration-700 ${transformClass}`}
              whileHover={{ scale: 1.05 }}
            >
              <iframe
                src={`${video}?autoplay=1&mute=1&loop=1&playlist=${video.split("/").pop()}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`testimonial-${index}`}
                className="rounded-2xl"
                style={{
                  width: isActive ? "480px" : "320px",
                  height: isActive ? "270px" : "180px",
                  opacity: isActive ? 1 : 0.6,
                  transition: "all 0.7s ease",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
