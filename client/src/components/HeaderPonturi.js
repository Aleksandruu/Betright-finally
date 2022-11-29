import React from "react";
import { Navbar } from "../components/Navbar";

export const HeaderPonturi = ({ title, subtitle }) => {
  return (
    <div className="header-ponturi">
      <div className="header-ponturi-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
