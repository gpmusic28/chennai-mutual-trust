"use client";

import { motion } from "framer-motion";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const videos = [
  { id: "hY7m5jjJ9mM", title: "Investor Success Story 1" },
  { id: "M7lc1UVf-VE", title: "Investor Success Story 2" },
  { id: "ysz5S6PUM-U", title: "Investor Success Story 3" },
];

export default function VideoSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextIndex = (index: number) => (index + 1) % videos.length;
  const prevIndex = (index: number) =>
    (index - 1 + videos.length) % videos.length;

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          🎬 Real Investor Stories
        </h2>
        <p className="text-gray-600 mt-2">
          Watch what our happy investors have to say about Shree Mutual Fund
          Services
        </p>
      </div>

      <div className="relative flex justify-center items-center">
        {/* Back Left */}
        <motion.div
          className="absolute w-64 sm:w-80 opacity-50 scale-75"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: -150, opacity: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <YouTube videoId={videos[prevIndex(current)].id} opts={{ width: "100%", height: "180" }} />
        </motion.div>

        {/* Center Main */}
        <motion.div
          className="z-10 w-80 sm:w-[420px] shadow-xl rounded-2xl overflow-hidden border-4 border-orange-400"
          key={videos[current].id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <YouTube videoId={videos[current].id} opts={{ width: "100%", height: "230" }} />
        </motion.div>

        {/* Back Right */}
        <motion.div
          className="absolute w-64 sm:w-80 opacity-50 scale-75"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 150, opacity: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <YouTube videoId={videos[nextIndex(current)].id} opts={{ width: "100%", height: "180" }} />
        </motion.div>
      </div>
    </section>
  );
}
