import { useEffect, useRef } from "react";
import UsersCard from "./UsersCard";
import ellipse from "../assets/Ellipse.png";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import ellipse3 from "../assets/Ellipse3.png";
import ellipse4 from "../assets/Ellipse4.png";
import ellipse5 from "../assets/Ellipse5.png";
import ellipse6 from "../assets/Ellipse6.png";
import ellipse7 from "../assets/Ellipse7.png";
import ellipse8 from "../assets/Ellipse8.png";

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

const columns = [
  [
    { text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.", image: ellipse,  name: "Alex Rivera",   username: "@jamietechguru00" },
    { text: "Our team's productivity has skyrocketed since we started using this tool.",                                    image: ellipse1, name: "Josh Smith",    username: "@jjsmith" },
    { text: "This app has completely transformed how I manage my projects and deadlines.",                                  image: ellipse2, name: "Morgan Lee",    username: "@morganleewhiz" },
  ],
  [
    { text: "I was amazed at how quickly we were able to integrate this app into our workflow.",                            image: ellipse3, name: "Casey Jordan",  username: "@caseyj" },
    { text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.", image: ellipse4, name: "Taylor Kim", username: "@taylorkimm" },
    { text: "The customizability and integration capabilities of this app are top-notch.",                                  image: ellipse5, name: "Riley Smith",   username: "@rileysmith1" },
  ],
  [
    { text: "Adopting this app for our team has streamlined our project management and improved communication across the board.", image: ellipse6, name: "Jordan Patels", username: "@jpatelsdesign" },
    { text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",            image: ellipse7, name: "Sam Dawson",    username: "@dawsontechtips" },
    { text: "Its user-friendly interface and robust features support our diverse needs.",                                   image: ellipse8, name: "Casey Harper",  username: "@casey09" },
  ],
];

const AnimatedCard = ({ text, image, name, username, delay }) => {
  const ref = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className="reveal-card"
      style={{ transitionDelay: delay }}
    >
      <UsersCard text={text} image={image} name={name} username={username} />
    </div>
  );
};

const Testimonials = () => {
  const badgeRef = useScrollReveal();
  const headingRef = useScrollReveal();

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
        .reveal-card {
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-card.revealed {
          opacity: 1;
          transform: none;
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
      `}</style>

      <div className="mt-24 sm:mt-28 lg:mt-8 mb-24 md:mb-40 flex flex-col items-center justify-center px-4 sm:px-8">
        <span
          ref={badgeRef}
          className="reveal-up text-center px-4 py-1 text-sm border border-[#222222]/10 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm"
        >
          Testimonials
        </span>

        <h2
          ref={headingRef}
          className="reveal-up gradient-text text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 max-w-xs sm:max-w-md md:max-w-2xl leading-tight"
          style={{ transitionDelay: "0.1s" }}
        >
          What our users say
        </h2>

        <div className="mt-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {columns.map((col, ci) =>
            col.map((card, ri) => (
              <AnimatedCard
                key={card.username}
                {...card}
                delay={`${(ci * 0.1 + ri * 0.08).toFixed(2)}s`}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Testimonials;