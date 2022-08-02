import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../actions/actions";
import "./css/detail.css";

export default function Detail(props) {
  //const {id} = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const receta = useSelector((state) => state.recetaDetail);

  const descript = receta.summary;
  return (
    <div className="detailFondoAll">
      <div className="contenedorDetail">

      <h1 className="tituloDetail">{receta.name}</h1>
        <div className="contenedorGrid">
        <div className="izquierdoArriba">
          

          <h2>Dish type:</h2>
          <ul>
            {receta.dishTypes?.map((e) => {
              return <p>{e}</p>;
            })}
          </ul>

          <h2>Type Diets:</h2>
          <ul>
            {receta.typeDiets?.map((e) => {
              return <p>{e}</p>;
            })}
          </ul>
        </div>

        <div className="imageDetail">
          <img src={receta.image} alt="error al cargar la imagen" />
          <div className="HelSco">
          <h4>Health Score : {receta.healthScore}</h4>
          </div>
         
        </div>
            </div>
       
        <h2>Instructions: </h2>

        <p className="textabajo">{receta.instructions}</p>

        <h2>Summary</h2>
        <p className="textabajo" dangerouslySetInnerHTML={{ __html: descript }} />

        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}
