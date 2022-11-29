import React from "react";
import BKGContact from "../assets/contact.png";

export const HeaderContact = ({ title, subtitle }) => {
  return (
    <div className="header-contact">
      <div className="header-contact-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
