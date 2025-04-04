import React, { StrictMode } from "react"; // Explicitly import React
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App"; // Remove .js extension
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { TokenProvider } from "./Componants/TokenContext"; // Ensure correct import

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <StrictMode>
        <TokenProvider> {/* Fix incorrect usage */}
          <App />
        </TokenProvider>
      </StrictMode>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
