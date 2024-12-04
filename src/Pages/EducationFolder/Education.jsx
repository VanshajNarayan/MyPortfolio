import { useColorContext } from "../../ContextApiFolder/ColorContext";
import { motion } from "framer-motion";

const Education = () => {
  const { colorCode } = useColorContext();
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0 }}>
        {/* heading */}
        <div
          className="grid place-content-center"
          style={{ "--colorCode": colorCode }}>
          <h2 className="border-[2px] border-[var(--colorCode)] px-[30px] w-[fit-content] text-[var(--colorCode)] text-[40px] font-[600] tracking-[0.18rem] font-[playfair]">
            Education
          </h2>
        </div>

        {/* content of education */}
        <div className="relative timelineBefore pl-[1rem] max-w-[1200px] w-full m-auto pb-[3rem] pt-[3rem]">
          {/* box 1 */}
          <div
            className="container lg:max-w-[50%] max-w-[100%] lg:left-0"
            style={{ "--colorCode": colorCode }}>
            {/* circle */}
            <div className="absolute lg:w-[20px] lg:h-[20px] rounded-[50%] right-[.3%] top-[41px] z-10 bg-[var(--colorCode)]"></div>
            <div className="box relative rounded-[6px] mb-[20px] mr-[1rem] bg-[#fff] border-2 border-[var(--colorCode)] transition-all cursor-pointer p-[1.5rem] hover:shadow-[0px_3px_12px_0px_var(--colorCode)] hover:border-transparent">
              <div className="flex flex-row items-center gap-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="Real"
                  className="w-[2.4rem] sm:w-[2rem]">
                  <path
                    d="M24 0C10.751 0 0 10.751 0 24s10.751 24 24 24 24-10.751 24-24S37.249 0 24 0zm0 1c12.708 0 23 10.292 23 23 0 12.709-10.292 23-23 23S1 36.709 1 24C1 11.292 11.292 1 24 1zm.004 9a.5.5 0 0 0-.365.154l-6.657 6.948c.305.155.591.34.86.546L24 11.225 34.326 22h-.752a.5.5 0 0 0-.082-.01.5.5 0 0 0-.062.01H20c0 .342-.039.675-.1 1H33v13h-6v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V36h-6v-3.232l-.5-.5-.5.5V36.5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V23h1.5a.5.5 0 0 0 .361-.846L34 20.213a.5.5 0 0 0 0-.012V14.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.582l-6.639-6.928a.5.5 0 0 0-.357-.154zM32 15h1v4.168l-1.012-1.055A.5.5 0 0 0 32 18v-3zm-17.5 2.5c-2.48 0-4.5 2.02-4.5 4.5 0 1.555.795 2.928 2 3.736v7.618l2.5-2.5 2.5 2.5v-7.618A4.497 4.497 0 0 0 19 22c0-2.48-2.02-4.5-4.5-4.5zm0 1c1.939 0 3.5 1.561 3.5 3.5s-1.561 3.5-3.5 3.5A3.492 3.492 0 0 1 11 22c0-1.939 1.561-3.5 3.5-3.5zm0 .996-.99 1.402-1.639.506 1.027 1.375-.023 1.715 1.625-.553 1.625.553-.023-1.715 1.027-1.375-1.639-.506-.58-.822-.41-.58zm0 1.734.37.524.609.187-.381.512.007.639-.605-.205-.605.205.01-.639-.384-.512.61-.187.369-.524zM13 26.223c.471.168.972.277 1.5.277s1.029-.109 1.5-.277v4.716l-1.5-1.5-1.5 1.5v-4.716zM22 28h4v8h-4v-8z"
                    overflow="visible"
                    fill={`${colorCode}`}
                    className="color000000 svgShape"></path>
                </svg>
                <h4 className="relative text-[var(--colorCode)] text-[1.4rem] font-[600] font-[Montserrat] tracking-[0.1rem]">
                  2017 - 10th
                </h4>
              </div>
              <h3 className="text-[#18181b] my-[0.3rem] font-[serif] font-[600] text-[1.2rem] tracking-[0.1rem]">
                Ashok High School
              </h3>
              <p className="text-[#18181b] font-serif font-[500] text-[1rem] tracking-[0.07rem]">
                <q>
                  I completed my 10th grade under the Bihar Secondary
                  Examination Board at
                  <a
                    href="https://en.wikipedia.org/wiki/Ashok_Inter_School_Daudnagar"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-[var(--colorCode)] underline ml-[0.3rem]">
                    Ashok High School
                  </a>
                  , located in Daudnagar, Aurangabad, Bihar. My time at the
                  school was a formative period where I gained valuable
                  knowledge and experiences that continue to influence me today.
                  Reflecting on those days brings back cherished memories of
                  learning and growth.
                </q>
              </p>
              {/* line */}
              <div className="lg:h-0 lg:w-[100%] absolute top-[39px] z-[-1] left-[13%] border-[1px] border-[var(--colorCode)]"></div>
              {/* card background animation */}
              <div className="absolute w-[103%] h-[103%] top-[-1.5%] left-[-1.5%] z-[-1] rounded-[6px] blur-[2px] opacity-[5px] bg-[var(--colorCode] bg-[conic-gradient(from_var(--angle),_transparent_70%,var(--colorCode),var(--colorCode))] spin"></div>
            </div>
          </div>
          {/* box 2 */}
          <div
            className="container lg:max-w-[50%] max-w-[100%] lg:left-1/2"
            style={{ "--colorCode": colorCode }}>
            {/* circle */}
            <div className="absolute lg:w-[20px] lg:h-[20px] rounded-[50%] left-[-22px] top-[41px] z-10 bg-[var(--colorCode)]"></div>
            <div className="box relative rounded-[6px] w-[44rem] max-w-[100%] mb-[20px] bg-[#fff] border-2 border-[var(--colorCode)] transition-all cursor-pointer p-[1.5rem] hover:shadow-[0px_3px_12px_0px_var(--colorCode)] hover:border-transparent">
              <div className="flex flex-row items-center gap-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="Real"
                  className="w-[3rem] sm:w-[2rem]">
                  <path
                    d="M24 0C10.751 0 0 10.751 0 24s10.751 24 24 24 24-10.751 24-24S37.249 0 24 0zm0 1c12.708 0 23 10.292 23 23 0 12.709-10.292 23-23 23S1 36.709 1 24C1 11.292 11.292 1 24 1zm.004 9a.5.5 0 0 0-.365.154l-6.657 6.948c.305.155.591.34.86.546L24 11.225 34.326 22h-.752a.5.5 0 0 0-.082-.01.5.5 0 0 0-.062.01H20c0 .342-.039.675-.1 1H33v13h-6v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V36h-6v-3.232l-.5-.5-.5.5V36.5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V23h1.5a.5.5 0 0 0 .361-.846L34 20.213a.5.5 0 0 0 0-.012V14.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.582l-6.639-6.928a.5.5 0 0 0-.357-.154zM32 15h1v4.168l-1.012-1.055A.5.5 0 0 0 32 18v-3zm-17.5 2.5c-2.48 0-4.5 2.02-4.5 4.5 0 1.555.795 2.928 2 3.736v7.618l2.5-2.5 2.5 2.5v-7.618A4.497 4.497 0 0 0 19 22c0-2.48-2.02-4.5-4.5-4.5zm0 1c1.939 0 3.5 1.561 3.5 3.5s-1.561 3.5-3.5 3.5A3.492 3.492 0 0 1 11 22c0-1.939 1.561-3.5 3.5-3.5zm0 .996-.99 1.402-1.639.506 1.027 1.375-.023 1.715 1.625-.553 1.625.553-.023-1.715 1.027-1.375-1.639-.506-.58-.822-.41-.58zm0 1.734.37.524.609.187-.381.512.007.639-.605-.205-.605.205.01-.639-.384-.512.61-.187.369-.524zM13 26.223c.471.168.972.277 1.5.277s1.029-.109 1.5-.277v4.716l-1.5-1.5-1.5 1.5v-4.716zM22 28h4v8h-4v-8z"
                    overflow="visible"
                    fill={`${colorCode}`}
                    className="color000000 svgShape"></path>
                </svg>
                <h4 className="relative text-[var(--colorCode)] text-[1.4rem] font-[600] font-[Montserrat] tracking-[0.1rem]">
                  2018 - 2021 (Diploma)
                </h4>
              </div>
              <h3 className="text-[#18181b] my-[0.3rem] font-[serif] font-[600] text-[1.2rem] tracking-[0.1rem]">
                Garhwa College, Jharkhand
              </h3>
              <p className="text-[#18181b] font-serif font-[500] text-[1rem] tracking-[0.07rem]">
                <q>
                  I completed my Diploma from the Jharkhand University of
                  Technology at
                  <a
                    href="https://www.garhwapolytechnic.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-[var(--colorCode)] underline ml-[0.3rem]">
                    Garhwa Polytechnic
                  </a>
                  , located in Hasker, Garhwa district. My time at this
                  institution was not only academically enriching but also
                  provided valuable life experiences that shaped my personal and
                  professional growth.
                </q>
              </p>
              {/* line */}
              <div className="lg:h-0 lg:w-[100%] absolute top-[38px] z-[-1] md:-left-[13.5%] border-[1px] border-[var(--colorCode)]"></div>
              {/* card background animation */}
              <div className="absolute w-[103%] h-[103%] top-[-1.5%] left-[-1.5%] z-[-1] rounded-[6px] blur-[2px] opacity-[5] bg-[var(--colorCode] bg-[conic-gradient(from_var(--angle),_transparent_70%,var(--colorCode),var(--colorCode))] spin"></div>
            </div>
          </div>
          {/* box 3 */}
          <div
            className="container lg:max-w-[50%] max-w-[100%] lg:left-0"
            style={{ "--colorCode": colorCode }}>
            {/* circle */}
            <div className="absolute lg:w-[20px] lg:h-[20px] rounded-[50%] right-[.3%] top-[41px] z-10 bg-[var(--colorCode)]"></div>
            <div className="box relative rounded-[6px] mb-[20px] mr-[1rem] bg-[#fff] border-2 border-[var(--colorCode)] transition-all cursor-pointer p-[1.5rem] hover:shadow-[0px_3px_12px_0px_var(--colorCode)] hover:border-transparent">
              <div className="flex flex-row items-center gap-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="Real"
                  className="w-[3rem] sm:w-[2rem]">
                  <path
                    d="M24 0C10.751 0 0 10.751 0 24s10.751 24 24 24 24-10.751 24-24S37.249 0 24 0zm0 1c12.708 0 23 10.292 23 23 0 12.709-10.292 23-23 23S1 36.709 1 24C1 11.292 11.292 1 24 1zm.004 9a.5.5 0 0 0-.365.154l-6.657 6.948c.305.155.591.34.86.546L24 11.225 34.326 22h-.752a.5.5 0 0 0-.082-.01.5.5 0 0 0-.062.01H20c0 .342-.039.675-.1 1H33v13h-6v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V36h-6v-3.232l-.5-.5-.5.5V36.5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V23h1.5a.5.5 0 0 0 .361-.846L34 20.213a.5.5 0 0 0 0-.012V14.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.582l-6.639-6.928a.5.5 0 0 0-.357-.154zM32 15h1v4.168l-1.012-1.055A.5.5 0 0 0 32 18v-3zm-17.5 2.5c-2.48 0-4.5 2.02-4.5 4.5 0 1.555.795 2.928 2 3.736v7.618l2.5-2.5 2.5 2.5v-7.618A4.497 4.497 0 0 0 19 22c0-2.48-2.02-4.5-4.5-4.5zm0 1c1.939 0 3.5 1.561 3.5 3.5s-1.561 3.5-3.5 3.5A3.492 3.492 0 0 1 11 22c0-1.939 1.561-3.5 3.5-3.5zm0 .996-.99 1.402-1.639.506 1.027 1.375-.023 1.715 1.625-.553 1.625.553-.023-1.715 1.027-1.375-1.639-.506-.58-.822-.41-.58zm0 1.734.37.524.609.187-.381.512.007.639-.605-.205-.605.205.01-.639-.384-.512.61-.187.369-.524zM13 26.223c.471.168.972.277 1.5.277s1.029-.109 1.5-.277v4.716l-1.5-1.5-1.5 1.5v-4.716zM22 28h4v8h-4v-8z"
                    overflow="visible"
                    fill={`${colorCode}`}
                    className="color000000 svgShape"></path>
                </svg>
                <h4 className="relative text-[var(--colorCode)] text-[1.4rem] font-[600] font-[Montserrat] tracking-[0.1rem]">
                  2020 - 2024 (Lt. B.tech)
                </h4>
              </div>
              <h3 className="text-[#18181b] my-[0.3rem] font-[serif] font-[600] text-[1.2rem] tracking-[0.1rem]">
                Ramgovind Institute of Technology College, Jharkhand
              </h3>
              <p className="text-[#18181b] font-serif font-[500] text-[1rem] tracking-[0.07rem]">
                <q>
                  I earned my B.Tech degree from Jharkhand University of
                  Technology through lateral entry at
                  <a
                    href="https://www.rgc.edu.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-[var(--colorCode)] underline ml-[0.3rem]">
                    Ramgovind Group of Colleges
                  </a>
                  , located in Mahuatanr, Koderma. My journey at this
                  institution was pivotal in enhancing my technical skills and
                  preparing me for professional challenges.
                </q>
              </p>
              {/* line */}
              <div className="lg:h-0 lg:w-[100%] absolute top-[39px] z-[-1] left-[13%] border-[1px] border-[var(--colorCode)]"></div>
              {/* card background animation */}
              <div className="absolute w-[103%] h-[103%] top-[-1.5%] left-[-1.5%] z-[-1] rounded-[6px] blur-[2px] opacity-[5px] bg-[var(--colorCode] bg-[conic-gradient(from_var(--angle),_transparent_70%,var(--colorCode),var(--colorCode))] spin"></div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Education;
