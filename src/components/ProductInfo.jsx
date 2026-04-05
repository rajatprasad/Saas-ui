import { useEffect, useRef } from "react";
import cubeHelix1 from "../assets/cube-helix1.png";
import cubeHelix2 from "../assets/cube-helix2.png";

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const cards = [
  {
    img: cubeHelix2,
    alt: "cube-helix",
    title: "Integration ecosystem",
    desc: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    delay: "0.1s",
    from: "left",
  },
  {
    img: cubeHelix1,
    alt: "cube-helix",
    title: "Goal setting and tracking",
    desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    delay: "0.25s",
    from: "right",
  },
];

const ProductInfo = () => {
  const badgeRef = useScrollReveal();
  const headingRef = useScrollReveal();
  const paraRef = useScrollReveal();

  return (
    <>
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up.revealed,
        .reveal-left.revealed,
        .reveal-right.revealed {
          opacity: 1;
          transform: none;
        }
        .card-hover {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 60px rgba(24, 62, 194, 0.12);
        }
        .card-img {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .card-hover:hover .card-img {
          transform: scale(1.07) rotate(-1deg);
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gradient-text {
          background: linear-gradient(90deg, #000, #001354, #183EC2, #001354, #000);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-text-animate {
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <div className="flex flex-col items-center px-4 sm:px-8">
        {/* Badge */}
        <span
          ref={badgeRef}
          className="reveal-up text-center mt-20 sm:mt-28 lg:mt-40 px-4 py-1 text-sm border border-[#222222]/10 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm"
          style={{ transitionDelay: "0s" }}
        >
          Everything you need
        </span>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="reveal-up gradient-text gradient-text-animate text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 max-w-xs sm:max-w-md md:max-w-2xl leading-tight"
          style={{ transitionDelay: "0.1s" }}
        >
          Streamlined for easy management
        </h2>

        {/* Paragraph */}
        <p
          ref={paraRef}
          className="reveal-up text-center max-w-xs sm:max-w-sm lg:max-w-md text-[#010D3E]/80 mt-6 leading-relaxed text-sm sm:text-base"
          style={{ transitionDelay: "0.2s" }}
        >
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-6 mt-12 mb-16 w-full max-w-4xl">
          {cards.map(({ img, alt, title, desc, delay, from }) => {
            const cardRef = useScrollReveal();
            return (
              <div
                key={title}
                ref={cardRef}
                className={`reveal-${from} card-hover flex-1 min-w-[260px] max-w-sm flex flex-col items-center rounded-2xl shadow-lg bg-white/70 backdrop-blur-sm p-8 sm:p-10`}
                style={{ transitionDelay: delay }}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="card-img w-full max-w-[180px] sm:max-w-[200px]"
                    src={img}
                    alt={alt}
                  />
                </div>
                <h4 className="mt-5 text-xl sm:text-2xl font-bold text-center gradient-text max-w-xs">
                  {title}
                </h4>
                <p className="text-center text-[#010D3E]/75 mt-3 text-sm sm:text-base leading-relaxed max-w-xs">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductInfo;