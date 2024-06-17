import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "prismjs/themes/prism-okaidia.css";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>
);
