import React from "react";
import logo from "../../../assets/logo/logo.png"

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-logo">
        <img src={logo}></img>
      </div>
      <div className="footer-items">
        <div className="footer-item">
          <span>Home</span>
        </div>
        <div className="footer-item">
          <span>Climate</span>
        </div>
        <div className="footer-item">
          <span>API</span>
        </div>
      </div>
    </div>
  );
}
