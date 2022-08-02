// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SerchBar from "./SerchBar";
// import { useDispatch } from "react-redux";
// import getAllRecipes, { ordenForName, orderForScore } from "../actions/actions";
// import { filterGetType } from "../actions/actions";
// import "./css/navBar.css"


// export default function NavBar({setCurrentPage,setOrder}){
//     const [orden, setOrden] = useState("")

//     const dispatch = useDispatch()


//     const reseteo = (e)=>{
//         dispatch(getAllRecipes(e))
//         setCurrentPage(1)
//     }

//     const handlerType = (e)=>{
//         e.preventDefault()
//         dispatch(filterGetType(e.target.value))
//         setCurrentPage(1)
//     }

//     const handlerOrderScore = (e)=>{
//         e.preventDefault()
//         dispatch(orderForScore(e.target.value))
//     }
//     const handlerOrderName = (e)=>{
//         e.preventDefault()
//         dispatch(ordenForName(e.target.value))
//         setCurrentPage(1)
//         setOrden(`ordenado ${e.target.value}`)
//     }



//     return (

//     <div className="navBar">


//     <div className="botones">
//         <Link to="/"><button>Inicio</button></Link>
//     </div>
    

//    <div >
//         <SerchBar setCurrentPage={setCurrentPage} setOrder={setOrder}/>
//    </div>

    
//     <div>
//         <button onClick={e=>reseteo(e)}>Reset</button>
//     </div>

//     <div>
//         <Link to="/create"><button>Crear receta</button></Link>
//     </div>

//     <div>
//         <select onChange={(e)=> handlerOrderName(e)}>
//             <option>Ordenar por nombre:</option>
//             <option value="asc">Ascendente</option>
//             <option value="des">Descendente</option>
//             <option value="todos">All</option>
//         </select>
//     </div>

//     <div>
//         <select onChange={(e)=> handlerOrderScore(e)}>
//             <option>Ordenar por Health Score:</option>
//             <option value="de + a -">De mayor a menor</option>
//             <option value="de - a +">De menor a mayar</option>
//         </select>
//     </div>

//     <div>
//         <select onChange={(e)=>handlerType(e)}>
//             <option>Buscar por dieta:</option>
//             <option value="todos">All</option>
//             <option value="paleolithic">Paleolithic</option>
//             <option value="fodmap friendly">Fodmap friendly</option>
//             <option value="pescatarian">Pescatarian</option>
//             <option value="primal">Primal</option>
//             <option value="dairy free">Dairy free</option>
//             <option value="whole 30">Whole 30</option>
//             <option value="gluten free">Gluten free</option>
//             <option value="vegan">Vegan"</option>
//             <option value="ketogenic">Ketogenic</option>
//             <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
//         </select>
//     </div>



   


//     </div>
       
//     )
// }