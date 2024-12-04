import React from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { useColorContext } from "../../ContextApiFolder/ColorContext";

const About = ({ open, children, onClose }) => {
  const { colorCode } = useColorContext();
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="w-[100%] h-screen absolute inset-0 bg-[#f5f5f5d8]" />
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        style={{ "--colorCode": colorCode }}
        className="border-[3px] z-50 border-[var(--colorCode)] rounded-[1rem] text-[var(--colorCode)] bg-[#f5f5f5] absolute top-[0.2%] md:top-[0.2%] xl:top-[0.5%] 2xl:top-[2%] left-0 xl:left-[2%] 2xl:left-[13%] p-[2rem] max-w-[70rem] w-[100%] h-[fit-content]">
        <div className="w-[fit-content] ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-[1.4rem] cursor-pointer"
            onClick={onClose}>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </div>
        {/* about content */}
        <div className="flex flex-col lg:flex-row justify-between mt-[1rem] gap-[2rem]">
          {/* text part */}
          <div>
            <h2 className="font-playfair text-[var(--colorCode)] text-[38px] font-[600] tracking-[0.14rem]">
              ABOUT ME
            </h2>
            <p className="text-[#18181b] mt-[0.6rem] font-serif font-[500] text-[1.1rem] tracking-[0.1rem] ">
              I develop Website as a Frontend Developer and I known something
              about backend development, how to implement backend with frontend
              and build the webiste. I design and develop creative website that
              fits their vision and attracts the visitors to stay for ever.
              Technologies and tools that i use to create such awesome websites.
            </p>
            {/* Technologies:- */}
            <div className="my-[1rem] flex flex-wrap gap-[1.3rem] ">
              {/* js:- */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] relative text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  JavaScript
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  90%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* react js */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  ReactJs
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  85%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* redux */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  Redux
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  50%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* html */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  Html
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  85%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* css */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  Css
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  85%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* tailwind css:- */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  Tailwind css
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  70%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* Nodejs */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  NodeJs
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  40%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* Terminal */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  Terminal
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  70%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* mongodb */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  MongoDB
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  60%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
              {/* expressjs */}
              <div className="relative group">
                <span className="border-[3px] text-[0.9rem] border-[var(--colorCode)] text-[#18181b] cursor-pointer mr-[0.5rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                  ExpressJs
                </span>
                <div className="absolute bottom-[15%] z-[-1] group-hover:z-10 jump group-hover:bottom-[160%] left-[30%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] text-[#fff] bg-[var(--colorCode)] rounded px-[14px] py-[8px]">
                  40%
                  <div className="w-[15px] h-[15px] bg-[var(--colorCode)] absolute right-[40%] rotate-45"></div>
                </div>
              </div>
            </div>
            {/* download buttons */}
            <div className="mt-[1.7rem] relative w-[fit-content]">
              <a
                href="./MyResume.pdf"
                download={true}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-[12px] text-[1rem] text-[#f5f5f5] bg-[var(--colorCode)] hover:bg-[var(--colorCode)] transition-all ease-in-out cursor-pointer tracking-[0.13rem] font-[fontplayfair] pb-[12px] pr-[35px] px-[20px] rounded-lg">
                Resume
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="downarrow"
                className="w-[1.2rem] cursor-pointer animate-bounce absolute top-[30%] right-[4%]">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                  d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"
                  fill="#f5f5f5"
                  className="color000000 svgShape"></path>
              </svg>
            </div>
          </div>
          {/* image part */}
          <div className="xl:w-[160rem] relative">
            <img
              src="./PhotoCutoutPro.png"
              alt="My Album"
              className="w-[100%] max-w-[30rem] rounded-[90%] bg-[var(--colorCode)] sm:-translate-x-[3%]  xl:translate-x-[18%] object-cover object-center border-dotted border-2 border-[#f5f7f7]  sm:max-w-[30rem] lg:w-[20rem] xl:w-[22rem] mt-[1rem]"
            />
            <div className="blob w-[100%] h-[100%] absolute left-0 top-[-6%] z-[-1]">
              <svg
                viewBox="0 0 490 450"
                width="100%"
                height="100%"
                id="blobClip"
                className="w-[20rem] lg:w-[30rem] md:w-[30rem] xl:w-[35rem] -translate-x-[20%] sm:-translate-x-[5%] xl:-translate-x-[4%] lg:-translate-x-[20%]">
                <path fill={`${colorCode}`}>
                  <animate
                    attributeName="d"
                    dur="20000ms"
                    repeatCount="indefinite"
                    values="
                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;

                  M445.5,292.5Q397,335,378,387Q359,439,304.5,459Q250,479,193,463Q136,447,123,389Q110,331,84.5,290.5Q59,250,89.5,212.5Q120,175,138.5,132Q157,89,203.5,91Q250,93,308.5,70Q367,47,388.5,102Q410,157,452,203.5Q494,250,445.5,292.5Z;

                  M431.5,303.5Q436,357,400,402Q364,447,307,446Q250,445,210,416.5Q170,388,137.5,361Q105,334,68,292Q31,250,63,205.5Q95,161,134.5,139.5Q174,118,212,71.5Q250,25,299,53Q348,81,395,110Q442,139,434.5,194.5Q427,250,431.5,303.5Z;

                  M444,305Q440,360,397,395Q354,430,302,420Q250,410,212,396Q174,382,131.5,362.5Q89,343,81.5,296.5Q74,250,55,188.5Q36,127,91.5,99.5Q147,72,198.5,77.5Q250,83,299.5,80.5Q349,78,389,112Q429,146,438.5,198Q448,250,444,305Z;

                  M427,302.5Q432,355,384,376.5Q336,398,293,428.5Q250,459,208.5,426Q167,393,106,380.5Q45,368,66.5,309Q88,250,75.5,196Q63,142,102,101Q141,60,195.5,34Q250,8,311.5,22.5Q373,37,409,87Q445,137,433.5,193.5Q422,250,427,302.5Z;

                  M407,294Q403,338,364.5,360Q326,382,288,408.5Q250,435,193.5,440Q137,445,115,392.5Q93,340,74.5,295Q56,250,59,195.5Q62,141,109.5,115Q157,89,203.5,68Q250,47,301,60Q352,73,396,106.5Q440,140,425.5,195Q411,250,407,294Z;

                  M453.5,301.5Q429,353,377.5,367Q326,381,288,437.5Q250,494,194.5,468.5Q139,443,101,400.5Q63,358,67,304Q71,250,84,206Q97,162,126.5,124Q156,86,203,58Q250,30,296.5,59.5Q343,89,377,123Q411,157,444.5,203.5Q478,250,453.5,301.5Z;

                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;
                  "></animate>
                </path>
              </svg>
            </div>
            <div className="blob w-[100%] h-[100%] absolute left-0 top-[-6%] z-[-1]">
              <svg
                viewBox="0 0 490 450"
                width="100%"
                height="100%"
                id="blobClip">
                <path fill={`${colorCode}`}>
                  <animate
                    attributeName="d"
                    dur="20000ms"
                    repeatCount="indefinite"
                    values="
                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;

                  M445.5,292.5Q397,335,378,387Q359,439,304.5,459Q250,479,193,463Q136,447,123,389Q110,331,84.5,290.5Q59,250,89.5,212.5Q120,175,138.5,132Q157,89,203.5,91Q250,93,308.5,70Q367,47,388.5,102Q410,157,452,203.5Q494,250,445.5,292.5Z;

                  M431.5,303.5Q436,357,400,402Q364,447,307,446Q250,445,210,416.5Q170,388,137.5,361Q105,334,68,292Q31,250,63,205.5Q95,161,134.5,139.5Q174,118,212,71.5Q250,25,299,53Q348,81,395,110Q442,139,434.5,194.5Q427,250,431.5,303.5Z;

                  M444,305Q440,360,397,395Q354,430,302,420Q250,410,212,396Q174,382,131.5,362.5Q89,343,81.5,296.5Q74,250,55,188.5Q36,127,91.5,99.5Q147,72,198.5,77.5Q250,83,299.5,80.5Q349,78,389,112Q429,146,438.5,198Q448,250,444,305Z;

                  M427,302.5Q432,355,384,376.5Q336,398,293,428.5Q250,459,208.5,426Q167,393,106,380.5Q45,368,66.5,309Q88,250,75.5,196Q63,142,102,101Q141,60,195.5,34Q250,8,311.5,22.5Q373,37,409,87Q445,137,433.5,193.5Q422,250,427,302.5Z;

                  M407,294Q403,338,364.5,360Q326,382,288,408.5Q250,435,193.5,440Q137,445,115,392.5Q93,340,74.5,295Q56,250,59,195.5Q62,141,109.5,115Q157,89,203.5,68Q250,47,301,60Q352,73,396,106.5Q440,140,425.5,195Q411,250,407,294Z;

                  M453.5,301.5Q429,353,377.5,367Q326,381,288,437.5Q250,494,194.5,468.5Q139,443,101,400.5Q63,358,67,304Q71,250,84,206Q97,162,126.5,124Q156,86,203,58Q250,30,296.5,59.5Q343,89,377,123Q411,157,444.5,203.5Q478,250,453.5,301.5Z;

                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;
                  "></animate>
                </path>
              </svg>
            </div>
            <div className="blob w-[100%] h-[100%] absolute left-0 top-[-6%] z-[-1]">
              <svg
                viewBox="0 0 490 450"
                width="100%"
                height="100%"
                id="blobClip">
                <path fill={`${colorCode}`}>
                  <animate
                    attributeName="d"
                    dur="20000ms"
                    repeatCount="indefinite"
                    values="
                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;

                  M445.5,292.5Q397,335,378,387Q359,439,304.5,459Q250,479,193,463Q136,447,123,389Q110,331,84.5,290.5Q59,250,89.5,212.5Q120,175,138.5,132Q157,89,203.5,91Q250,93,308.5,70Q367,47,388.5,102Q410,157,452,203.5Q494,250,445.5,292.5Z;

                  M431.5,303.5Q436,357,400,402Q364,447,307,446Q250,445,210,416.5Q170,388,137.5,361Q105,334,68,292Q31,250,63,205.5Q95,161,134.5,139.5Q174,118,212,71.5Q250,25,299,53Q348,81,395,110Q442,139,434.5,194.5Q427,250,431.5,303.5Z;

                  M444,305Q440,360,397,395Q354,430,302,420Q250,410,212,396Q174,382,131.5,362.5Q89,343,81.5,296.5Q74,250,55,188.5Q36,127,91.5,99.5Q147,72,198.5,77.5Q250,83,299.5,80.5Q349,78,389,112Q429,146,438.5,198Q448,250,444,305Z;

                  M427,302.5Q432,355,384,376.5Q336,398,293,428.5Q250,459,208.5,426Q167,393,106,380.5Q45,368,66.5,309Q88,250,75.5,196Q63,142,102,101Q141,60,195.5,34Q250,8,311.5,22.5Q373,37,409,87Q445,137,433.5,193.5Q422,250,427,302.5Z;

                  M407,294Q403,338,364.5,360Q326,382,288,408.5Q250,435,193.5,440Q137,445,115,392.5Q93,340,74.5,295Q56,250,59,195.5Q62,141,109.5,115Q157,89,203.5,68Q250,47,301,60Q352,73,396,106.5Q440,140,425.5,195Q411,250,407,294Z;

                  M453.5,301.5Q429,353,377.5,367Q326,381,288,437.5Q250,494,194.5,468.5Q139,443,101,400.5Q63,358,67,304Q71,250,84,206Q97,162,126.5,124Q156,86,203,58Q250,30,296.5,59.5Q343,89,377,123Q411,157,444.5,203.5Q478,250,453.5,301.5Z;

                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;
                  "></animate>
                </path>
              </svg>
            </div>
            <div className="blob w-[100%] h-[100%] absolute left-0 top-[-6%] z-[-1]">
              <svg
                viewBox="0 0 490 450"
                width="100%"
                height="100%"
                id="blobClip">
                <path fill={`${colorCode}`}>
                  <animate
                    attributeName="d"
                    dur="20000ms"
                    repeatCount="indefinite"
                    values="
                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;

                  M445.5,292.5Q397,335,378,387Q359,439,304.5,459Q250,479,193,463Q136,447,123,389Q110,331,84.5,290.5Q59,250,89.5,212.5Q120,175,138.5,132Q157,89,203.5,91Q250,93,308.5,70Q367,47,388.5,102Q410,157,452,203.5Q494,250,445.5,292.5Z;

                  M431.5,303.5Q436,357,400,402Q364,447,307,446Q250,445,210,416.5Q170,388,137.5,361Q105,334,68,292Q31,250,63,205.5Q95,161,134.5,139.5Q174,118,212,71.5Q250,25,299,53Q348,81,395,110Q442,139,434.5,194.5Q427,250,431.5,303.5Z;

                  M444,305Q440,360,397,395Q354,430,302,420Q250,410,212,396Q174,382,131.5,362.5Q89,343,81.5,296.5Q74,250,55,188.5Q36,127,91.5,99.5Q147,72,198.5,77.5Q250,83,299.5,80.5Q349,78,389,112Q429,146,438.5,198Q448,250,444,305Z;

                  M427,302.5Q432,355,384,376.5Q336,398,293,428.5Q250,459,208.5,426Q167,393,106,380.5Q45,368,66.5,309Q88,250,75.5,196Q63,142,102,101Q141,60,195.5,34Q250,8,311.5,22.5Q373,37,409,87Q445,137,433.5,193.5Q422,250,427,302.5Z;

                  M407,294Q403,338,364.5,360Q326,382,288,408.5Q250,435,193.5,440Q137,445,115,392.5Q93,340,74.5,295Q56,250,59,195.5Q62,141,109.5,115Q157,89,203.5,68Q250,47,301,60Q352,73,396,106.5Q440,140,425.5,195Q411,250,407,294Z;

                  M453.5,301.5Q429,353,377.5,367Q326,381,288,437.5Q250,494,194.5,468.5Q139,443,101,400.5Q63,358,67,304Q71,250,84,206Q97,162,126.5,124Q156,86,203,58Q250,30,296.5,59.5Q343,89,377,123Q411,157,444.5,203.5Q478,250,453.5,301.5Z;

                  M437,301.5Q429,353,395,398Q361,443,305.5,453.5Q250,464,210.5,425.5Q171,387,124.5,368Q78,349,63,299.5Q48,250,74,206.5Q100,163,119.5,110Q139,57,194.5,52.5Q250,48,309,47Q368,46,406,92Q444,138,444.5,194Q445,250,437,301.5Z;
                  "></animate>
                </path>
              </svg>
            </div>
          </div>
        </div>
        {children}
      </motion.section>
    </>,
    document.getElementById("portal")
  );
};

export default About;
