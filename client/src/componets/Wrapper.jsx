import React from "react";
//import "./css/logicaPaginado.css"
import "./css/wrapper.css"
export default function Wrapper({currentRecipe, selector, paginado}){

const numPagina = []
for(let i=1; i<= Math.ceil(selector/currentRecipe); i++){
    numPagina.push(i)
}

    return (
        <nav>
        <div className="paginado">
          {numPagina && numPagina.map((e) => (
            <div key={e}>
                <button onClick={() => paginado(e)}>{e}</button>
            </div>
          ))}
        </div>
      </nav>
    );
};