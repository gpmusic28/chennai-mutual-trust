import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-up": {
      initial: { opacity: 0, transform: "translateY(50px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    "slide-left": {
      initial: { opacity: 0, transform: "translateX(50px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    "slide-right": {
      initial: { opacity: 0, transform: "translateX(-50px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    scale: {
      initial: { opacity: 0, transform: "scale(0.9)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
  };

  const { initial, animate } = animations[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(!isVisible ? initial : animate),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
