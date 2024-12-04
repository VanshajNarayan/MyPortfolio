import Lottie from "lottie-react";
import animationData from "./Contact-animation.json";
import { useColorContext } from "../../ContextApiFolder/ColorContext";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  // handle form submit:-
  function handleFormSubmit(e) {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm("service_fzjhj53", "template_nqi1eet", formRef.current, {
        publicKey: "L_Vg3c-h244Pa8Bvd",
      })
      .then(
        () => {
          toast.success("DATA SENT SUCCESSFULLY!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          toast.error("DATA SENT FAILED...", error.text);
          formRef.current.reset();
        }
      );
  }

  // color switcher:-
  const { colorCode } = useColorContext();

  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="mb-[6rem]"
        style={{
          "--colorCode": colorCode,
        }}>
        {/* heading */}
        <div className="grid place-content-center">
          <h2 className="border-[2px] border-[var(--colorCode)] px-[30px] w-[fit-content] text-[var(--colorCode)] text-[40px] font-[600] tracking-[0.18rem] font-[playfair]">
            Let's Connect
          </h2>
        </div>
        {/* contact content */}
        <div className="max-w-[1400px] w-full p-[2rem] m-auto flex flex-col-reverse items-center lg:flex-row justify-between gap-[5em]">
          {/* contact form */}
          <div className="mt-[3rem] w-[100%]">
            <form ref={formRef} onSubmit={(e) => handleFormSubmit(e)}>
              {/* full name */}
              <div className="relative mt-[1rem]">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  autoComplete="off"
                  required
                  className="lg:max-w-[30rem] w-full text-[1rem] pt-[1rem] bg-[#f9f9f9] text-[#18181b] font-serif tracking-[0.07rem] border-2 outline-none border-[var(--colorCode)] rounded p-[0.7rem] mb-[1rem] peer"
                />
                <label
                  htmlFor="name"
                  className="label absolute top-[18%] left-[3%] transition-all duration-200 ease-in-out text-[1rem] text-[#9ca3af] font-serif bg-[#f9f9f9] px-[0.3rem] tracking-[0.07rem] peer-focus:top-[-18%] peer-valid:top-[-18%]">
                  Name
                </label>
              </div>
              {/* email */}
              <div className="relative mt-[0.7rem]">
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  autoComplete="off"
                  required
                  className="lg:max-w-[30rem] w-full text-[1rem] pt-[1rem] bg-[#f9f9f9] text-[#18181b] font-serif tracking-[0.07rem] placeholder:font-serif placeholder:tracking-[0.07rem] border-2 outline-none border-[var(--colorCode)] rounded p-[0.7rem] mb-[1rem] peer"
                />
                {/* label */}
                <label
                  htmlFor="email"
                  className="label absolute top-[18%] left-[3%] transition-all duration-200 ease-in-out text-[1rem] text-[#9ca3af] font-serif bg-[#f9f9f9] px-[0.3rem] tracking-[0.07rem] peer-focus:top-[-18%] peer-valid:top-[-18%]">
                  Email
                </label>
              </div>
              {/* message */}
              <div className="relative mt-[0.7rem]">
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  required
                  autoComplete="off"
                  className="lg:max-w-[30rem] w-full resize-none pt-[1rem] text-[1rem] bg-[#f9f9f9] text-[#18181b] font-serif tracking-[0.07rem] border-2 outline-none border-[var(--colorCode)] rounded px-[0.7rem] py-[0rem] mb-[1rem] peer"
                />
                {/* label */}
                <label
                  htmlFor="message"
                  className="label absolute top-[5%] left-[3%] transition-all duration-200 ease-in-out text-[1rem] text-[#9ca3af] font-serif bg-[#f9f9f9] px-[0.3rem] tracking-[0.07rem] peer-focus:top-[-5%] peer-valid:top-[-5%]">
                  Message
                </label>
              </div>
              {/* buttons */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-[1.2rem] text-[1rem] py-[0.3rem] transition-all ease-in-out duration-300 rounded-[5px] text-[#fff] tracking-[0.07rem] cursor-pointer font-serif bg-[var(--colorCode)] hover:bg-[var(--colorCode)] hover:text-[#fff]">
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          {/* contact animation */}
          <div className="w-[100%] grid place-items-center">
            <Lottie
              animationData={animationData}
              style={{ width: "100%", maxWidth: "32rem" }}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
