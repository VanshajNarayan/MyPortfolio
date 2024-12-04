import { Link } from "react-scroll";
import Wave from "./WaveImg.png";
import MantisWave from "./MantisWave.png";
import BrittanyBlueWave from "./BrittanyBlueWave.png";
import PinkSalmonWave from "./PinkSalmonWave.png";
import CyberYellowWave from "./CyberYellowWave.png";
import AmarnathRedWave from "./AmaranthRedWave.png";
import LevenderGrayWave from "./LavenderGrayWave.png";
import { useColorContext } from "../../ContextApiFolder/ColorContext";

const Footer = () => {
  // color code:-
  const { colorCode } = useColorContext();

  // set the background:-
  const backgroundWave = {
    backgroundImage:
      colorCode === "#1f8d93"
        ? `url(${Wave})`
        : colorCode === "#4bbc2c"
        ? `url(${MantisWave})`
        : colorCode === "#5581b5"
        ? `url(${BrittanyBlueWave})`
        : colorCode === "#fd8396"
        ? `url(${PinkSalmonWave})`
        : colorCode === "#ebbd00"
        ? `url(${CyberYellowWave})`
        : colorCode === "#ed0d62"
        ? `url(${AmarnathRedWave})`
        : colorCode === "#968ed5"
        ? `url(${LevenderGrayWave})`
        : `url(${Wave})`,
    backgroundSize: "1000px 100px",
  };
  return (
    <>
      <footer
        style={{ "--colorCode": colorCode }}
        className="bg-[var(--colorCode)] relative w-full px-[50px] py-[20px]">
        {/* waves */}
        <div className="waves">
          <div
            className="wave absolute top-[-100px] left-0 w-full h-[100px]"
            style={backgroundWave}></div>
          <div
            className="wave1 absolute top-[-100px] left-0 w-full h-[100px]"
            style={backgroundWave}></div>
          <div
            className="wave2 absolute top-[-100px] left-0 w-full h-[100px]"
            style={backgroundWave}></div>
          <div
            className="wave3 absolute top-[-100px] left-0 w-full h-[100px]"
            style={backgroundWave}></div>
        </div>

        {/* icons:- */}
        <div className="icons pt-[1.5rem] flex flex-row flex-wrap justify-center gap-[2rem]">
          {/* likedin svg */}
          <div className="align-middle">
            <a
              href="https://www.linkedin.com/in/Vanshaj-Narayan-Singh/"
              target="_blank"
              rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block w-[28px] fill-[#f5f7f7] mb-[1.5rem] cursor-pointer animate-bounce"
                viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
          </div>

          {/* github svg */}
          <div>
            <a
              href="https://github.com/VanshajNarayan"
              target="_blank"
              rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-[28px] fill-[#f5f7f7] mb-[1.5rem] cursor-pointer animate-bounce">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>

          {/* Email svg:- */}
          <div>
            <a
              href="mailto:vanshajnarayansingh@gmail.com"
              target="_blank"
              rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[28px] fill-[#f5f7f7] mb-[1.5rem] cursor-pointer animate-bounce">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </a>
          </div>

          {/* instagram svg:- */}
          <div>
            <a
              href="https://www.instagram.com/mr_vihaan_patel?igshid=YzAwZjE1ZTI0Zg%3D%3D"
              target="_blank"
              rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[28px] fill-[#f5f7f7] cursor-pointer animate-bounce">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* hr line */}
        <hr className="border-[1px] border-[#f5f7f7]" />

        {/* copyright:- */}
        <p className="text-[#f5f7f7] text-center mt-[1rem] font-serif tracking-[0.12rem]">
          Vanshaj Narayan Singh © 2025 - All Rights Reserved.
        </p>

        {/* logo */}
        <div className="mt-[1rem] w-full grid place-items-center text-[#f5f7f7]">
          <Link to="header" smooth={true} duration={1500}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="659.000000pt"
              height="420.000000pt"
              viewBox="0 0 659.000000 420.000000"
              preserveAspectRatio="xMidYMid meet"
              className="w-[8rem] h-[5rem] cursor-pointer">
              <title>Click to go to top</title>
              <g
                transform="translate(0.000000,420.000000) scale(0.100000,-0.100000)"
                fill="#f5f7f7"
                stroke="none">
                <path
                  d="M1660 3601 c0 -6 32 -77 71 -158 40 -81 98 -202 129 -268 32 -66 95
-196 140 -290 45 -93 106 -219 135 -280 58 -122 148 -308 250 -520 37 -77 98
-203 135 -280 37 -77 102 -212 145 -300 43 -88 106 -218 140 -290 34 -71 91
-188 125 -260 34 -71 93 -194 131 -272 68 -141 69 -143 101 -143 l33 0 548
1133 c301 622 619 1278 705 1457 l158 325 82 3 c45 2 82 1 82 -1 0 -5 -116
-245 -455 -942 -54 -110 -117 -240 -140 -290 -24 -49 -85 -178 -138 -285 -101
-209 -221 -456 -335 -690 -38 -80 -131 -270 -206 -424 -75 -153 -136 -280
-136 -282 0 -2 37 -4 83 -4 l83 0 131 273 c72 149 406 838 742 1530 336 692
611 1260 611 1262 0 3 -112 5 -250 5 l-250 0 -14 -32 c-8 -18 -65 -139 -129
-268 -63 -129 -141 -291 -175 -360 -33 -69 -95 -197 -137 -285 -43 -88 -110
-227 -150 -310 -118 -244 -296 -610 -515 -1060 -56 -115 -129 -265 -161 -333
-32 -67 -61 -122 -64 -122 -3 0 -23 37 -44 82 -21 46 -79 166 -128 268 -95
195 -513 1059 -877 1813 -119 246 -216 450 -216 452 0 3 113 4 251 3 211 -3
253 -5 261 -18 8 -15 159 -330 223 -465 18 -38 77 -160 130 -270 214 -441 353
-730 377 -785 l20 -45 45 90 44 90 -242 500 c-133 275 -301 624 -374 775
l-133 275 -421 3 c-268 1 -421 -1 -421 -7z"
                />
                <path
                  d="M4124 3493 c-31 -65 -129 -269 -217 -453 -88 -184 -183 -384 -212
-445 -98 -205 -182 -379 -270 -560 -147 -303 -227 -469 -236 -492 -5 -13 -12
-23 -17 -23 -4 0 -96 183 -204 408 -566 1173 -661 1368 -667 1375 -5 4 -44 7
-88 5 l-80 -3 55 -115 c31 -63 116 -238 189 -389 73 -150 133 -275 133 -276 0
-2 57 -119 126 -261 208 -427 304 -623 359 -739 29 -60 80 -166 113 -234 l60
-125 25 50 c23 45 688 1423 1004 2079 74 154 139 288 144 298 9 16 3 17 -75
17 l-85 0 -57 -117z"
                />
              </g>
            </svg>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
