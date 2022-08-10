import React from "react";
import { Link } from "react-router-dom"
import { deleteError } from "../actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Error(){
    let error = useSelector(state=> state.errores)
    let dispatch = useDispatch();
    const handlerBoton = () => {
      if (error.length !== 0) {
        dispatch(deleteError());
      }}
    return (
        <>
        <h2>ERROR 404 : AL ESCRIBIR TU LINK</h2>
        <Link to="/"> 
            <button onClick={handlerBoton}>Volver</button>
        </Link>
        </>
    )
}