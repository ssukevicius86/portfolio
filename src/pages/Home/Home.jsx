import React, { useEffect, useState } from "react";
import { About, Cards, Cover, Footer, Info, Navbar } from "../../components";
import "./styles/Home.module.css";

const Home = () => {
  // se usa cero en useState pq es donde inicia la pagina
  const [scrollHeight, setScrolHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Cards />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
