import React from "react";
import WhyusIMG from "../../assets/Abcd2.svg";

export const Whyus = () => {
  return (
    <section className="whyus">
      <div className="whyus-content">
        <h1 className="title">De ce sa ne alegi pe noi?</h1>
        <p className="under-title">Test</p>
        <div className="whyus-txtimg">
          <div>
            <div>
              <h3>Intrebare 1</h3>
              <p>
                {" "}
                Raspuns IntrebareRaspuns IntrebareRaspuns IntrebareRaspuns
                IntrebareRaspuns IntrebareRaspuns Intrebare
              </p>
            </div>
            <div>
              <h3>Intrebare 2</h3>
              <p>
                {" "}
                Raspuns IntrebareRaspuns IntrebareRaspuns IntrebareRaspuns
                IntrebareRaspuns IntrebareRaspuns Intrebare
              </p>
            </div>
            <div>
              <h3>Intrebare 3</h3>
              <p>
                {" "}
                Raspuns IntrebareRaspuns IntrebareRaspuns IntrebareRaspuns
                IntrebareRaspuns IntrebareRaspuns Intrebare
              </p>
            </div>
            <div>
              <h3>Intrebare 4</h3>
              <p>
                {" "}
                Raspuns IntrebareRaspuns IntrebareRaspuns IntrebareRaspuns
                IntrebareRaspuns IntrebareRaspuns Intrebare
              </p>
            </div>
          </div>
          <img src={WhyusIMG} className="imgwhyus"></img>
        </div>
      </div>
    </section>
  );
};
