import { useState } from "react";
import CursorTrail from "../CursorAnimationFolder/CursorTrail";
import About from "../Modals/About";
import HeroContent from "./HeroContent";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";
import ColorSwitcher from "../ColorSwitcherFolder/ColorSwitcher";
import { useColorContext } from "../../ContextApiFolder/ColorContext";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorCode } = useColorContext();
  return (
    <>
      <Element name="header">
        <section>
          <Navbar open={isOpen} />
          <CursorTrail />
          <div className="sm:flex mt-[7rem]">
            <ColorSwitcher />
            <HeroContent onOpen={() => setIsOpen(true)} />
            <SocialIcons />
          </div>
          <About open={isOpen} onClose={() => setIsOpen(false)} />
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="relative grid place-items-center mt-[5.3rem]">
            <Link to="project" smooth={true} duration={1000}>
              <button
                style={{ "--colorCode": colorCode }}
                className={`px-[1rem] relative py-[0.23rem] focus:outline-none mt-[1.2rem] text-[1.2rem] rounded text-[#f9f9f9] font-[poppins] tracking-[0.13rem] font-[600] bg-[var(--colorCode)] hover:bg-[var(--colorCode)]] transition duration-300 ease-in-out`}>
                Latest Work
              </button>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill={`${colorCode}`}
              className="w-[1.5rem] h-[1.5rem] animate-bounce mt-[0.7rem]">
              <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
            </svg>
          </motion.div>
        </section>
      </Element>
    </>
  );
};

export default Hero;
