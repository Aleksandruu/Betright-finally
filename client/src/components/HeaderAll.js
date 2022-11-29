import React from "react";
import BKGALL from "../assets/BKGALL.svg";
import { Navbar } from "../components/Navbar";

export const HeaderAll = ({ title, subtitle }) => {
  return (
    <div className="header-all">
      <img src={BKGALL}></img>
      <div className="header-all-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
