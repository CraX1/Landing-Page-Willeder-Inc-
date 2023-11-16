import React from "react";
import "./Header.scss";
import Logo from "../../assets/Logo";
import MenuIcon from "../../assets/MenuIcon";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
        <span className="logo-text">LOGO</span>
      </div>

      <div className="navigators">
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
      </div>
      <div className="menu">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
