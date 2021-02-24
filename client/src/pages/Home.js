import React from "react";
import { Link } from "react-router-dom";
import fondo from "../imges/pencil-1891732_1920.jpg";

import "./Home.css";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <img src={fondo} alt="" id="imagen" />
      </div>
      <div className="row overlay">
        <Link to="/list" className="btn btn-outline-secondary" id="texto">
          Empezar
        </Link>
      </div>
    </div>
  );
}
