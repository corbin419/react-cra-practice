import React from "react";
import "../CSS/Footer.css";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

export default function Footer() {
  return (
    <div className="Footer" id="Footer">
      <div className="inner-width">
        <div className="CopyRight">
          &copy; 2022 | Made By <a href="/#">Corbin</a>
        </div>
        <div className="sm">
          <a
            href="https://github.com/corbin419"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100002589980524"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/%E5%85%83%E7%BF%94-%E7%B4%80-205203238/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UCi1Ay72rw6CdVoXFTZOQqyg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
