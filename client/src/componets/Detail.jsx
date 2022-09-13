import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../actions/actions";
import "./css/detail.css";
import Error from "../componets/Error";
import Cargando from "../componets/Cargando";

export default function Detail(props) {
  let detailRecipe = useSelector((state) => state.recetaDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const receta = useSelector((state) => state.recetaDetail);
  const errorGetDetail = useSelector((state) => state.errores);

  const descript = receta.summary;
  return (
    <div className="detailFondoAll">
      {!receta ? (
        <Cargando />
      ) : (
        <div className="contenedorDetail">
          <h1 className="tituloDetail">{detailRecipe.name}</h1>
          <div className="contenedorGrid">
            <div className="izquierdoArriba">
              <h2>Dish type:</h2>
              <ul>
                {detailRecipe.dishTypes?.map((e) => {
                  return <p key={e}>{e}</p>;
                })}
              </ul>

              <h2>Diet Type:</h2>
              <ul>
                {detailRecipe.typeDiets?.map((e) => {
                  return <p key={e}>{e}</p>;
                })}
              </ul>
            </div>

            <div className="imageDetail">
              <img src={detailRecipe.image} alt="error al cargar la imagen" />
              <div className="HelSco">
                <h4>Health Score : {detailRecipe.healthScore}</h4>
              </div>
            </div>
          </div>

          <h2>Instructions: </h2>

          <p className="textabajo">{detailRecipe.instructions}</p>

          <h2>Summary</h2>
          <p
            className="textabajo"
            dangerouslySetInnerHTML={{ __html: descript }}
          />

          <Link to="/home">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}
