import React from "react";
import Avatar from "../assets/avatar.png"
export const  ProfileCard = ({
  name,
  date,
  profit,
  cotamedie,
  roi,
  ponturiTotal,
  ponturiCastig,
  acuuratete,
  yieldd,
}) => {
  return (
    <div className="profile-card">

      <div className="bg-profile-card"></div>
      <div className="profile-avatar">
        <img src={Avatar}></img>
        <div className="profile-date">
        <h2>{name}</h2>
        <p>Activ de pe {date}</p>
        </div>
      </div>
      <div className="profile-card-info">
        <div className="profile-card-box">
          <p>Profit:</p>
          <h2>{profit}</h2>
        </div>
        <div className="profile-card-box">
          <p>Cota medie:</p>
          <h2>{cotamedie}</h2>
        </div>
        <div className="profile-card-box">
          <p>ROI:</p>
          <h2>{roi}</h2>
        </div>
        <div className="profile-card-box">
          <p>YIELD:</p>
          <h2>{yieldd}</h2>
        </div>
        <div className="profile-card-box">
          <p>Ponturi in total:</p>
          <h2>{ponturiTotal}</h2>
        </div>
        <div className="profile-card-box">
          <p>Ponturi castigatoare:</p>
          <h2>{ponturiCastig}</h2>
        </div>
        <div className="profile-card-box">
          <p>Acuratete:</p>
          <h2>{acuuratete}</h2>
        </div>
      </div>
    </div>
  );
};
