import { motion } from "framer-motion";
import { useColorContext } from "../../ContextApiFolder/ColorContext";

const HeroContent = ({ onOpen }) => {
  const { colorCode } = useColorContext();
  return (
    <>
      <section className="max-w-[1400px] w-[100%] flex justify-start gap-[1rem] m-auto p-[1rem]">
        <div className="w-[40rem]">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ "--colorCode": colorCode }}
            className={`relative text-[var(--colorCode)] font-playfair text-[70px] font-[600] tracking-[0.06rem]`}>
            Vanshaj Narayan Singh
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative text-[#18181b] text-[40px] font-[600] tracking-[0.1rem] font-playfair">
            Web Developer
          </motion.p>
          <div className="relative">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ "--colorCode": colorCode }}
              className="pointer-events-none text-[#18181b] mt-[0.6rem] font-serif font-[500] text-[1.1rem] tracking-[0.1rem]">
              <q>
                I am a
                <span className="text-[var(--colorCode)]"> web developer </span>
                specializing in crafting high-performance, user-centric web
                applications. With expertise in
                <span className="text-[var(--colorCode)]"> ReactJS</span>,
                <span className="text-[var(--colorCode)]"> JavaScript</span>,
                <span className="text-[var(--colorCode)]"> HTML</span>, and
                <span className="text-[var(--colorCode)]"> CSS</span> I deliver
                modern, responsive, and engaging digital experiences tailored to
                user needs.
              </q>
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="relative w-[fit-content] cursor-pointer">
            <button
              style={{ "--colorCode": colorCode }}
              className=" px-[1rem] py-[0.23rem] mr-[0.2rem] mt-[1.2rem] text-[1.2rem] rounded text-[#f9f9f9] font-[poppins] tracking-[0.13rem] font-[600] bg-[var(--colorCode)] hover:bg-[var(--colorCode)] transition duration-300 ease-in-out"
              onClick={onOpen}>
              About
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill={`${colorCode}`}
              className="w-[1.1rem] animate-bounce absolute top-[1.9rem] right-[-1.2rem] ">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroContent;
