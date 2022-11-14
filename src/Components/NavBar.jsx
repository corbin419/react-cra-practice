import React, { useState, useEffect } from "react";
import "../CSS/NavBar.css";
// import Logo from "../Images/Logo.png";
import { useScrollPosition } from "../Hooks/useScrollPosition";

const NavBar = () => {
  const [Menu, setMenu] = useState("Menu-toggler");
  const [NavMenu, setNavMenu] = useState("Nav-Menu");
  const [NavBar, setNavBar] = useState("NavBar");
  const [isMenuopen, setIsMenuopen] = useState(false);

  const MenuClick = () => {
    if (!isMenuopen) {
      setMenu("Menu-toggler active");
      setNavMenu("Nav-Menu active");
    } else {
      setMenu("Menu-toggler");
      setNavMenu("Nav-Menu");
    }
    setIsMenuopen(!isMenuopen);
  };
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 900) {
      setNavBar("NavBar sticky");
      setNavMenu("Nav-Menu sticky");
      setMenu("Menu-toggler sticky");
    } else {
      setNavBar("NavBar");
      setMenu("Menu-toggler");
      setNavMenu("Nav-Menu ");
    }
  }, [scrollPosition]);

  return (
    <nav className={NavBar}>
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
          <a href="/#Home" id="Menu-Btn">
            Home
          </a>
          <a href="/#AboutMe" id="Menu-Btn">
            About Me
          </a>
          <a href="/#Works" id="Menu-Btn">
            Works
          </a>
          <a href="/#Contact" id="Menu-Btn">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
