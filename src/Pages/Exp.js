import React from "react";
import "../CSS/Exp.css";

export default function Exp() {
  return (
    <div className="Exp" id="Exp">
      <div className="inner-width">
        <div className="Section-title-EXP">Experience & Education</div>
        <div className="Time-line">
          <div className="Block">
            <h4>2015/09 - 2018/06</h4>
            <h3>東海大學附屬實驗高級中學 </h3>
            <p>畢業</p>
          </div>
          <div className="Block">
            <h4>2020/07 - 2020/08</h4>
            <h3>國立自然科學博物館 - 科學教育組 </h3>
            <p></p>
          </div>
          <div className="Block">
            <h4>2022/02 - 2022/06</h4>
            <h3>創科資訊 - Monosparta Code Camp </h3>
            <p>
              學習 IoT
              相關知識，以及軟體開發流程，在這次實習中，主要是精進自己前端撰寫及設計的能力。
            </p>
          </div>
          <div className="Block">
            <h4>2018/09 - 2022/06</h4>
            <h3>國立嘉義大學 -數位學習設計與管理學系 </h3>
            <p>畢業</p>
          </div>
        </div>
      </div>
    </div>
  );
}
