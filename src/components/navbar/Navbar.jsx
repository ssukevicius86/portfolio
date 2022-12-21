import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        <a className="navEnlace" onClick={() => navigate("/")}>
          <h2> Sukevicius Samanta </h2>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
