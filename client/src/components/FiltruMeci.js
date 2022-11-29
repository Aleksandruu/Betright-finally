import React from "react";

export const FiltruMeci = () => {
  return (
    <div className="filtru-pont">
      <h2>Filtreaza Meciurile</h2>
      <p>Intervalul in care se joaca meciul:</p>
      <form>
        <div className="inputs">
          <div className="input-label">
            <label>Data inceput:</label>
            <input type={"date"} className="filter-input-date"></input>

            <label>Data sfarsit:</label>
            <input type={"date"} className="filter-input-date"></input>
          </div>
            <label>Numar de ponturi:</label>
            <input type={"number"} min={"0"} className="filter-input-ponturi"></input>

            <label>Sport:</label>
            <select name="sport" id="sport" className="filter-select">
              <option value={"Fotbal"}>Fotbal</option>
              <option value={"Basket"}>Basket</option>
              <option value={"Tenis"}>Tenis</option>
              <option value={"MMA"}>MMA</option>
              <option value={"Handbal"}>Handbal</option>
              <option value={"Rugby"}>Rugby</option>
              <option value={"Esports"}>Esports</option>
              <option value={"Voley"}>Voley</option>
              <option value={"Dart"}>Dart</option>
            </select>
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
