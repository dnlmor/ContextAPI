import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import CountContextProvider from "./context/CountContextProvider";
import UserContextProvider from "./context/UserContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CountContextProvider>
  </StrictMode>
);
