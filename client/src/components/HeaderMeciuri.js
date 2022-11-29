import React from "react";
import BKGMeciuri from "../assets/meciuri.png";
import { Navbar } from "../components/Navbar";

export const HeaderMeciuri = ({ title, subtitle }) => {
  return (
    <div className="header-meciuri">
      <div className="header-meciuri-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
