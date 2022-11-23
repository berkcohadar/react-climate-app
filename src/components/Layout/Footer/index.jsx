import React from "react";
import logo from "assets/logo/logo.png"

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-logo">
        <img src={logo}></img>
      </div>
      <div className="footer-items">
        <div className="footer-item">
          <a href="/" ><span> Home</span></a>
        </div>
        <div className="footer-item">
          <a href="https://www.arbol.io/" target="_blank">Arbol</a>
        </div>
        <div className="footer-item">
          <a href="https://api.dclimate.net/" target="_blank">Climate API</a>
        </div>
      </div>
    </div>
  );
}
