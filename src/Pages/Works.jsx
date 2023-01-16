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
              <h6>
                利用樹莓派+標籤機+管理系統
                <br />
                讓使用者能利用刷卡自動列印資料標籤，省去書寫的時間，
                <br />
                也讓管理者可以利用管理系統更好管控冰箱內容物。
              </h6>
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
              <h6>
                使用 React.js + Express.js 製作抽籤系統，
                <br />使 MonoSpace 會員可以透過此系統選擇置物櫃並進行抽籤。
              </h6>
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
              <h6>
                利用 React.js + MUI 做出自己的履歷網頁， <br /> 並使用 Axios
                串接後端實現匿名登入及註冊， <br />
                留言的CRUD等功能， <br />
                在這個專案中我學習到如何去串接前後端。
              </h6>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
