import React from "react";
import "./CoverAcademicos.css";
import academico from "../../Media/academico.mp4";

const CoverAcademicos = () => {
  return (
    <div className="cover-container">
      <video className="video" src={academico} autoPlay loop muted />
      <h1>Sukevicius Samanta</h1>
      <p>Arquitecta | Pofesora | Developers</p>
    </div>
  );
};

export default CoverAcademicos;
