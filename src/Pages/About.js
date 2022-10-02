import React from "react";
import "../CSS/About.css";
import HDME from "../Images/HDme.JPG";

const About = () => {
  return (
    <div className="About-Me" id="About">
      <div className="inner-width">
        <div className="section-title">About</div>
        <div className="About-content">
          <div className="Me">
            <img
              src={HDME}
              alt="Me"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="About-text">
            <h2>Hi ! I'm Corbin</h2>
            <h3>
              <span>Junior Front-end Developer</span>
              <span>Graduate</span>
            </h3>
            <p>
              大學期間，有參加過系上的志工隊，到嘉義的國小去教三到六年級的小學生，利用Scratch去做一些機器人的互動，在營隊期間也培養了教導小朋友的耐心，用他們能理解的方式去教他們撰寫程式。也參加系上的排球隊，從一年級下學期接系隊隊長至三年級下學期，在隊長期間學習到如何去和隊上的人做溝通，以及安排球隊的訓練菜單等等，也需要和其他系隊隊長去協調比賽事項等等；也將系隊戰績從14負3勝提升到6負8勝。
              大二暑假去科博館實習，雖然遇到疫情，活動減少了許多，主要就是協助組上大哥大姊帶領觀眾，及觀摩大哥大姊的解說，協助高中生物理辯論競賽活動；也在實習的最後要演示一個科學教案給觀眾聽，和研發一個新的科學教案出來並自己實際演示給大哥大姊看。這次的實習讓我在大眾面前能比較不那麼緊張。
              大二時透過系上課程接觸到 HTML 及 CSS
              ，讓我對於前端有了興趣，選擇在大四下學期時，利用學期期間到
              創科資訊
              實習，學習各種開發流程及技術，也精進自己程式撰寫的能力；在實習期間使用
              React
              做了兩個專案，也透過敏捷式開發，與其他人合作出一個管理系統，而我負責的是前端頁面的部份。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
