import { createContext, useContext, useReducer, useEffect } from "react";
import { data } from "../data/data";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

function getDefaultLanguage() {
  return navigator.language.startsWith("tr") ? "tr" : "en";
}

function getDefaultTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

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
  const [storedLanguage, setStoredLanguage] = useLocalStorage("language", getDefaultLanguage());
  const [storedTheme, setStoredTheme] = useLocalStorage("theme", getDefaultTheme());

  const [state, dispatch] = useReducer(reducer, {
    language: storedLanguage,
    theme: storedTheme,
  });

  useEffect(() => {
    setStoredLanguage(state.language);
  }, [state.language, setStoredLanguage]);

  useEffect(() => {
    setStoredTheme(state.theme);
  }, [state.theme, setStoredTheme]);

  const content = data[state.language];

  const value = {
    language: state.language,
    theme: state.theme,
    content,
    dispatch,
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}