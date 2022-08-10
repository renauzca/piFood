import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuery } from "../actions/actions";
import "../componets/css/serchBar.css";

export default function SerchBar({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    if(search.length <= 0){
      alert("debes escribir algo para buscar ")
    } else{
      dispatch(getQuery(search));
      setCurrentPage(1);
      setOrder(`order${e.target.value}`);
      setSearch("") 
    }
    setSearch("")
  };

  const handlerSerch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="buscador"
        type="text"
        placeholder="Busca tu receta favorita"
        onChange={(e) => handlerSerch(e)}
      />
      <button className="cursor" type="submit"  onClick={(e) => handleName(e)} >
        Buscar
      </button>
    </div>
  );
}
