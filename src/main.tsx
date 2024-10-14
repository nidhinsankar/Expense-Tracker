import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ExpenseProvider } from "./utils/ExpenseContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </StrictMode>
);
