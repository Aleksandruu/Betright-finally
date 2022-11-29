import React from "react";
import BKGTipsteri from "../assets/tipsteri.png";
import { Navbar } from "../components/Navbar";

export const HeaderTipsteri = ({ title, subtitle }) => {
  return (
    <div className="header-tipsteri">
      <div className="header-tipsteri-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
