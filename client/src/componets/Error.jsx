import React from "react";
import { Link } from "react-router-dom"

export default function Error(){
    return (
        <>
        <h2>ERROR 404 : AL ESCRIBIR TU LINK</h2>
        <Link to="/"> 
            <button>Volver</button>
        </Link>
        </>
    )
}