import { useEffect, useRef, useState } from "react";

export const useScrollColorReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
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

interface ColorRevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const ColorRevealText = ({ text, className = "", as = "p" }: ColorRevealTextProps) => {
  const { ref, progress } = useScrollColorReveal();
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        const wordProgress = Math.max(0, Math.min(1, (progress - index / words.length) * words.length));
        
        // Interpolate from light gray (hsl(20 10% 70%)) to foreground (hsl(20 14% 20%))
        const lightness = 70 - (wordProgress * 50); // 70% to 20%
        const saturation = 10 + (wordProgress * 4); // 10% to 14%
        
        return (
          <span
            key={index}
            className="inline-block transition-all duration-300"
            style={{
              color: `hsl(20 ${saturation}% ${lightness}%)`,
            }}
          >
            {word}{index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </div>
  );
};
