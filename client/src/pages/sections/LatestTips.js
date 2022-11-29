import React from "react";
import { Meci } from "../../components/Meci";
import { Pont } from "../../components/Pont";

export const LatestTips = () => {
  return (
    <section className="latest-tips">
      <h1 className="title">Latest Tips</h1>
      <p className="under-title">lorem ipsum dolor amet</p>
      <div className="latest-tips-content">
        <div className="meci-tips">
          <Meci
            meci={"Man. City vs Chelsea"}
            data="Azi 19:00"
            ponturi={"36"}
          ></Meci>
          <div className="tips-box">
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
        <div className="meci-tips">
          <Meci
            meci={"Man. City vs Chelsea"}
            data="Azi 19:00"
            ponturi={"36"}
          ></Meci>
          <div className="tips-box">
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
    </section>
  );
};
