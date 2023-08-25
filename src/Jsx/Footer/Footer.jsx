import React from "react";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <div className="Footer_main">
      <div className="Footer1">
        <ul className="menu">
          <li className="li-text">
            <a
              target="_blank"
              className="A-text"
              href="https://www.instagram.com/belamri_yie/"
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="li-text">
            <a
              target="_blank"
              className="A-text"
              href="https://www.linkedin.com/in/islam-belamri/"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="li-text">
            <a
              target="_blank"
              className="A-text"
              href="https://github.com/YieGin"
            >
              GITHUB
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="li-text">
            <a
              target="_blank"
              className="A-text"
              href="https://codepen.io/yiegin"
            >
              CODEPEN
            </a>
          </li>
        </ul>
      </div>
      <h3>© Copyright 2020 – Yie. All Rights Reserved.</h3>
    </div>
  );
};

export default Footer;
