import { useEffect, useRef } from "react";
import vector from "../assets/Vector2.png";
import visual from "../assets/visual.png";
import cylinder from "../assets/cylinder.png";
import halfTorus from "../assets/half-torus.png";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = el.dataset.animate === "slide-up"
        ? "translateY(32px)"
        : el.dataset.animate === "slide-left"
        ? "translateX(-40px)"
        : el.dataset.animate === "slide-right"
        ? "translateX(40px)"
        : "scale(0.92)";
      el.style.transition = `opacity 0.7s ease, transform 0.7s ease`;
      el.style.transitionDelay = `${i * 0.1}s`;

      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "none";
        }, 60);
      });
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between  bg-linear-to-bl from-[#EAEEFE] via-[#EAEEFE] to-[#183EC2] px-6 sm:px-10 md:px-16 py-16 gap-10"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#183EC2]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#4F6EF7]/10 blur-3xl animate-pulse [animation-delay:1.5s]" />
      </div>

      <div className="relative z-10 flex flex-col max-w-xl w-full">
        <span
          data-animate="slide-up"
          className="border border-[#222222]/15 rounded-xl px-4 py-1 text-sm w-fit bg-white/40 backdrop-blur-sm mb-4 shadow-sm"
        >
          Version 2.0 is here
        </span>

        <h1
          data-animate="slide-up"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight bg-linear-to-r from-black to-[#001354] bg-clip-text text-transparent mb-6"
        >
          Pathway to productivity
        </h1>

        <p
          data-animate="slide-up"
          className="text-[#010D3E]/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
        >
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>

        <div data-animate="slide-up" className="flex flex-wrap items-center gap-3">
          <button className="relative bg-black text-white rounded-2xl px-6 py-3 font-medium text-sm overflow-hidden group cursor-pointer transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10">Get for free</span>
            <span className="absolute inset-0 bg-linear-to-r from-[#183EC2] to-[#001354] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </button>

          <button className="flex items-center gap-1 rounded-2xl px-4 py-3 font-medium text-sm text-[#010D3E] hover:bg-white/30 transition-all duration-200 cursor-pointer group">
            <span>Learn more</span>
            <img
              src={vector}
              alt="button-arrow"
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center w-full lg:w-auto">
        <img
          data-animate="slide-left"
          src={cylinder}
          alt="cylinder"
          className="absolute hidden lg:block -left-40 -top-1 drop-shadow-xl animate-[float_4s_ease-in-out_infinite]"
        />

        <img
          data-animate="scale"
          src={visual}
          alt="visual"
          className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl hover:scale-[1.02] duration-500 animate-[visualEntrance_0.9s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]"
        />

        <img
          data-animate="slide-right"
          src={halfTorus}
          alt="half-torus"
          className="absolute hidden lg:block z-10 -right-6 -bottom-60 drop-shadow-xl animate-[float_5s_ease-in-out_infinite_1s]"
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes visualEntrance {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.88) rotateX(8deg);
            filter: blur(8px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          80% {
            transform: translateY(-8px) scale(1.02) rotateX(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1) rotateX(0deg);
            filter: blur(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;