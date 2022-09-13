import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllRecipes, {
  borrarDetail,
  filterGetType,
  ordenForName,
  orderForScore,
} from "../actions/actions";
import Card from "../componets/Card";
import Wrapper from "../componets/Wrapper";
import SerchBar from "./SerchBar";
import "./css/home.css";
import { Link } from "react-router-dom";
import Cargando from "./Cargando";
import ErrorSerchBar from "../componets/ErrorSerchBar";

export default function Home() {
  let recipes = useSelector((state) => state.receta);

  //---------------------------------------------------------------------------
  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecipe, setCurrentRecipe /*eslint-disable-line*/] = useState(9);

  let latestIndex = currentPage * currentRecipe;

  let firstIndex = latestIndex - currentRecipe;

  let currentRecipes = recipes.slice(firstIndex, latestIndex);

  let paginado = (numPagina) => {
    setCurrentPage(numPagina);
  };

  //---------------------------------------------

  const [order /*eslint-disable-line*/, setOrder] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    recipes.length === 0 && dispatch(getAllRecipes());
  }, [dispatch]);

  //-----------------------------------------------------------------------------

  useEffect(() => {
    dispatch(borrarDetail());
  }, [dispatch]);

  //---------------------------------------------------------------------------------
  const reseteo = (e) => {
    dispatch(getAllRecipes(e));
    setCurrentPage(1);
    window.location.replace("");
  };

  const handlerType = (e) => {
    e.preventDefault();
    dispatch(filterGetType(e.target.value));
    setCurrentPage(1);
  };

  const handlerOrderScore = (e) => {
    e.preventDefault();
    dispatch(orderForScore(e.target.value));
  };
  const handlerOrderName = (e) => {
    e.preventDefault();
    dispatch(ordenForName(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`);
  };

  const errorSerchBar = useSelector((state) => state.errores);

  return (
    <div className="home">
      <div className="parteIzquierda">
        {/* <BarraVideo/> */}
        <button onClick={(e) => reseteo(e)}>Reset</button>
        <Link to="/create">
          <button>Create recipe</button>
        </Link>

        {errorSerchBar.length === 0 ? (
          <SerchBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
        ) : (
          <ErrorSerchBar errorSerchBar={errorSerchBar} />
        )}

        <div>
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => handlerOrderName(e)}
          >
            <option value="DEFAULT" disabled="disabled">
              -- Sort by name --
            </option>
            <option key="67" value="asc">
              Z-A
            </option>
            <option key="98" value="des">
              A-Z
            </option>
          </select>
        </div>

        <div>
          <select
           
            onChange={(e) => handlerOrderScore(e)}
          >
            <option disabled="disabled" selected="selected">
              -- Sort by Health Score --
            </option>
            <option key="44" value="de + a -">
              From lowest to highest 
            </option>
            <option key="77" value="de - a +">
              From highest to lowest
            </option>
          </select>
        </div>

        <div>
          <select onChange={(e) => handlerType(e)}>
            <option disabled="disabled" selected="selected">
              -- Sort by diet --
            </option>
           
            <option key="1" value="paleolithic">
              Paleolithic
            </option>
            <option key="3" value="fodmap friendly">
              Fodmap friendly
            </option>
            <option key="2" value="pescatarian">
              Pescatarian
            </option>
            <option key="4" value="primal">
              Primal
            </option>
            <option key="5" value="dairy free">
              Dairy free
            </option>
            <option key="6" value="whole 30">
              Whole 30
            </option>
            <option key="7" value="gluten free">
              Gluten free
            </option>
            <option key="8" value="vegan">
              Vegan
            </option>
            <option key="9" value="ketogenic">
              Ketogenic
            </option>
            <option key="10" value="lacto ovo vegetarian">
              Lacto ovo vegetarian
            </option>
          </select>
        </div>
      </div>

      <div className="ordenadoDeCards">
        {currentRecipes.length ? (
          currentRecipes?.map((e) => {
            return (
             
                <Card
                key={e.id}
                id={e.id}
                image={e.image}
                name={e.name}
                dietType={e.typeDiets}
                healthScore={e.healthScore}
              />
             
              
            );
          })
        ) : (
          <Cargando />
        )}
      </div>

      <Wrapper
        className="paginado"
        currentPage={currentPage}
        currentRecipe={currentRecipe}
        recipes={recipes.length}
        paginado={paginado}
      ></Wrapper>
    </div>
  );
}
