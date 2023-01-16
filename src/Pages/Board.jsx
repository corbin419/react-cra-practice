import React from "react";
import "../CSS/Contact.css";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

export default function Board() {
  return (
    <div className="Contact" id="Contact">
      <div className="inner-width">
        <h1 className="Section-title-Contact">Get in touch</h1>
        <div className="contact-info">
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
