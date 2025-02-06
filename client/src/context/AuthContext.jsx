import { useEffect, useState } from "react";
import { createContext } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const saveToken = localStorage.getItem("token");
    if (saveToken) {
      setToken(saveToken);
      setIsLoggedIn(true);
      const decoded = jwtDecode(saveToken);
      setUserDetails(decoded);
    }
  }, [token]);

  const authValue = {
    token,
    setToken,
    setIsLoggedIn,
    isLoggedIn,
    handleLogOut,
    userDetails,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
