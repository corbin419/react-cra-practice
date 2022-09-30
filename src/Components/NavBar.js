import React, { useEffect, useState } from "react";
import "../CSS/NavBar.css";
// import Logo from "../Images/Logo.png";

const NavBar = () => {
  const [Menu, setMenu] = useState("Menu-togger");
  const [NavMenu, setNavMenu] = useState("Nav-Menu");
  const [isMenuopen, setIsMenuopen] = useState(false);

  const MenuClick = () => {
    if (!isMenuopen) {
      setMenu("Menu-togger active");
      setNavMenu("Nav-Menu active");
    } else {
      setMenu("Menu-togger");
      setNavMenu("Nav-Menu ");
    }
    setIsMenuopen(!isMenuopen);
  };

  return (
    <nav className="NavBar">
      <div className="inner-width">
        <a href="/" className="Logo">
          Corbin's Web
        </a>
        <button className={Menu} onClick={MenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={NavMenu}>
          <a href="#" id="Menu-Btn">
            Home
          </a>
          <a href="#" id="Menu-Btn">
            About Me
          </a>
          <a href="#" id="Menu-Btn">
            Works
          </a>
          <a href="#" id="Menu-Btn">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
