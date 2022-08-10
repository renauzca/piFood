import React from "react";
import { Link } from "react-router-dom";
import "./css/ladingPage.css";
import ReactPlayer from "react-player"
import video from "../componets/videos/landing.gif"

export default function LandingPage() {
  return (
    <div className="fondoLanding">

      {/* <div style={{ width:"60%", 
      height:"80%", position: "absolute"}}>

     <ReactPlayer 
     url={video}
     width= "100%"
     height="100%"
 
     loop
     playing
     />
      </div> */}

      <div className="botonEfecto">
       
             <div  className="btn-neon">
          <Link to="/home">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            <button className="botonIngresar">Ingresar</button>
          </Link>
          </div>
        
      </div>
    </div>
  );
}
