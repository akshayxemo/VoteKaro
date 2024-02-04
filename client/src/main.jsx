import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={import.meta.env.THIRD_WEB_CLIENT_ID}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
