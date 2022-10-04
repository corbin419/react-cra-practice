import React, { useState, useEffect } from "react";
import "../CSS/GotoTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/useScrollPosition";

export default function GotoTop() {
  const [Show, setShow] = useState("GotoTop");
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 20) {
      setShow("GotoTop");
    } else {
      setShow("GotoTop Show");
    }
  }, [scrollPosition]);
  return (
    <a href="/#Home">
      <button className={Show}>
        <AiOutlineArrowUp />
      </button>
    </a>
  );
}
