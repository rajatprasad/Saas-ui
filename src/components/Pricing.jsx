import { useEffect, useRef } from "react";
import blackCheckMark from "../assets/Vector3.png";
import whiteCheckMark from "../assets/Vector4.png";

const useScrollReveal = (threshold = 0.1) => {
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

const freeFeatures = [
  "Up to 5 project members",
  "Unlimited tasks and projects",
  "2GB storage",
  "Integrations",
  "Basic support",
];

const proFeatures = [
  "Up to 50 project members",
  "Unlimited tasks and projects",
  "50GB storage",
  "Integrations",
  "Priority support",
  "Advanced support",
  "Export support",
];

const businessFeatures = [
  "Up to 5 project members",
  "Unlimited tasks and projects",
  "200GB storage",
  "Integrations",
  "Dedicated account manager",
  "Custom fields",
  "Advanced analytics",
  "Export capabilities",
  "API access",
  "Advanced security features",
];

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center mb-5">
    <img src={icon} alt="check" className="w-4 h-4 flex-shrink-0" />
    <p className="ml-3 text-sm">{text}</p>
  </div>
);

const Pricing = () => {
  const badgeRef   = useScrollReveal();
  const headingRef = useScrollReveal();
  const paraRef    = useScrollReveal();
  const freeRef    = useScrollReveal(0.05);
  const proRef     = useScrollReveal(0.05);
  const bizRef     = useScrollReveal(0.05);

  return (
    <>
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up.revealed { opacity: 1; transform: none; }

        .card-reveal {
          opacity: 0;
          transform: translateY(48px) scale(0.96);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .card-reveal.revealed { opacity: 1; transform: none; }

        .pricing-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease;
        }
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 64px rgba(24,62,194,0.14);
        }
        .pricing-card-pro:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 64px rgba(0,0,0,0.4);
        }

        .btn-animate {
          transition: transform 0.2s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-animate:hover  { transform: scale(1.03); }
        .btn-animate:active { transform: scale(0.97); }

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

        @keyframes badgePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(24,62,194,0); }
          50%      { box-shadow: 0 0 0 6px rgba(24,62,194,0.08); }
        }
        .pro-badge {
          animation: badgePulse 2.5s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col items-center px-4 sm:px-8 pb-24">
        <span
          ref={badgeRef}
          className="reveal-up text-center mt-20 lg:mt-40 px-4 py-1 text-sm border border-[#222222]/10 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm"
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

        <div className="mt-16 w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6">

          <div
            ref={freeRef}
            className="card-reveal w-full max-w-sm"
            style={{ transitionDelay: "0s" }}
          >
            <div className="pricing-card p-8 md:p-10 rounded-2xl shadow-xl bg-white border border-gray-100 h-full">
              <span className="text-[#6F6C90] text-sm font-medium">Free</span>
              <h1 className="my-4 font-bold text-5xl">
                $0
                <span className="text-sm font-normal text-[#6F6C90]"> /monthly</span>
              </h1>
              <button className="btn-animate mt-2 mb-8 w-full bg-black text-white rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer hover:bg-[#183EC2]">
                Get for free
              </button>
              {freeFeatures.map((f) => (
                <FeatureItem key={f} icon={blackCheckMark} text={f} />
              ))}
            </div>
          </div>

          <div
            ref={proRef}
            className="card-reveal w-full max-w-sm"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="pricing-card pricing-card-pro p-8 md:p-10 rounded-2xl shadow-2xl bg-black text-white relative overflow-hidden">
              {/* Glow blob */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#183EC2]/30 blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#6F6C90] text-sm font-medium">Pro</span>
                <span className="pro-badge text-xs bg-[#183EC2] text-white px-2.5 py-0.5 rounded-full font-semibold">
                  Popular
                </span>
              </div>
              <h1 className="my-4 font-bold text-5xl">
                $9
                <span className="text-sm font-normal text-[#6F6C90]"> /monthly</span>
              </h1>
              <button className="btn-animate mt-2 mb-8 w-full bg-white text-black rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer hover:bg-[#D2DCFF]">
                Sign up now
              </button>
              {proFeatures.map((f) => (
                <FeatureItem key={f} icon={whiteCheckMark} text={f} />
              ))}
            </div>
          </div>

          <div
            ref={bizRef}
            className="card-reveal w-full max-w-sm"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="pricing-card p-8 md:p-10 rounded-2xl shadow-xl bg-white border border-gray-100 h-full">
              <span className="text-[#6F6C90] text-sm font-medium">Business</span>
              <h1 className="my-4 font-bold text-5xl">
                $19
                <span className="text-sm font-normal text-[#6F6C90]"> /monthly</span>
              </h1>
              <button className="btn-animate mt-2 mb-8 w-full bg-black text-white rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer hover:bg-[#183EC2]">
                Sign up now
              </button>
              {businessFeatures.map((f) => (
                <FeatureItem key={f} icon={blackCheckMark} text={f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;