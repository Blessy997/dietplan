import React from "react";
import facebook from "../../Images/facebook.svg";
import instagram from "../../Images/instagram.svg";
import twitter from "../../Images/twitter.svg";
import bakerylogo from "../../Images/bakerylogo.jpg";
import whatsapp from "../../Images/whatsapp.svg";
import youtube from "../../Images/youtube.svg";
import Capture from "../../Images/Capture.PNG"
import "./Footer.css"
export default function Footer() {
  return (
    <div id="footer">
      <div style={{paddingLeft:"30px",paddingRight:"30px"}}>
       

        <div className="address">
           <ul className="logo">
            <li>
            <img src={Capture}></img>
            </li>
        
        </ul>
          <ul>
            <li  className="address">ADDRESS</li>
            <li>
              Edible Kitchen Services <br /> JN Stadium, Kaloor <br /> Kochi -
              6806644
            </li>
          </ul>

          <ul>
            <li  className="address">PHONE</li>
            <li>0124 398 6371</li>
          </ul>

          <ul>
            <li  className="address">QUICK LINKS</li>
            <li>My Account</li>
            <li>About Us</li>
            <li>Keto Plans</li>
            <li>Our Dishes</li>
          </ul>

          <ul>
            <li  className="address">FOLLOW US</li>
            <li>
              <img src={facebook}></img>
              <img src={whatsapp}></img>
              <img src={twitter}></img>
              <img src={instagram}></img>
              <img src={youtube}></img>
            </li>
          </ul>

        </div>
     <hr></hr>
      </div>
      <h4 className="copyright">Copyright 2020-2021 Edibles - All Rights Reserved</h4>
    </div>
  );
}
