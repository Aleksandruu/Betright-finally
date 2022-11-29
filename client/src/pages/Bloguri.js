import React from "react";
import { Navbar } from "../components/Navbar";
import { HeaderBlog } from "../components/HeaderBlog";
import { Footer } from "./sections/Footer";
import { Posts } from "../components/Posts";


export const Bloguri = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeaderBlog title="Blog" subtitle="Urmareste toate noutatile"></HeaderBlog>
      <Posts></Posts>
      <Footer></Footer>
    </>
  );
};
