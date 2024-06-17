// context/AppContext.js
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(timer); // This logs the updated timer value.
  }, [timer]); //

  return (
    <AppContext.Provider
      value={{
        timer,
        setTimer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);

// pages/ContextDemo.jsx
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ContextDemo = () => {
  const { timer } = usecontext(AppContext);
  return (
    <div className="prose-xl flex justify-between">
      <section className="p-10">
        <div className="flex flex-col p-20 border shadow-2xl rounded-lg">
          <h1>Timer: {timer}</h1>
        </div>
      </section>
    </div>
  );
};

