import React from "react";
import "./Info.css";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div className="info-container">
      <div className="info">
        <h1>Experiencia laboral</h1>
        <button>
          {/* {" "} */}+
          <a className="navEnlace" onClick={() => navigate("./")}></a>
        </button>

        <div></div>
      </div>
    </div>
  );
};

export default Info;
