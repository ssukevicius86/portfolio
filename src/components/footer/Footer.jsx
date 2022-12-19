import React from "react";
import "./Footer.css";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Sukevicius Samanta </h1>
        <p>
          {" "}
          "Trabajar en equipo divide el trabajo y multiplica los resultados."{" "}
        </p>
      </div>
      <div className="footer-contact">
        <h3>CONTACTO</h3>
        <p> Mail: ssukevicius@outlook.com </p>
      </div>
      <div className="footer-sns">
        <div className="design-by"> Diseñado por Sukevicius Samanta</div>

        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
