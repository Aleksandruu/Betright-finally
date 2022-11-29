import React from "react";

export const PlusButton = ({ onClick }) => {
  return (
    <div className="plus" onClick={onClick}>
      <p>+</p>
    </div>
  );
};
