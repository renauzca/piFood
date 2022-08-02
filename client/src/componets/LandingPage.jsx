import React from "react";
import { Link } from "react-router-dom";
import "./css/ladingPage.css";

export default function LandingPage() {
  return (
    <div className="fondoLanding">
      
        <h1 className="welcome">Welcome</h1>
     

      <div className="botonEfecto">
        <a href="#" className="btn-neon">
          <Link to="/home">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            <button className="botonIngresar">Ingresar</button>
          </Link>
        </a>
      </div>
    </div>
  );
}
