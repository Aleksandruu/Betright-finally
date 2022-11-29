import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

export const TopTipsters = () => {
  return (
    <section className="top-tipsters">
      <h1 className="title">Top tipsteri</h1>
      <p className="under-title">lorem ipsum dolor amet</p>
      <div className="top-tipsters-content">
        <div className="tipster-row">
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
          ></Card>
        </div>
        <div className="tipster-row">
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
          ></Card>
        </div>
      </div>
      <Button
        color={"#00d047"}
        text="Vezi toti tipsterii"
        link={"/tipsteri"}
      ></Button>
    </section>
  );
};
