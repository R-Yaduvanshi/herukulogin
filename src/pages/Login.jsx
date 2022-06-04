import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import FormCss from "../pages/Login_div.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginCreds, setloginCreds] = useState({});
  const { login } = useContext(AuthContext);
  const { pathname } = useLocation();

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setloginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    login();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleOnSubmit} className={FormCss.form_css}>
        <input
          onChange={handleOnChange}
          name="email"
          type="email"
          placeholder="Enter Email..."
        />
        <input
          onChange={handleOnChange}
          name="password"
          type="password"
          placeholder=" Enter Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
