import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h2>Where in the world?</h2>
      </div>
      <div className="header__right">
        <i className="header__icon fas fa-moon"></i>
        <p className="header__mode">Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
