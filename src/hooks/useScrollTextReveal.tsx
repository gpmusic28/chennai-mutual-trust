import { useEffect, useRef, useState } from "react";

export const useScrollTextReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start revealing when element enters viewport
      const startReveal = windowHeight * 0.8;
      const endReveal = windowHeight * 0.2;
      
      let scrollProgress = 0;
      
      if (elementTop < startReveal && elementTop + elementHeight > 0) {
        scrollProgress = Math.min(
          Math.max((startReveal - elementTop) / (startReveal - endReveal), 0),
          1
        );
      }
      
      setProgress(scrollProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { ref, progress };
};

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const TextReveal = ({ text, className = "", as = "p" }: TextRevealProps) => {
  const { ref, progress } = useScrollTextReveal();
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        const wordProgress = Math.max(0, Math.min(1, (progress - index / words.length) * words.length));
        
        return (
          <span
            key={index}
            className="inline-block transition-all duration-300"
            style={{
              opacity: 0.3 + wordProgress * 0.7,
              filter: `blur(${(1 - wordProgress) * 4}px)`,
              transform: `translateY(${(1 - wordProgress) * 10}px)`,
            }}
          >
            {word}{index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </div>
  );
};
