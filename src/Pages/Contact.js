import React from "react";
import "../CSS/Contact.css";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="inner-width">
        <h1 className="Section-title-Contact">Get in touch</h1>
        <div className="contact-info">
          <div className="item">
            <i>
              <AiFillPhone />
            </i>
            0965571499
          </div>
          <div className="item">
            <i>
              <AiTwotoneMail />
            </i>
            corbinwork777@gmail.com
          </div>
          <div className="item">
            <i>
              <HiLocationMarker />
            </i>
            Taichung,Taiwan
          </div>
          <form action="#" className="Contact-form">
            <input
              type="text"
              className="NameZone"
              placeholder="Your Full Name"
            />
            <input
              type="text"
              className="EmailZone"
              placeholder="Your Full Email"
            />
            <input type="text" className="SubjectZone" placeholder="Subject" />
            <textarea className="MessageZone" placeholder="Message" />
            <input type="submit" value="Send Message" className="Btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
