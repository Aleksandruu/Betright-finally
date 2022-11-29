import React from "react";
import AlegeSport1IMG from "../../assets/AlegeSport1IMG.svg";
import AlegeSport2IMG from "../../assets/AlegeSport2IMG.svg";
import AlegeSport3IMG from "../../assets/AlegeSport3IMG.svg";
import AlegeSport4IMG from "../../assets/AlegeSport4IMG.svg";

export const Steps = () => {
  return (
    <section className="steps">
      <div className="steps-content">
        <h1 className="title"> Care sunt pasii? </h1>
        <p className="under-title rowunder-title">
          {" "}
          Invata sa folosesti aplicatia{" "}
        </p>
        <div className="row">
          <img src={AlegeSport1IMG}></img>
          <div className="row-text">
            <h2 className="title-steps"> Alege Sportul </h2>
            <p className="under-title rowunder-title"> Descriere pas </p>
          </div>
        </div>
        <div className="row">
          <div className="row-text">
            <h2 className="title-steps"> Alege Meciul </h2>
            <p className="under-title rowunder-title"> Descriere pas </p>
          </div>
          <img src={AlegeSport2IMG}></img>
        </div>
        <div className="row">
          <img src={AlegeSport3IMG}></img>
          <div className="row-text">
            <h2 className="title-steps"> Urmareste ponturile </h2>
            <p className="under-title rowunder-title"> Descriere pas </p>
          </div>
        </div>
        <div className="row">
          <div className="row-text">
            <h2 className="title-steps"> Pariaza si castiga</h2>
            <p className="under-title rowunder-title"> Descriere pas </p>
          </div>
          <img src={AlegeSport4IMG}></img>
        </div>
      </div>
    </section>
  );
};
