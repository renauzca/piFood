import React from "react";
import { Link } from "react-router-dom";
import "./css/card.css";

export default function Card({ image, name, dietType, id, healthScore }) {
  return (
      <div key={id} alt="img" className="cuerpoCard">
       <figure>
        <img src={image} alt="estamos buscando tu imagen" />
        <div className="capa">
        <h2>{name}</h2>
          <h4>Diet Type:</h4>
          <p>
            {dietType.map((e) => {
              return e + ", ";
            })}
          </p>
          <h4>healthScore: </h4> <p>{healthScore}</p>
          <Link to={`recipes/${id}`}><h3>Detalles</h3></Link>
        </div>
       
       </figure>
        
          
        
      </div>
    
  );
}
