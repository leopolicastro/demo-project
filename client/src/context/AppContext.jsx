import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppContext.Provider
      value={{
        timer,
        setTimer,
        setAlert,
        alert,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
