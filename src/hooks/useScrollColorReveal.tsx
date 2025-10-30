import { useEffect, useRef, useState } from "react";

export const useScrollColorReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start revealing when element enters viewport, complete when it reaches center
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.3;
      
      if (elementTop > start) {
        setProgress(0);
      } else if (elementTop < end) {
        setProgress(1);
      } else {
        const range = start - end;
        const current = start - elementTop;
        setProgress(current / range);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { ref, progress };
};

export const ColorRevealText = ({ text, className = "" }: { text: string; className?: string }) => {
  const { ref, progress } = useScrollColorReveal();
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => {
        const wordProgress = Math.max(0, Math.min(1, (progress * words.length - index) / 1));
        const opacity = 0.4 + (wordProgress * 0.6);
        
        return (
          <span
            key={index}
            style={{
              opacity,
              transition: "opacity 0.3s ease-out",
            }}
          >
            {word}{index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
};
