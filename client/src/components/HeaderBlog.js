import React from "react";
import BKGBlog from "../assets/blog.png";
import { Navbar } from "../components/Navbar";

export const HeaderBlog = ({ title, subtitle }) => {
  return (
    <div className="header-blog">
      <div className="header-blog-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
