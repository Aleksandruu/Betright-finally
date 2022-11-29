import React from "react";
import { Accuracy } from "./Accuracy";
import { Cota } from "./Cota";

export const Pont = ({
  id,
  name,
  accuracy,
  ponturi,
  meci,
  date,
  comment,
  pronostic,
  postDate,
  cota,
  pont
}) => {
  return (
    <>
      <div className="pont">
        <div className="profile-details">
          <div className="profile"></div>
          <h3>{name}</h3>
          <p>Acuratete:{accuracy}%</p>
          <Accuracy percentage={accuracy}></Accuracy>
          <p>Ponturi:{ponturi}</p>
        </div>
        <div className="pont-details">
          <h2 className="pont-meci">{meci}</h2>
          <p className="pont-date">{date}</p>
          <p>{comment}</p>
          <div className="horizontal-line"></div>
          <p className="pronostic">{pronostic}</p>
        </div>
        <p className="post-date">Postat pe {postDate}</p>
        <Cota cota={cota}></Cota>
      </div>
    </>
  );
};
