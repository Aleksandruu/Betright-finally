import React from "react";

export const Accuracy = ({ percentage }) => {
  return (
    <div
      className="bar-red"
      style={{
        width: "100px",
        height: "6px",
        borderRadius: "3px",
        background: "red",
        overflow: "hidden",
      }}
    >
      <div
        className="bar-green"
        style={{
          position: "relative",
          left: "0",
          top: "0",
          width: `calc(${percentage}px)`,
          height: "6px",
          borderRadius: "3px 0 0 3px",
          background: "green",
        }}
      ></div>
    </div>
  );
};
