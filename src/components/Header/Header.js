import React from "react";
import "./Header.scss";
import Logo from "../../assets/Logo";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Logo width="2.75rem" height="2.75rem" />
        <span>LOGO</span>
      </div>

      <div className="navigators">
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
      </div>
    </div>
  );
};

export default Header;
