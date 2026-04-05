import { useState, useEffect, useRef } from "react";
import logo from "../assets/logosaas.png";

const NAV_LINKS = ["About", "Features", "Customers", "Updates", "Help"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-[#EAEEFE] flex justify-between items-center py-4 px-4 sm:px-8 relative z-50">
        <div>
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex items-center text-black/60 gap-1">
          {NAV_LINKS.map((link) => (
            <div
              key={link}
              className="px-4 py-2 cursor-pointer rounded-lg hover:text-black hover:bg-black/5 transition-all duration-200 text-sm font-medium"
            >
              {link}
            </div>
          ))}
          <div className="pl-3">
            <button className="bg-black text-white rounded-2xl px-5 py-2 text-sm font-medium cursor-pointer hover:bg-[#183EC2] transition-colors duration-300 active:scale-95">
              Get for free
            </button>
          </div>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-black/5 transition-colors duration-200 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black rounded-full transition-all duration-300 my-1 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-[#EAEEFE] shadow-2xl z-50 md:hidden flex flex-col pt-20 pb-8 px-6 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-xl hover:bg-black/10 transition-colors cursor-pointer text-black/60 hover:text-black"
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => (
            <div
              key={link}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-black/70 hover:text-black font-medium rounded-xl hover:bg-black/5 cursor-pointer transition-all duration-200"
              style={{
                transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.35s ease ${i * 60}ms, transform 0.35s ease ${i * 60}ms, background 0.2s`,
              }}
            >
              {link}
            </div>
          ))}
        </nav>

        <div
          className="mt-6 px-4"
          style={{
            transitionDelay: isOpen ? `${NAV_LINKS.length * 60}ms` : "0ms",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(12px)",
            transition: `opacity 0.35s ease ${NAV_LINKS.length * 60}ms, transform 0.35s ease ${NAV_LINKS.length * 60}ms`,
          }}
        >
          <button className="w-full bg-black text-white rounded-2xl px-5 py-3 text-sm font-medium cursor-pointer hover:bg-[#183EC2] transition-colors duration-300 active:scale-95">
            Get for free
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;