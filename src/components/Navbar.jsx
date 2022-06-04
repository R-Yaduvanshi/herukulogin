import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarCss from "../components/Navbar.module.css";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={NavbarCss.nav_bar}>
      Navbar:
      <Link to="">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/post">Post</Link>
      <Link to="/careers">Careers</Link>
      <button onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
