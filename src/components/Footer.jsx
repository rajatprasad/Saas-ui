import logo from "../assets/logosaas.png";
import insta from "../assets/Socials.png";
import youtube from "../assets/Socials-1.png";
import ticktok from "../assets/Socials-2.png";
import pintrest from "../assets/Socials-3.png";
import x from "../assets/Socials-4.png";
import linkdin from "../assets/Socials-5.png";

const Footer = () => {
  return (
    <div className="bg-black p-6 flex flex-wrap justify-between items-center">
      <div className="flex flex-col w-70">
        <div className="mt-6">
          <img className="cursor-pointer" src={logo} alt="logo" />
          <p className="text-white/60 mt-4">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </p>
        </div>
        <div className="mt-16 mb-6 flex items-center justify-between">
          <img className="cursor-pointer" src={x} alt="" />
          <img className="cursor-pointer" src={insta} alt="" />
          <img className="cursor-pointer" src={pintrest} alt="" />
          <img className="cursor-pointer" src={linkdin} alt="" />
          <img className="cursor-pointer" src={ticktok} alt="" />
          <img className="cursor-pointer" src={youtube} alt="" />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap">
        <div className="text-white/60 ml-8 flex flex-col">
          <p className="text-white font-bold mb-4">Product</p>
          <p className="mb-4 cursor-pointer">Features</p>
          <p className="mb-4 cursor-pointer">Integrations</p>
          <p className="mb-4 cursor-pointer">Updates</p>
          <p className="mb-4 cursor-pointer">FAQ</p>
          <p className="mb-4 cursor-pointer">Pricing</p>
        </div>
        <div className="text-white/60 ml-10 flex flex-col">
          <p className="text-white font-bold mb-4">Company</p>
          <p className="mb-4 cursor-pointer">About</p>
          <p className="mb-4 cursor-pointer">Blog</p>
          <p className="mb-4 cursor-pointer">Careers</p>
          <p className="mb-4 cursor-pointer">Manifesto</p>
          <p className="mb-4 cursor-pointer">Press</p>
          <p className="mb-4 cursor-pointer">Contact</p>
        </div>
        <div className="text-white/60 ml-10 flex flex-col">
          <p className="text-white font-bold mb-4">Resources</p>
          <p className="mb-4 cursor-pointer">Examples</p>
          <p className="mb-4 cursor-pointer">Community</p>
          <p className="mb-4 cursor-pointer">Guides</p>
          <p className="mb-4 cursor-pointer">Docs</p>
        </div>
        <div className="text-white/60 ml-10 flex flex-col">
          <p className="text-white font-bold mb-4">Legal</p>
          <p className="mb-4 cursor-pointer">Privacy</p>
          <p className="mb-4 cursor-pointer">Terms</p>
          <p className="mb-4 cursor-pointer">Security</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
