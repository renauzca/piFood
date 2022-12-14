import React from "react";
import "./css/errorSerchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteError } from "../actions/actions";

export default function ErrorSerchBar({ errorSerchBar }) {
  const errorSerch = useSelector(state => state.errores)
  let dispatch = useDispatch();
  const handlerBoton = () => {
    if (errorSerchBar.length !== 0) {
      dispatch(deleteError());
    }
  };
  return (
    <div >
      <div>
        <h2 className="error404">ERROR 404, Try searching again</h2>

        <button onClick={handlerBoton}> Try again</button>
      </div>
    </div>
  );
}
