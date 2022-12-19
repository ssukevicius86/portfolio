import "./About.css";
import aboutImg from "../../Media/aboutImg.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Algo sobre mi...</h3>
        <p>
          Soy arquitecta recibida en la facultad de La Plata en el 2015, luego
          realice el Tramo pedagogico para dar clases en colegios tecnicos.
          Tambien estudie en la facultad de bellas artes el profesorado de Artes
          plasticas con orientacion a Escenografia. Actualmente estoy realizando
          la carrera de Técnico superior en Analisis de Sistemas. Realice
          trabajos freelance de sistemas y me encuentro abocada en la busqueda
          de trabajo en el area de sistemas como desarrolladora frontend.
        </p>
        <button>
          <a
            className="navEnlace"
            href="#"
            onClick={() => navigate("/academicos")}
          >
            Logros academicos
          </a>
        </button>
      </div>
      <div className="about-img">
        <img src={aboutImg} alt="About" />
      </div>
    </div>
  );
};

export default About;
