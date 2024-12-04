import { useColorContext } from "../../ContextApiFolder/ColorContext";

const Education = () => {
  const { colorCode } = useColorContext();
  return (
    <>
      <section className="vieworhideonscroll">
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
              <h4 className="relative text-[var(--colorCode)] text-[1.4rem] font-[600] font-[Montserrat] tracking-[0.1rem]">
                2017 - 10th
              </h4>
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
              <h4 className="relative text-[var(--colorCode)] text-[1.4rem] font-[600] font-[Montserrat] tracking-[0.1rem]">
                2018 - 2021 (Diploma)
              </h4>
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
              <h4 className="relative text-[var(--colorCode)] text-[1.4rem] font-[600] font-[Montserrat] tracking-[0.1rem]">
                2020 - 2024 (Lt. B.tech)
              </h4>
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
      </section>
    </>
  );
};

export default Education;
