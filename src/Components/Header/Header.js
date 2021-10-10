import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <div id="header">
      <div className="left">
        <a href="home" >Home</a>
        <a href="home">About us</a>
        <a href="home">diet plans</a>
        <a href="home" class="active">Select your plans</a>
      </div>
      {/* <div className="middle">
    <a>Logo</a>
      </div> */}
      <div className="right">
        <a href="home">Sign In</a>
        <a href="home"class="active" >Register</a>
      </div>
    </div>
  );
}
