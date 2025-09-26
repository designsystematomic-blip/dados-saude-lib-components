import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@lib/styles/fonts.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Dados Saúde Lib Components</h1>
    <p>Welcome to the Dados Saúde Lib Components library!</p>
    <App />
  </StrictMode>
);
