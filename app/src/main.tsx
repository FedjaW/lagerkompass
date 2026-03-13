import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";

const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applyThemeClass = (isDark: boolean) => {
  document.documentElement.classList.toggle("dark", isDark);
  document.body.classList.toggle("dark", isDark);
};

applyThemeClass(colorSchemeQuery.matches);
colorSchemeQuery.addEventListener("change", (event) => {
  applyThemeClass(event.matches);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header title="Lager-Kompass" />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
