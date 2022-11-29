import React from "react";

export const FiltruTipsteri = () => {
  return (
    <div className="filtru-pont">
      <h2>Filtreaza Tipsterii</h2>
      <form>
        <div className="inputs">
          <div className="input-label">
            <label>Tipsteri cu acuratete mai mare de:</label>
            <input
              type={"number"}
              min="0"
              max="100"
              className="filter-input"
            ></input>
          </div>
          <div className="input-label">
            <label>Tipsteri cu numar de ponturi mai mare de:</label>
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
