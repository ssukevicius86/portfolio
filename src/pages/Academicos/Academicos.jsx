import React, { useEffect, useState } from "react";
import { CoverAcademicos, Navbar } from "../../components";
// import academicosImg from "../../Media/academicosImg.jpg";
import styles from "./styles/Academicos.module.css";
import Arquitectura from "../../assets/images/historia academica Arquitectura.png";
import Tecnica from "../../assets/images/instituto.png";
import sanJose from "../../assets/images/san jose.png";
import pdfartes from "../../assets/images/historia_academica.pdf";

const Academicos = () => {
  const [scrollHeight, setScrolHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <>
      <header className={styles.tituloAcademico}>
        <Navbar isScrolling={scrollHeight} />
        <CoverAcademicos />
        <h3>Logros academicos</h3>
      </header>
      <div className={styles.academicos}>
        <div className={styles.body}>
          <div>
            <aside>
              <h2>Sobre mis logros...</h2>
              <ul>
                <li>
                  Graduada en ARQUITECTA Y URBANISTA titulo otorgado por la FAU
                  Universidad nacional de La Plata 2015
                </li>
                <li>
                  Graduda del TRAMO DE FORMACIÓN PEDAGÓGICA PARA PROFESIONALES
                  UNIVERSITARIOS, TÉCNICOS DE NIVEL MEDIO Y SUPERIORES otorgado
                  pot la UTN de Avellaneda
                </li>
                <li>
                  Estudiante de la TECNICATURA SUPERIOR EN ANALISIS DE SISTEMAS
                  en el I.S.F.D. y T. N° 24 - "Quilmes"
                </li>
                <li>
                  Estudiante del PROFESORADO EN ARTES PLASTICAS CON ORIENTACION
                  EN ESCENOGRAFIA en FDA - Universidad Nacional de La PLata
                </li>
              </ul>
            </aside>
          </div>
          <div className={styles.titulos}>
            <img src={sanJose} alt="titulo secundario" />
            <div className={styles.textoTitulos}>
              <h3>Titulo secundario</h3>
              <p>BACHILLER EN CIENCIAS SOCIALES Y HUMANIDADES</p>
              <a href={pdfartes}>Mas</a>
            </div>
          </div>
          <div className={styles.titulos}>
            <img src={Arquitectura} alt="titulo secundario" />
            <div className={styles.textoTitulos}>
              <h3>Titulo Universitario</h3>
              <p>
                Arquitecta Urbanista titulo otorgado por la Facultad de
                Arquitectura de la universidad de la Plata
              </p>
              <a href={pdfartes}>Mas</a>
            </div>
          </div>
          <div className={styles.titulos}>
            <img src={Tecnica} alt="titulo secundario" />
            <div className={styles.textoTitulos}>
              <h3>TRAMO DE FORMACIÓN PEDAGÓGICA </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <a href={pdfartes}>Mas</a>
            </div>
          </div>
          <div className={styles.titulos}>
            <img src={sanJose} alt="titulo secundario" />
            <div className={styles.textoTitulos}>
              <h3>TECNICATURA SUPERIOR EN ANALISIS DE SISTEMAS</h3>
              <p>En curso, 65% de la carrera realizada</p>
              <a href={pdfartes}>Mas</a>
            </div>
          </div>
          <div className={styles.titulos}>
            <img src={sanJose} alt="titulo secundario" />
            <div className={styles.textoTitulos}>
              <h3>TECNICATURA SUPERIOR EN ANALISIS DE SISTEMAS</h3>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <a href={pdfartes}>Mas</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academicos;
