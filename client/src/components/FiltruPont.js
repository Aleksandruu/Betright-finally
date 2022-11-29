import React from "react";

export const FiltruPont = () => {
  return (
    <div className="filtru-pont">
      <h2>Filtreaza Ponturile</h2>
      <form>
        <div className="inputs">
          <div className="input-label">
            <label>Ponturi de la tipsteri cu acuratete mai mare de:</label>
            <input
              type={"number"}
              min="0"
              max="100"
              className="filter-input"
            ></input>
          </div>
          <div className="input-label">
            <label>Ponturi cu cota mai mare de:</label>
            <input type={"number"} min="0" className="filter-input"></input>
          </div>
        </div>
        <input
          type={"submit"}
          value="Filtreaza rezultatele"
          className="input-button"
        ></input>
      </form>
    </div>
  );
};
