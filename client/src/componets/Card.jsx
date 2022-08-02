import React from "react";
import "./css/card.css"


export default function Card({image, name, dietType, id, healthScore}){
    return (
        <div className="card"key={id} alt="img">
                <h2>{name}</h2>
                <img src={image} alt="estamos buscando tu imagen"/>
                <div className="fondoDeCard">
                <h4>Diet Type:</h4><p>{dietType.map(e=>{
                    return e + ", "
                })}</p>
                <h4>healthScore: </h4> <p>{healthScore}</p>
                </div>
                
        </div>
    )
}


