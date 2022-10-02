import React, { useState } from "react";
import "../CSS/NavBar.css";
// import Logo from "../Images/Logo.png";
import { useScrollPosition } from "../Hooks/useScrollPosition";

const NavBar = () => {
  const [Menu, setMenu] = useState("Menu-togger");
  const [NavMenu, setNavMenu] = useState("Nav-Menu");
  const [isMenuopen, setIsMenuopen] = useState(false);
  const [NavBar, setNavBar] = useState("NavBar");

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
  const scrollPosition = useScrollPosition();

  const scroll = () => {
    if (scrollPosition > 0) {
      setNavBar("NavBar sticky");
      setNavMenu("NavBar-Menu sticky");
      setMenu("Menu-togger sticky");
    } else {
      setNavBar("NavBar");
      setMenu("Menu-togger");
      setNavMenu("Nav-Menu ");
    }
  };

  return (
    <nav className={NavBar} onScroll={scroll}>
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
          <a href="/#" id="Menu-Btn">
            Home
          </a>
          <a href="/#" id="Menu-Btn">
            About Me
          </a>
          <a href="/#" id="Menu-Btn">
            Works
          </a>
          <a href="/#" id="Menu-Btn">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
