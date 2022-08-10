import React from "react";
import "./css/wrapper.css";
export default function Wrapper({
  currentRecipe,
  recipes,
  paginado,
  currentPage,
}) {
  const numPagina = [];
  for (let i = 1; i <= Math.ceil(recipes / currentRecipe); i++) {
    numPagina.push(i);
  }

  const largoPage = numPagina.length;

  return (
    <nav>
      <div className="paginado">
        <button
          onClick={() =>
            paginado(currentPage === 1 ? currentPage : currentPage - 1)
          }
        >
          {`<`}
        </button>

        {numPagina &&
          numPagina.map((e) => {
            return (
              <button
                key={e}
                onClick={() => paginado(e)}
                className={e === currentPage ? "actual" : "reset"}
              >
                {e}
              </button>
            );
          })}

        <button
          onClick={() =>
            paginado(currentPage === largoPage ? currentPage : currentPage + 1)
          }
        >{`>`}</button>
      </div>
    </nav>
  );
}
