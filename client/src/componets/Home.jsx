import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllRecipes, { borrarDetail, filterGetType, ordenForName, orderForScore } from "../actions/actions";
import Card from "../componets/Card";
import Wrapper from "../componets/Wrapper"
import SerchBar from "./SerchBar";
import "./css/ladingPage.css"
import "./css/home.css"
import { Link } from "react-router-dom";
import Cargando from "./Cargando";
import ErrorSerchBar from "../componets/ErrorSerchBar";



export default function Home(){
    let selector = useSelector(state=> state.receta)
    //const [orden, setOrden] = useState("")
    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [currentRecipe, setCurrentRecipe /*eslint-disable-line*/ ] = useState(9)

    let latestIndex = currentPage* currentRecipe;

    let firstIndex = latestIndex - currentRecipe;

    let currentRecipes = selector.slice(firstIndex, latestIndex);

    let paginado = (numPagina) =>{
        setCurrentPage(numPagina)
    }

    //---------------------------------------------

    const [order/*eslint-disable-line*/ , setOrder] = useState("")
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllRecipes())
    }, [dispatch])



    //-----------------------------------------------------------------------------


    useEffect(()=>{
        dispatch(borrarDetail())
    }, [dispatch])









    //---------------------------------------------------------------------------------
    const reseteo = (e)=>{
        dispatch(getAllRecipes(e))
        setCurrentPage(1)
        window.location.replace('');
    }

    const handlerType = (e)=>{
        e.preventDefault()
        dispatch(filterGetType(e.target.value))
        setCurrentPage(1)
    }

    const handlerOrderScore = (e)=>{
        e.preventDefault()
        dispatch(orderForScore(e.target.value))
    }
    const handlerOrderName = (e)=>{
        e.preventDefault()
        dispatch(ordenForName(e.target.value))
        setCurrentPage(1)
        setOrder(`ordenado ${e.target.value}`)
    }



     const errorSerchBar = useSelector(state => state.errores)
     







    return (
        <div className="home">

            <div className="parteIzquierda">
                  
                        <button onClick={e=>reseteo(e)}>Reset</button>
                        <Link to="/create"><button>Crear receta</button></Link>

                        {errorSerchBar.length === 0? <SerchBar setCurrentPage={setCurrentPage} setOrder={setOrder}/> : <ErrorSerchBar errorSerchBar={errorSerchBar} />}
                        
                    

                    <div>
                        <select onChange={(e)=> handlerOrderName(e)}>
                        <option disabled="disabled" selected="selected">
              -- Ordenar por nombres --
            </option>
                            <option value="asc">Ascendente</option>
                            <option value="des">Descendente</option>
                          
                        </select>
                    </div>

                    <div>
                        <select onChange={(e)=> handlerOrderScore(e)}>
                            
                            <option disabled="disabled" selected="selected">
              -- Ordenar por Health Score --
            </option>
                            <option value="de + a -">De menor a mayor</option>
                            <option value="de - a +">De mayor a menor</option>
                        </select>
                    </div>

                    <div>
                        <select onChange={(e)=>handlerType(e)}>
                        <option disabled="disabled" selected="selected">
              -- Buscar por dieta --
            </option>
                            <option value="paleolithic">Paleolithic</option>
                            <option value="fodmap friendly">Fodmap friendly</option>
                            <option value="pescatarian">Pescatarian</option>
                            <option value="primal">Primal</option>
                            <option value="dairy free">Dairy free</option>
                            <option value="whole 30">Whole 30</option>
                            <option value="gluten free">Gluten free</option>
                            <option value="vegan">Vegan"</option>
                            <option value="ketogenic">Ketogenic</option>
                            <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                        </select>
                    </div>

            </div>



                    
            <div >
                                {
                                    currentRecipes.length?
                                currentRecipes?.map(e=>{
                                        return(
                                            <Link to={`recipes/${e.id}`}>
                                    <Card 
                                    id={e.id}
                                    key={e.id}
                                    image={e.image} 
                                    name={e.name} 
                                    dietType={e.typeDiets}
                                    healthScore={e.healthScore} /></Link>
                                    
                                )
                            }):<Cargando/>
                            
                            }
            </div>

                        <Wrapper className="paginado" currentRecipe={currentRecipe} selector={selector.length} paginado={paginado}></Wrapper>


        </div>
    )
}