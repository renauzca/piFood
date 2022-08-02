import React from "react";
import "./css/errorSerchBar.css";
import { useDispatch } from "react-redux";
import { deleteError } from "../actions/actions";

export default function ErrorSerchBar({ errorSerchBar }) {
  let dispatch = useDispatch();
  const handlerBoton = () => {
    if (errorSerchBar.length !== 0) {
      dispatch(deleteError());
    }
  };
  return (
    <div className="fondoErrorSerchBar">
      <div>
        <h2 className="error404">ERROR 404, BUSQUE BIEN PAPITO</h2>
        <button onClick={handlerBoton}> intentar nuevamente</button>
      </div>
    </div>
  );
}
