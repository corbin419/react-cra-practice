import React from "react";
import "../CSS/NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="inner-width">
        <button href="/" className="Logo"></button>
        <button className="Menu-togger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="Nav-Menu">
          <button href="#" id="Menu-Btn">
            Home
          </button>
          <button href="#" id="Menu-Btn">
            About Me
          </button>
          <button href="#" id="Menu-Btn">
            Works
          </button>
          <button href="#" id="Menu-Btn">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
