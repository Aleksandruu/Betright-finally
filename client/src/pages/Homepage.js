import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { LatestTips } from "./sections/LatestTips";
import { TopTipsters } from "./sections/TopTipsters";
import { Steps } from "./sections/Steps";
import { Whyus } from "./sections/Whyus";
import { FAQ } from "./sections/FAQ";
import { Testimoniale } from "./sections/Testimoniale";

export const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <TopTipsters></TopTipsters>
      <Steps></Steps>
      <LatestTips></LatestTips>
      <Whyus></Whyus>
      <FAQ></FAQ>
      <Testimoniale></Testimoniale>
      <Footer></Footer>
    </div>
  );
};
