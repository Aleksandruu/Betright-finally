import React from "react";
import { FiltruTipsteri } from "../components/FiltruTipsteri";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { Footer } from "./sections/Footer";
import { HeaderTipsteri } from "../components/HeaderTipsteri";
export const Tipsteri = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeaderTipsteri
        title="Tipsteri"
        subtitle="lista tipsterilor activi"
      ></HeaderTipsteri>
      <div className="ponturi">
        <div className="ponturi-p">
          <div className="ponturi-filter">
            <div className="filter-status">
              <FiltruTipsteri></FiltruTipsteri>
            </div>
            {/* {ponturi.map((pont) => (
      <Pont
      name={pont.name}
      accuracy={pont.accuracy}
      ponturi={pont.ponturi}
      meci={pont.meci}
      date={pont.date}
      comment={pont.comment}
      pronostic={pont.pronostic}
      postDate={pont.postDate}
      cota={pont.cota}
      ></Pont>
    ))} */}
            <div className="tipsteri-activi-grid">
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>{" "}
              <Card
                username={"John Doe"}
                date="20.02.2020"
                accuracy="75"
                ponturi={"453"}
                ponturiActive="345"
              ></Card>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
