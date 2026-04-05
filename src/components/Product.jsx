import { useEffect, useRef } from "react";
import productImage from "../assets/ProductImage.png";
import pyramid from "../assets/pyramid1.png";
import torus from "../assets/torus1.png";
import target from "../assets/target.png";
import bell from "../assets/bell.png";
import lock from "../assets/lock.png";
import leaf from "../assets/leaf.png";
import ProductItem from "./ProductItem";

const useScrollReveal = (threshold = 0.12) => {
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
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const features = [
  { icon: leaf,   heading: "Integration ecosystem",      text: "Track your progress and motivate your efforts everyday." },
  { icon: target, heading: "Goal setting and tracking",  text: "Set and track goals with manageable task breakdowns." },
  { icon: lock,   heading: "Secure data encryption",     text: "Ensure your data's safety with top-tier encryption." },
  { icon: bell,   heading: "Customizable notifications", text: "Get alerts on tasks and deadlines that matter most." },
];

const AnimatedItem = ({ icon, heading, text, delay }) => {
  const ref = useScrollReveal(0.1);
  return (
    <div ref={ref} className="reveal-up" style={{ transitionDelay: delay }}>
      <ProductItem icon={icon} heading={heading} text={text} />
    </div>
  );
};

const Product = () => {
  const badgeRef   = useScrollReveal();
  const headingRef = useScrollReveal();
  const paraRef    = useScrollReveal();
  const imageRef   = useScrollReveal(0.05);

  return (
    <>
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up.revealed {
          opacity: 1;
          transform: none;
        }
        .reveal-scale {
          opacity: 0;
          transform: scale(0.93) translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-scale.revealed {
          opacity: 1;
          transform: none;
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-left.revealed {
          opacity: 1;
          transform: none;
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-right.revealed {
          opacity: 1;
          transform: none;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-16px) rotate(3deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(-4deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .gradient-text {
          background: linear-gradient(90deg, #000, #001354, #183EC2, #001354, #000);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .float-pyramid { animation: float 5s ease-in-out infinite; }
        .float-torus   { animation: floatReverse 6s ease-in-out infinite 0.8s; }
        .product-img-glow {
          filter: drop-shadow(0 20px 60px rgba(24,62,194,0.18));
          transition: filter 0.4s ease;
        }
        .product-img-glow:hover {
          filter: drop-shadow(0 28px 80px rgba(24,62,194,0.28));
        }
      `}</style>

      <div className="bg-linear-to-b from-white to-[#D2DCFF] flex flex-col items-center px-4 sm:px-8 pb-20 overflow-hidden">

        <span
          ref={badgeRef}
          className="reveal-up text-center mt-20 sm:mt-28 lg:mt-40 px-4 py-1 text-sm border border-[#222222]/10 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm"
        >
          Boost your productivity
        </span>

        <h2
          ref={headingRef}
          className="reveal-up gradient-text text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 max-w-xs sm:max-w-md md:max-w-2xl leading-tight"
          style={{ transitionDelay: "0.1s" }}
        >
          A more effective way to track progress
        </h2>

        <p
          ref={paraRef}
          className="reveal-up text-center max-w-sm md:max-w-lg text-[#010D3E]/80 mt-6 leading-relaxed text-sm sm:text-base"
          style={{ transitionDelay: "0.2s" }}
        >
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>

        <div className="relative flex items-center justify-center w-full max-w-4xl mt-10">
          <img
            src={pyramid}
            alt="pyramid"
            className="float-pyramid absolute left-0 sm:-left-6 lg:-left-16 top-1/2 -translate-y-1/2 hidden sm:block w-16 md:w-20 lg:w-28 z-10 drop-shadow-xl"
          />

          <div ref={imageRef} className="reveal-scale w-full px-12 sm:px-16 lg:px-24">
            <img
              src={productImage}
              alt="product-image"
              className="product-img-glow w-full rounded-2xl"
            />
          </div>

          <img
            src={torus}
            alt="torus"
            className="float-torus absolute right-0 sm:-right-6 lg:-right-16 top-1/2 -translate-y-1/2 hidden sm:block w-16 md:w-20 lg:w-28 z-10 drop-shadow-xl"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 w-full max-w-6xl">
          {features.map(({ icon, heading, text }, i) => (
            <AnimatedItem
              key={heading}
              icon={icon}
              heading={heading}
              text={text}
              delay={`${i * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;