import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import "./index.css";
import App from "./App.tsx";
import { store } from "./api/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <NuqsAdapter>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <App />
          <Analytics />
        </ThemeProvider>
      </NuqsAdapter>
    </ReduxProvider>
  </StrictMode>
);
