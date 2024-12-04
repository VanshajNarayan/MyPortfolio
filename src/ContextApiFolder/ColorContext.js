import { createContext, useContext, useEffect, useReducer } from "react";
import { ColorReducer } from "./ColorReducer";

export const ColorContext = createContext(null);
export const ColorDispatch = createContext(null);

export const ColorProvider = ({ children }) => {
  const initialState = {
    colorCode: "#1f8d93",
  };

  const [state, dispatch] = useReducer(ColorReducer, initialState);

  useEffect(() => {
    // Update the CSS variable on the root element
    document.documentElement.style.setProperty("--color-code", state.colorCode);
  }, [state.colorCode]);

  return (
    <ColorContext.Provider value={state}>
      <ColorDispatch.Provider value={dispatch}>
        {/* Set the CSS variable */}
        <div style={{ "--colorCode": state.colorCode }}>{children}</div>
      </ColorDispatch.Provider>
    </ColorContext.Provider>
  );
};

// custom hook:-
export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};

export const useColorDispatch = () => {
  const context = useContext(ColorDispatch);
  if (!context) {
    throw new Error("useColorDispatch must be used within a ColorProvider");
  }
  return context;
};
