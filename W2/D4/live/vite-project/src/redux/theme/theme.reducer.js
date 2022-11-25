import {
 
  TOGGLE_THEME,
} from "./theme.types";

const initialState = {
 
  theme: "white",
};
export const themeReducer = (state = initialState, { type}) => {
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        theme: state.theme === "white" ? "black" : "white",
      };
    }
   
    default:
      return state;
  }
};
