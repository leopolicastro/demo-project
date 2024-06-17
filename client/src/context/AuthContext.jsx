import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const user = sessionStorage.getItem("user");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(user).token}`,
          },
        });
        const data = await response.json();
        setCurrentUser(data);
      } catch (error) {
        setCurrentUser(null);
        sessionStorage.removeItem("user");
      }
    }

    if (user && !currentUser) {
      fetchData();
    }
  }, [user, currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
