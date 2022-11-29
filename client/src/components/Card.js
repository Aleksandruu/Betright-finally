import React from "react";
import { Accuracy } from "./Accuracy";
import { Button } from "./Button";
export const Card = ({
  username,
  date,
  accuracy,
  ponturi,
  profit,
  wins,
  roi,
}) => {
  return (
    <div className="card">
      <div className="card-bg">
        <div className="card-profile">
        </div>
      </div>
      <div className="card-content-all">
        <p className="card-name">{username}</p>
        <p className="card-active">Activ de pe {date}</p>
        <div className="card-content">
          <div className="card-left">
            <p className="card-txt">Acuratete: {accuracy}%</p>
            <Accuracy percentage={accuracy}></Accuracy>
            <p className="card-txt">Ponturi corecte: {wins}%</p>
          </div>
          <div className="line"></div>
          <div className="card-right">
            <p className="card-txt">Ponturi: {ponturi}</p>
            <p className="card-txt">ROI: {roi}</p>
            <p className="card-txt">Profit: {profit}</p>
          </div>
        </div>
        <Button
          className="card-button"
          color="#00d047"
          text={"Vezi Profil"}
          link="/profil"
        ></Button>
      </div>
    </div>
  );
};
