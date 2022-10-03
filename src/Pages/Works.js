import React from "react";
import "../CSS/Works.css";
import Label from "../Images/Label.jpg";
import Self from "../Images/Self.png";
import Luck from "../Images/Luck.png";

export default function Works() {
  return (
    <div className="Works" id="Works">
      <div className="inner-width">
        <div className="Section-title-Works">Works</div>
        <div className="Works">
          <a
            href="https://github.com/monosparta/Refrigerator_Label"
            className="Projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Label} alt="Label"></img>
            <div className="info">
              <h3>雲端智慧標籤系統</h3>
            </div>
          </a>
          <a
            href="https://github.com/Jane0731/mono-luck-front.git"
            className="Projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Luck}
              alt=""
              target="_blank"
              rel="noopener noreferrer"
            ></img>
            <div className="info">
              <h3>置物櫃抽籤系統</h3>
            </div>
          </a>
          <a
            href="https://github.com/corbin419/corbin-resume"
            className="Projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Self} alt=""></img>
            <div className="info">
              <h3>個人履歷留言板及登入註冊實作</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
