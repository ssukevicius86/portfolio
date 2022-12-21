import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Academicos, Experiencia, Home } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/academicos" element={<Academicos />} />
        <Route path="/experiencia" element={<Experiencia />} /> }
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
