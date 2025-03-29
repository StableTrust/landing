import { useState, useEffect, useRef } from "react";

const stats = [
  {
    value: 50,
    label: "亿美元",
    description: "已数字化资产总价值",
  },
  {
    value: 100,
    label: "+",
    description: "成功客户案例",
  },
  {
    value: 25,
    label: "+",
    description: "全球合作伙伴",
  },
  {
    value: 99.9,
    label: "%",
    description: "系统稳定性",
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // animation duration in ms
    const frameDuration = 1000 / 60; // duration of one frame at 60fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const countUp = () => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = easeOutQuad(progress);

      const newCounts = stats.map((stat, index) => {
        const increment = Math.min(stat.value * easedProgress, stat.value);
        return Number.isInteger(stat.value) ? Math.floor(increment) : Number(increment.toFixed(1));
      });

      setCounts(newCounts);

      if (frame < totalFrames) {
        requestAnimationFrame(countUp);
      }
    };

    requestAnimationFrame(countUp);
  }, [isVisible]);

  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t);

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">我们的成果</h2>
          <p className="text-lg font-opensans max-w-3xl mx-auto">
            StableTrust 通过区块链技术，已成功为全球客户提供高效、安全的 RWA 解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 rounded-lg">
              <div className="flex justify-center items-end space-x-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold font-montserrat">
                  {counts[index]}
                </span>
                <span className="text-2xl md:text-3xl font-semibold font-montserrat">
                  {stat.label}
                </span>
              </div>
              <p className="text-lg font-opensans">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
