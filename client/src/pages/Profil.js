import React from "react";
import { Navbar } from "../components/Navbar";
import { FiltruPont } from "../components/FiltruPont";
import { Pont } from "../components/Pont";
import { Footer } from "./sections/Footer";
import { ProfileCard } from "../components/ProfileCard";

export const Profil = () => {
  return (
    <>
    <div className="profil-utilizator">
      <Navbar></Navbar>
      <ProfileCard
      name={"John Doe"}
      date={"22 10 2022"}
      ponturiLuna="233"
      ponturiCastigLuna={"123"}
      acurateteLuna="88"
      ponturiTotal={"345"}
      ponturiCastig="234"
      acuuratete={"67"}
      yield={"20"}
      ></ProfileCard>
      <div className="ponturi-p">
        <div className="ponturi-filter">
          <div className="filter-status">
            <FiltruPont></FiltruPont>
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
          <div className="ponturi-active">
            <Pont
              name={"Gabriel Vlad"}
              accuracy="88"
              ponturi={"257"}
              meci="FC Barcelona vs Real Madrid"
              date="Azi 21:00"
              comment={"Am impresia ca Barca o sa joace mai bine acum."}
              pronostic="GG si 2.5"
              postDate={"20.02.2020"}
              cota="4.5"
            ></Pont>
            <Pont
              name={"Gabriel Vlad"}
              accuracy="88"
              ponturi={"257"}
              meci="FC Barcelona vs Real Madrid"
              date="Azi 21:00"
              comment={"Am impresia ca Barca o sa joace mai bine acum."}
              pronostic="GG si 2.5"
              postDate={"20.02.2020"}
              cota="4.5"
            ></Pont>
            <Pont
              name={"Gabriel Vlad"}
              accuracy="88"
              ponturi={"257"}
              meci="FC Barcelona vs Real Madrid"
              date="Azi 21:00"
              comment={"Am impresia ca Barca o sa joace mai bine acum."}
              pronostic="GG si 2.5"
              postDate={"20.02.2020"}
              cota="4.5"
            ></Pont>
            <Pont
              name={"Gabriel Vlad"}
              accuracy="88"
              ponturi={"257"}
              meci="FC Barcelona vs Real Madrid"
              date="Azi 21:00"
              comment={"Am impresia ca Barca o sa joace mai bine acum."}
              pronostic="GG si 2.5"
              postDate={"20.02.2020"}
              cota="4.5"
            ></Pont>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
    </>
  );
};
