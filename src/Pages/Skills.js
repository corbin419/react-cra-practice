import React from "react";
import "../CSS/Skills.css";

const Skills = () => {
  return (
    <div className="Skills-Me" id="Skills">
      <div className="inner-width">
        <div className="Section-title">Skills</div>
        <div className="Skills-content">
          <div className="Skills">
            <h3>前端技能</h3>
            <span>React.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascripts</span>
            <span>Figma</span>
          </div>
          <div className="Skills">
            <h3>影像編輯</h3>
            <span>Adobe Photoshop</span>
            <span>Adobe Premiere</span>
            <span>Adobe After Effects</span>
            <span>Adobe Illstrator</span>
          </div>
          <div className="Skills">
            <h3>版本控制</h3>
            <span>Git </span>
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
