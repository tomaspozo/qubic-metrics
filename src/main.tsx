import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { NuqsAdapter } from "nuqs/adapters/react-router";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";
import App from "./App.tsx";
import { store } from "./api/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ReduxProvider store={store}>
        <NuqsAdapter>
          <App />
          <Analytics />
        </NuqsAdapter>
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>
);
