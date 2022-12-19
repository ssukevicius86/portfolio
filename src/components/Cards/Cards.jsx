import React from "react";
import styles from "./styles/Cards.module.css";

import card1Pr from "../../Media/card1Pr.jpg";
import card2Pr from "../../Media/card2Pr.jpg";
import card3Pr from "../../Media/card3Pr.jpg";
import card4Pr from "../../Media/card4Pr.jpg";

function Cards() {
  return (
    <div className={styles.containerCards}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> Mis Proyectos</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <img src={card1Pr} alt="img proyecto 1" />
            </div>
            <div>
              <h2 className={styles.nombre}>Proyecto 1</h2>
              <p className={styles.parrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src={card2Pr} alt="img proyecto 2" />
            </div>
            <div>
              <h2 className={styles.nombre}>Proyecto 2</h2>
              <p className={styles.parrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src={card3Pr} alt="img proyecto 3" />
            </div>
            <div>
              <h2 className={styles.nombre}>Proyecto 3</h2>
              <p className={styles.parrafo}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src={card4Pr} alt="img proyecto 4" />
            </div>
            <div>
              <h2 className={styles.nombre}>Proyecto 4</h2>
              <p className={styles.parrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
