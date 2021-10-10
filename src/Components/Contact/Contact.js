import React from "react";
import { Input } from "antd";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1 className="meal">Feel Free to contact us for your customized meal plan</h1>

        <div className="cont">
          <div className="container">
            <h1>Your Name *</h1>
            <Input placeholder="" />
            <h1>Your Mobile No *</h1>
            <Input placeholder="" />
          </div>
          <div className="container">
            <h1>Your Email</h1>
            <Input placeholder="" />
            <h1>Message</h1>
            <Input placeholder="" />
          </div>
          <div className="send-container">
            <h2>Send <br/> Now</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
