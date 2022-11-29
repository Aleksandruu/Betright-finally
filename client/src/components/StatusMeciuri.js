import React from "react";

export const StatusMeciuri = ({ title, subtitle }) => {
  return (
    <div className="meci-boxes">
      <div className="meci-box-1">
        <div className="meci-text-box">
          <h1>{title} de meciuri active</h1>
          <h2> ({subtitle} ponturi)</h2>
        </div>
      </div>
    </div>
  );
};
