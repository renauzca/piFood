import React, { useEffect, useState } from "react";
import "./css/form.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, getDiets } from "../actions/actions";

export default function Form() {
  const dispatch = useDispatch();
  let stateDiets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const [estadoG, setEstadoG] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: 1,
    instructions: "",
    typeDiets: [],
  });

  //validaciones

  const expresiones = {
    numeros: / *([.0-9])*\d/g ,  //eslint-disable-line
    caracteresEs: /[\[\\\^\$\.\|\?\*\+\(\)\{\}]/g, //eslint-disable-line
    url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi, //eslint-disable-line
    instru: /^[a-zA-Z0-9_-\s]{4,200}$/, //eslint-disable-line
    numPosi :/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/gm
  };

  const valadationName = ( name ) => {
    if (name.length <= 4) {
      return "Por lo menos debe ingresar 5 letras";
    }
    if(name.length >= 50){
      return "Nombre muy largo, resumelo un poco"
    }
    if (expresiones.caracteresEs.test(name)) {
      return "no pueden haber caracteres especiales";
    }
    if (expresiones.numeros.test(name)) {
      return "no pueden ser numeros";
    }
  };

  const valadationImage = ( image ) => {
    if (!expresiones.url.test(image)) {
      return "ingrese un link valido para la imagen";
    }
  };

  const validationHS = (healthScore ) => {
    if(!expresiones.numPosi.test(healthScore)){
      return "solo se permiten numeros"
    }
    if (healthScore <= 1) {
      return "El nivel de comida saludable debe ser mayor a 1";
    }
  };

  const validationSummary = (summary ) => {
    if(summary.length >= 200){
      return "muy largo tu summary"
    }
    if (expresiones.caracteresEs.test(summary)) {
      return "no pueden haber caracteres especiales";
    }
    if (expresiones.numeros.test(summary)) {
      return "no pueden haber numeros";
    }
  };

  const validationInstructions = (instructions ) => {
    if(instructions.length>= 250){
      return "son muchos pasos"
    }
    if (!expresiones.instru.test(instructions)) {
      return "Minimo 4 caracteres y solo se acepta Letras, numeros, guion y guion_bajo";
    }
  };

  const validationDiets = (diets)=>{
    if(diets.length < 1 ) return "minimo selecciona una dieta"
  }

  const errorMsgName = valadationName(estadoG.name);
  const errorMsgImage = valadationImage(estadoG.image);
  const errorMsgHS = validationHS(estadoG.healthScore);
  const errorSummary = validationSummary(estadoG.summary);
  const errorMsgInstructions = validationInstructions(estadoG.instructions);
  const errorMsgDiets = validationDiets(estadoG.typeDiets)


  const validacion = (errorName, errorImg, errorHS, errorSum, errorInstr, errorDiets)=>{
    if(errorName === undefined && errorImg=== undefined && errorHS===undefined && errorSum === undefined && errorInstr === undefined && errorDiets === undefined){
      return undefined
    } else{
      return null
    }
  }


  const validacionBoton = validacion(
   errorMsgName,
   errorMsgImage,
   errorMsgHS ,
   errorSummary ,
   errorMsgInstructions,
   errorMsgDiets
  )
  ///////

  const handlerBoton = (e) => {
    e.preventDefault();

    if(validacionBoton !== undefined){
      return alert("no no, crea bien")
    } else{

      dispatch(createRecipe(estadoG));
      alert("creado");
      setEstadoG({
        name: "",
        image: "",
        summary: "",
        healthScore: 0,
        instructions: "",
        typeDiets: [],
      });
    }


  };

  const handlerAll = (e) => {
    setEstadoG({
      ...estadoG,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSelectDiets = (e) => {
    if (!estadoG.typeDiets.includes(e.target.value)) {
      setEstadoG({
        ...estadoG,
        typeDiets: [...estadoG.typeDiets, e.target.value],
      });
    }
  };

  const handlerDelete = (e) => {
    setEstadoG({
      ...estadoG,
      typeDiets: estadoG.typeDiets.filter((el) => el !== e),
    });
  };

  return (
    <div className="xdx">
      <Link to="/home">
        <button>Home</button>
      </Link>

      {/* <div className="titulo">
        <h1 className="titulo">Crea tu receta favorita</h1>
      </div> */}

      <div className="campos">
        <form onSubmit={(e) => handlerBoton(e)}>
          <div>
          <h2 className="name">Name</h2>
          <input
            className="barra"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={estadoG.name}
            onChange={(e) => handlerAll(e)}
          
            autoComplete="off"
          />
          {estadoG.name ? <p>{errorMsgName}</p> : ""}
          </div>
          

          <div>
          <h2 className="name">img</h2>
          <input
            className="barra"
            name="image"
            type="text"
            placeholder="Image"
            id="image"
            value={estadoG.image}
            onChange={(e) => handlerAll(e)}
            autoComplete="off"
          />
          {estadoG.image ? <p>{errorMsgImage}</p> : ""}
          </div>

          <div>
          <h2 className="name">Health score</h2>
          <input
            type="range"
            placeholder="Health score"
            className="barra"
            name="healthScore"
            id="healthScore"
            value={estadoG.healthScore}
            autoComplete="off"
            min={1}
            max={100}
            onChange={(e) => handlerAll(e)}
          />
          <p>{estadoG.healthScore}</p>

          {estadoG.healthScore ? <p>{errorMsgHS}</p> : ""}
          </div>
  
          <div className="escritura">
            <h2 className="name">Summary</h2>
            <textarea
              name="summary"
              id="summary"
              cols="30"
              rows="10"
              placeholder="Summary"
              value={estadoG.summary}
              onChange={(e) => handlerAll(e)}
         
            ></textarea>

            {estadoG.summary ? <p>{errorSummary}</p> : ""}
          </div>

          <div>
            <h2 className="name">instructions</h2>
            <textarea
              name="instructions"
              id="instructions"
              cols="30"
              rows="10"
              placeholder="Step to Step"
              value={estadoG.instructions}
              onChange={(e) => handlerAll(e)}
            ></textarea>
            {estadoG.instructions ? <p>{errorMsgInstructions}</p> : ""}
          </div>


          <div>
          <h2 className="name">Elige la dieta de tu plato</h2>
          <select onChange={(e) => handlerSelectDiets(e)}>
            <option  selected="selected">
              -- Opciones: --
            </option>
            {stateDiets.map((e) => {
               if(!estadoG.typeDiets.includes(e))
              return (
                <option key={e} value={e}>
                  {" "}
                  {e}
                </option>
              );
            })}
          </select>

          {estadoG.typeDiets? <p>{errorMsgDiets}</p> : ""}
          </div>

          

          <div className="dietaSeleccionada">
            <p className="pSeleccionada">
              {estadoG.typeDiets.map((e) => {
                return (
                  <div>
                    <p>
                      {e}
                      <button key={e} onClick={() => handlerDelete(e)}>
                        X
                      </button>
                    </p>
                  </div>
                );
              })}{" "}
            </p>
          </div>
          <button type="submit" disabled={validacionBoton}>Create</button>
        </form>
      </div>
    </div>
  );
}
