import React from "react";
import { Button } from "./Button";

export const Meci = ({ meci, data, ponturi }) => {
  




  return (
    <div className="meci">
      <h2 className="meci-name">{meci}</h2>
      <div className="meci-details">
        <p>{data}</p>
        <p>{ponturi} ponturi</p>
      </div>
      <div className="meci-buttons">
        <Button
          color={"#00b300"}
          text="Vezi toate ponturile"
          link={"/ponturi"}
        ></Button>
        <Button color={"#00b300"} text="Posteaza un pont"></Button>
      </div>
    </div>
  );
};
