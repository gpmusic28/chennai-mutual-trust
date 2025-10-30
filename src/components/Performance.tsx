import { useEffect, useState, useRef } from "react";
import { Users, TrendingUp, Award, Building } from "lucide-react";

const Performance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      end: 5000,
      suffix: "+",
      label: "Clients Served",
      color: "from-primary to-accent",
    },
    {
      icon: TrendingUp,
      end: 50000,
      suffix: "+",
      label: "SIPs Managed",
      color: "from-accent to-primary",
    },
    {
      icon: Building,
      end: 500,
      suffix: "Cr+",
      label: "Total AUM",
      prefix: "₹",
      color: "from-primary to-accent",
    },
    {
      icon: Award,
      end: 15,
      suffix: "+",
      label: "Years of Excellence",
      color: "from-accent to-primary",
    },
  ];

  const Counter = ({
    end,
    duration = 2000,
    prefix = "",
    suffix = "",
  }: {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
      <span>
        {prefix}
        {count.toLocaleString("en-IN")}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Track Record
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Numbers that reflect our commitment to your financial success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-3">
                <Counter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-lg text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
