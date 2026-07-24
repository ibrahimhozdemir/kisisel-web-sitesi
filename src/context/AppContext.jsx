import { createContext, useContext, useReducer, useEffect, useRef } from "react";
import { data } from "../data/data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import api from "../api/axios";
import { toast } from "react-toastify";

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

const toastMessages = {
  tr: {
    pending: "Gönderiliyor...",
    success: "Tercih başarıyla kaydedildi!",
    error: "Bir hata oluştu, tekrar dene.",
  },
  en: {
    pending: "Sending...",
    success: "Preference saved successfully!",
    error: "Something went wrong, please try again.",
  },
};

export function AppProvider({ children }) {
  const [storedLanguage, setStoredLanguage] = useLocalStorage("language", getDefaultLanguage());
  const [storedTheme, setStoredTheme] = useLocalStorage("theme", getDefaultTheme());

  const [state, dispatch] = useReducer(reducer, {
    language: storedLanguage,
    theme: storedTheme,
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    setStoredLanguage(state.language);
  }, [state.language, setStoredLanguage]);

  useEffect(() => {
    setStoredTheme(state.theme);
  }, [state.theme, setStoredTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const messages = toastMessages[state.language];

    toast.promise(api.post("/collections/products/records", { data: { name: state.language } }), {
      pending: messages.pending,
      success: messages.success,
      error: messages.error,
    });
  }, [state.language]);

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