import { Element } from "react-scroll";
import { useColorContext } from "../../ContextApiFolder/ColorContext";

const Project = () => {
  const { colorCode } = useColorContext();
  return (
    <>
      <Element name="project">
        <section className="vieworhideonscroll mt-[3rem] w-[100%]">
          {/* project heading */}
          <div
            className="grid place-content-center"
            style={{ "--colorCode": colorCode }}>
            <h2 className="border-[2px] border-[var(--colorCode)] px-[30px] border-t-0 w-[fit-content] text-[var(--colorCode)] text-[40px] font-[600] tracking-[0.18rem] font-[playfair]">
              Projects
            </h2>
          </div>
          {/* second box */}
          <div className="relative pb-[1rem]">
            {/* project-1 */}

            <div className="relative flex flex-col md:flex-row sm:gap-[1em] md:gap-[5em] sm items-center mb-[2rem] max-w-[1700px] w-[100%] m-auto">
              {/* line */}
              <div className="md:h-[2px] left-1/4 right-1/2 bg-[#7b48dc] absolute top-1/2"></div>

              {/* circle */}
              <div className="md:w-4 md:h-4 cursor-pointer rounded-full md:border-[4px] hover:scale-110 ease-in-out duration-200 border-[#7b48dc] bg-[#fff] z-10 absolute left-1/2 top-[47.8%] -translate-x-1/2"></div>

              {/* img part */}
              <div className="w-[100%] cursor-pointer group mt-[2rem] relative">
                <img
                  src="./ProjectImg/Ecommerce.png"
                  alt="Ecommerce website"
                  className="md:w-[22rem] lg:w-[26rem] xl:w-[28rem] hover:scale-105 ease-in-out duration-200 lg:z-20 relative"
                />
                <a
                  href="https://vanshajshoppingsite.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="flex gap-1 pb-[0.8rem] tracking-[0.1rem] font-serif bg-[#7b48dc] absolute -top-[0] ease-jump duration-200 group-hover:-top-[3.9rem]  left-[14rem] -translate-x-1/2 cursor-pointer text-[#fff] items-center px-4 py-[0.6rem] opacity-0 group-hover:opacity-100 rounded-[0.3rem] w-[fit-content]">
                    Ecommerce
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      id="External"
                      className="w-[0.7rem]">
                      <g
                        fill="none"
                        stroke="#fff"
                        className="colorStroke000000 svgStroke">
                        <path
                          d="M16 11v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M13 1h6v6M8 12 19 1"
                          // fill="#1c6cc9"
                          className="color000000 svgShape"></path>
                      </g>
                    </svg>
                    <span className="w-[15px] h-[15px] bg-[#7b48dc] rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
                  </span>
                </a>
              </div>

              {/* text part */}

              <div className="mt-[2rem] w-[100%] p-[1.2rem]">
                <h3 className="text-[#7b48dc] text-[40px] font-[playfair] font-[600] tracking-[0.1rem]">
                  Ecommerce
                </h3>
                <span className="text-[24px] font-[Montserrat] text-[#7b48dc] font-[500] tracking-[0.1rem]">
                  (For Shopping)
                </span>
                <p className="text-[#18181b] mt-[0.6rem] font-serif font-[500] text-[1.1rem] sm:text-[1rem] tracking-[0.1rem]">
                  Eye-catching banner section. The Product categories displayed
                  in a grid format.Dynamic product cards with hover effects.
                  Filters for category, price range, and ratings.Detailed view
                  with image, price, and description. Interactive "Add to Cart"
                  button.Displays added items with quantities and price
                  calculation. Option to update or remove items.Fully optimized
                  for mobile, tablet, and desktop screens.
                </p>
                {/* tools use */}
                <div className="mt-[1rem] mb-[1rem] gap-[1rem] flex flex-wrap">
                  <span className="border-[2px] border-[#7b48dc] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Reactjs
                  </span>
                  <span className="border-[2px] border-[#7b48dc] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Css
                  </span>
                  <span className="border-[2px] border-[#7b48dc] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Html
                  </span>
                  <span className="border-[2px] border-[#7b48dc] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Javascript
                  </span>
                </div>
              </div>
            </div>

            {/* project 2 */}
            <div className="relative flex flex-col-reverse md:flex-row sm:gap-[1em] md:gap-[5em] sm items-center mb-[2rem] max-w-[1600px] w-[100%] m-auto">
              {/* text part */}
              <div className="mt-[2rem] w-[100%] p-[1.2rem]">
                <h3 className="text-[#c25555] text-[40px] font-[playfair] font-[600] tracking-[0.07rem]">
                  Music
                </h3>
                <span className="text-[24px] font-[Montserrat] text-[#c25555] font-[500] tracking-[0.08rem]">
                  (For Listening Music)
                </span>
                <p className="text-[#18181b] mt-[0.6rem] font-serif font-[500] text-[1.1rem] sm:text-[1rem] tracking-[0.1rem]">
                  Attractive hero section with trending songs or
                  playlists.Organized layout for music genres and artist
                  categories.Dynamic list of songs with album art, titles, and
                  artist details. Search and filter options for easy
                  navigation.Interactive music player with controls for play,
                  pause, next, and previous. Real-time progress bar and volume
                  adjustment.Playlist details with song counts and durations.
                </p>

                {/* tools use */}
                <div className="mt-[1rem] mb-[1rem] gap-[1rem] flex flex-wrap">
                  <span className="border-[2px] border-[#c25555] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Reactjs
                  </span>
                  <span className="border-[2px] border-[#c25555] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Css
                  </span>
                  <span className="border-[2px] border-[#c25555] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Html
                  </span>
                  <span className="border-[2px] border-[#c25555] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Javascript
                  </span>
                </div>
              </div>

              {/* line */}
              <div className="md:h-[2px] right-1/4 left-1/2 bg-[#c25555] absolute top-1/2"></div>

              {/* circle */}
              <div className="md:w-4 md:h-4 cursor-pointer rounded-full md:border-[4px] hover:scale-110 ease-in-out duration-200 border-[#c25555] bg-[#fff] z-10 absolute left-1/2 top-[47.8%] -translate-x-1/2"></div>

              {/* img part */}
              <div className="cursor-pointer w-[100%] group relative mt-[2rem]">
                <img
                  src="./ProjectImg/Music.png"
                  alt="Music website"
                  className="md:w-[22rem] lg:w-[26rem] xl:w-[28rem] hover:scale-105 ease-in-out duration-200 z-20 relative"
                />
                <a
                  href="https://vanshajmusicplayer.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="flex gap-1 pb-[0.8rem] tracking-[0.1rem] font-serif bg-[#c25555] absolute -top-[0] ease-jump duration-200 group-hover:-top-[3.9rem] left-[14rem] -translate-x-1/2 cursor-pointer text-[#fff] items-center px-4 py-[0.6rem] opacity-0 group-hover:opacity-100 rounded-[0.3rem] w-[fit-content]">
                    Music
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      id="External"
                      className="w-[0.7rem]">
                      <g
                        fill="none"
                        stroke="#fff"
                        className="colorStroke000000 svgStroke">
                        <path
                          d="M16 11v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M13 1h6v6M8 12 19 1"
                          // fill="#1c6cc9"
                          className="color000000 svgShape"></path>
                      </g>
                    </svg>
                    <span className="w-[15px] h-[15px] bg-[#c25555] rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
                  </span>
                </a>
              </div>
            </div>

            {/* project 3 */}
            <div className="relative flex flex-col md:flex-row sm:gap-[1em] md:gap-[5em] sm items-center mb-[2rem] max-w-[1700px] w-[100%] m-auto">
              {/* line */}
              <div className="md:h-[2px] left-1/4 right-1/2 bg-[#3bb1c8] absolute top-1/2"></div>

              {/* circle */}
              <div className="md:w-4 md:h-4 cursor-pointer rounded-full md:border-[4px] hover:scale-110 ease-in-out duration-200 border-[#3bb1c8] bg-[#fff] z-10 absolute left-1/2 top-[47.8%] -translate-x-1/2"></div>

              {/* img part */}
              <div className="w-[100%] cursor-pointer group mt-[2rem] relative">
                <img
                  src="./ProjectImg/News.png"
                  alt="News website"
                  className="md:w-[22rem] lg:w-[26rem] xl:w-[28rem] hover:scale-105 ease-in-out duration-200 z-20 relative"
                />
                <a
                  href="https://vanshajsamacharsite.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="flex gap-1 pb-[0.8rem] tracking-[0.1rem] font-serif bg-[#3bb1c8] absolute -top-[0] ease-jump duration-200 group-hover:-top-[3.9rem]  left-[14rem] -translate-x-1/2 cursor-pointer text-[#fff] items-center px-4 py-[0.6rem] opacity-0 group-hover:opacity-100 rounded-[0.3rem] w-[fit-content]">
                    News
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      id="External"
                      className="w-[0.7rem]">
                      <g
                        fill="none"
                        stroke="#fff"
                        className="colorStroke000000 svgStroke">
                        <path
                          d="M16 11v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M13 1h6v6M8 12 19 1"
                          // fill="#1c6cc9"
                          className="color000000 svgShape"></path>
                      </g>
                    </svg>
                    <span className="w-[15px] h-[15px] bg-[#3bb1c8] rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></span>
                  </span>
                </a>
              </div>

              {/* text part */}
              <div className="mt-[2rem] w-[100%] p-[1.2rem]">
                <h3 className="text-[#3bb1c8] text-[40px] font-[playfair] font-[600] tracking-[0.07rem]">
                  News
                </h3>
                <span className="text-[24px] font-[Montserrat] text-[#3bb1c8] font-[500] tracking-[0.08rem]">
                  (For News Read)
                </span>
                <p className="text-[#18181b] mt-[0.6rem] font-serif font-[500] text-[1.1rem] sm:text-[1rem] tracking-[0.1rem]">
                  Highlights top news stories in a home section.Displays news in
                  a clean, organized layout.Separate sections for different
                  categories like politics, sports, entertainment, technology,
                  etc. Easy navigation between categories with a dynamic
                  menu.Detailed news articles with title, image, and full
                  content.Fully optimized for mobile, tablet, and desktop
                  devices.
                </p>

                {/* tools use */}
                <div className="mt-[1rem] mb-[1rem] gap-[1rem] flex flex-wrap">
                  <span className="border-[2px] border-[#3bb1c8] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Reactjs
                  </span>
                  <span className="border-[2px] border-[#3bb1c8] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Css
                  </span>
                  <span className="border-[2px] border-[#3bb1c8] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Html
                  </span>
                  <span className="border-[2px] border-[#3bb1c8] sm:text-[0.9rem]  text-[#18181b] cursor-pointer mr-[0.8rem] py-[6px] px-[20px] rounded-3xl tracking-[0.1rem] font-[playfair]">
                    Javascript
                  </span>
                </div>
              </div>
            </div>

            {/* center line */}

            <div
              style={{ "--colorCode": colorCode }}
              className="md:w-[2px] bg-[var(--colorCode)] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Project;
