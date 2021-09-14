import React from "react";
import logo from "../images/Logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" className="logoimg" />
      <span className="dms">DMS</span>
    </div>
  );
};

export default Logo;
