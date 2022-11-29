import React from "react";
import { Navbar } from "../components/Navbar";

export const HeaderSingleBlog = ({ title }) => {
  return (
    <div className="header-single-blog">
      <div className="header-single-blog-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};
