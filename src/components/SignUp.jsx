import { useEffect, useRef } from "react";
import vector from "../assets/Vector2.png";
import star from "../assets/emojistar1.png";
import helix from "../assets/helix2.png";

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

const SignUp = () => {
  const headingRef = useScrollReveal();
  const paraRef    = useScrollReveal();
  const btnsRef    = useScrollReveal();

  return (
    <>
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up.revealed { opacity: 1; transform: none; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .gradient-text {
          background: linear-gradient(90deg,#000,#001354,#183EC2,#001354,#000);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        @keyframes floatStar {
          0%,100% { transform: translateY(0px) rotate(0deg) scale(1); }
          40%      { transform: translateY(-18px) rotate(8deg) scale(1.05); }
          70%      { transform: translateY(-8px) rotate(-4deg) scale(0.97); }
        }
        @keyframes floatHelix {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-14px) rotate(-6deg); }
        }
        .float-star  { animation: floatStar  5s ease-in-out infinite; }
        .float-helix { animation: floatHelix 6s ease-in-out infinite 1s; }

        @keyframes decalEntrance {
          0%   { opacity: 0; transform: translateY(30px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }
        .decal-enter {
          animation: decalEntrance 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }
        .decal-enter-left  { animation-delay: 0.2s; }
        .decal-enter-right { animation-delay: 0.45s; }

        .btn-primary {
          transition: transform 0.2s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-primary:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          background: #183EC2;
        }
        .btn-primary:active { transform: scale(0.97); }

        .btn-secondary {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-secondary:hover { background: rgba(0,0,0,0.05); transform: scale(1.03); }
        .btn-secondary:active { transform: scale(0.97); }
        .btn-secondary:hover .arrow-icon { transform: translateX(4px); }
        .arrow-icon { transition: transform 0.2s ease; }
      `}</style>

      <div className="pb-20 pt-16 bg-linear-to-b from-white to-[#D2DCFF] flex items-center justify-center gap-6 sm:gap-10 px-4">

        <img
          src={star}
          alt="star"
          className="decal-enter decal-enter-left float-star hidden lg:block  self-start relative -top-30 drop-shadow-lg"
        />

        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl">
          <h1
            ref={headingRef}
            className="reveal-up gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Sign up for free today
          </h1>

          <p
            ref={paraRef}
            className="reveal-up text-[#010D3E]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto"
            style={{ transitionDelay: "0.1s" }}
          >
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <div
            ref={btnsRef}
            className="reveal-up flex flex-wrap items-center justify-center gap-3"
            style={{ transitionDelay: "0.2s" }}
          >
            <button className="btn-primary bg-black text-white rounded-2xl px-6 py-2.5 text-sm font-medium cursor-pointer">
              Get for free
            </button>
            <button className="btn-secondary rounded-2xl px-4 py-2.5 text-sm font-medium text-[#010D3E] cursor-pointer">
              <span className="flex items-center gap-1">
                <p className="px-1">Learn more</p>
                <img src={vector} alt="button-arrow" className="arrow-icon w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        <img
          src={helix}
          alt="helix"
          className="decal-enter decal-enter-right float-helix hidden lg:block  self-end relative -bottom-20 drop-shadow-lg"
        />
      </div>
    </>
  );
};

export default SignUp;