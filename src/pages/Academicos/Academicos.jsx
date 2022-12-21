import React, { useEffect, useState } from "react";
import { Cover, Navbar } from "../../components";
// import academicosImg from "../../Media/academicosImg.jpg";
import styles from "./styles/Academicos.module.css";
import img3 from "../../assets/images/imagen3.jpg";

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
      <div className={styles.academicos}>
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        <header>
          <h3>Logros academicaos</h3>
        </header>
        <div className={styles.body}>
          <div>
            <h2>Sobre mis logros...</h2>
            <article>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur laudantium magnam, quas ullam similique expedita illum
              debitis? Ullam odio expedita optio, pariatur ipsum eaque aperiam
              at molestiae, provident harum dolor.
            </article>
          </div>
          <div className={styles.titulos}>
            <img src={img3} alt="titulo secundario" />
            <div className="{styles.textoTitulos}">
              <h3>Titulo secundario</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                maxime aspernatur explicabo ipsa, alias mollitia distinctio,
                enim quidem ad possimus, earum voluptate placeat minima atque
                perspiciatis quaerat voluptates. Laboriosam, cum.
              </p>
            </div>
          </div>
          <div className={styles.titulos}>
            <img src={img3} alt="titulo secundario" />
            <div className="{styles.textoTitulos}">
              <h3>Titulo secundario</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                maxime aspernatur explicabo ipsa, alias mollitia distinctio,
                enim quidem ad possimus, earum voluptate placeat minima atque
                perspiciatis quaerat voluptates. Laboriosam, cum.
              </p>
            </div>
          </div>
          <div className={styles.titulos}>
            <img src={img3} alt="titulo secundario" />
            <div className="{styles.textoTitulos}">
              <h3>Titulo secundario</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                maxime aspernatur explicabo ipsa, alias mollitia distinctio,
                enim quidem ad possimus, earum voluptate placeat minima atque
                perspiciatis quaerat voluptates. Laboriosam, cum.
              </p>
            </div>
          </div>
          <div className={styles.titulos}>
            <img src={img3} alt="titulo secundario" />
            <div className="{styles.textoTitulos}">
              <h3>Titulo secundario</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                maxime aspernatur explicabo ipsa, alias mollitia distinctio,
                enim quidem ad possimus, earum voluptate placeat minima atque
                perspiciatis quaerat voluptates. Laboriosam, cum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academicos;
