import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Sukevicius Samanta </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
      </div>
      <div className="footer-contact">
        <h3>CONTACTO</h3>
        <p> Mail: ssukevicius@outlook.com </p>
      </div>
      <div className="footer-sns">
        <div className="design-by"></div>
        diseñado por Sukevicius Samanta
      </div>
      <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="=fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank"rel="noreferrer">
              <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="=fab fa-facebook facebook"></i>
          </a>
      </div>
    </footer>
  );
};

export default Footer;
