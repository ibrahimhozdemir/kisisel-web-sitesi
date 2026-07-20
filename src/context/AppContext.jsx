import { createContext, useContext, useReducer } from "react";
import { data } from "../data/data";

const AppContext = createContext();

const initialState = {
  language: "tr",
  theme: "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
      return { ...state, language: state.language === "tr" ? "en" : "tr" };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const content = data[state.language];

  const value = {
    language: state.language,
    theme: state.theme,
    content,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}