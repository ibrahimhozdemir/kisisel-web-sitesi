import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "./context/AppContext";
import App from "./App";

function renderApp() {
  return render(
    <AppProvider>
      <App />
    </AppProvider>
  );
}

describe("Tema, dil ve localStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("karanlık mod butonuna tıklayınca html elementine dark class'ı eklenir", () => {
    renderApp();

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    const themeToggle = screen.getByTestId("theme-toggle");
    fireEvent.click(themeToggle);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("dil değiştirme butonuna tıklayınca İngilizce içerik görünür", () => {
    localStorage.setItem("language", JSON.stringify("tr"));
    renderApp();

    expect(screen.getByText("ENGLISH")).toBeInTheDocument();

    const langButton = screen.getByRole("button");
    fireEvent.click(langButton);

    expect(screen.getByText("TÜRKÇE")).toBeInTheDocument();
  });

  it("sayfa yeniden yüklendiğinde localStorage'daki tema tercihi korunur", () => {
    localStorage.setItem("theme", JSON.stringify("dark"));

    renderApp();

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});