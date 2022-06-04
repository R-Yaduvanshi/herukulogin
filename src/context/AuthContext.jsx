import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  const login = () => {
    setIsAuth(true);

    if (!state.from) {
      // navigate(state.from, { replace: true });
      navigate("/");
    } else {
      // navigate("/");
      navigate(state.from, { replace: true });
    }
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  //   let param = { isAuth: isAuth, login: login, logout: logout };
  // this is same as value niche dekho;

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
