import React from "react";
import { Button } from "../../components/Button";
import HeaderBKGOverlay from "../../assets/HeaderBKGOverlay.jpeg";

export const Header = () => {
  return (
    <section className="header">
      <div className="header-content">
        <p className="over-title">Lorem ipsum dolor amet lorem</p>
        <h1 className="title">Lorem ipsum dolor</h1>
        <p className="under-title">lorem ipsum dolor amet lorem ipsum</p>
        <div className="buttons-header">
          <Button
            text="Posteaza un pont"
            color="#00b300"
            link={"/meciuri"}
          ></Button>
          <Button
            text="Vezi ponturi"
            color="#00b300"
            link={"/meciuri"}
          ></Button>
        </div>
      </div>
    </section>
  );
};
