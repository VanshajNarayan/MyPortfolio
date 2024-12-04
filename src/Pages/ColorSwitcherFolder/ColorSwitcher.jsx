import { useState } from "react";
import {
  useColorContext,
  useColorDispatch,
} from "../../ContextApiFolder/ColorContext";

const ColorSwitcher = () => {
  const [colorPallate, setColorPallate] = useState(false);

  // colors array:-
  const colors = [
    "#4bbc2c",
    "#5581b5",
    "#fd8396",
    "#ebbd00",
    "#ed0d62",
    "#968ed5",
  ];

  // color dispatch:-
  const dispatch = useColorDispatch();

  // color code:-
  const { colorCode } = useColorContext();

  return (
    <>
      <div
        style={{ "--colorCode": colorCode }}
        className={`colorSwitcher absolute top-[6rem] 2xl:top-[19rem] ${
          colorPallate === false ? "translate-x-[-100%]" : "translate-x-[-0%]"
        } px-[1rem] z-20 py-[0.5rem] bg-[var(--colorCode)] w-[10rem] transition-all ease-in-out duration-1000`}>
        <div className="relative">
          {/* setting icons */}
          <div className="w-[2.8rem] h-[2.7rem] flex items-center justify-center text-[#fff] bg-[var(--colorCode)] absolute top-[0.9rem] right-[-3.8rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="rotate w-[1.3rem] cursor-pointer mb-[0.2rem]"
              onClick={() => setColorPallate(!colorPallate)}>
              {colorPallate ? (
                <title>Select Colors</title>
              ) : (
                <title>Choose Color Theme</title>
              )}
              <path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM12.0001 15.0001C13.6569 15.0001 15.0001 13.6569 15.0001 12.0001C15.0001 10.3432 13.6569 9.00008 12.0001 9.00008C10.3432 9.00008 9.00008 10.3432 9.00008 12.0001C9.00008 13.6569 10.3432 15.0001 12.0001 15.0001Z"></path>
            </svg>
          </div>

          {/* color lists */}
          <div className="flex flex-wrap gap-[1rem] mt-[0.7rem] mb-[0.7rem]">
            {colors?.map((color, index) => (
              <span
                key={index}
                style={{ background: color }}
                className="w-[30px] h-[30px] cursor-pointer rounded-full"
                onClick={() => {
                  dispatch({ type: "CHANGE_COLOR", payload: color });
                  setColorPallate(!colorPallate);
                }}></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorSwitcher;