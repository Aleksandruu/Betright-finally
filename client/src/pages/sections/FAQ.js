import React, { useState } from "react";
import { PlusButton } from "../../components/PlusButton";

export const FAQ = () => {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  return (
    <section className="faq">
      <div className="faq-content">
        <h1 className="title">Intrebari Frecvente</h1>
        <p className="under-title">
          {" "}
          Am adunat o lista cu intrebari care te pot ajuta pe parcursul
          interactiunii cu acest site
        </p>
        <div className="faq-box-full">
          <div className="faq-box">
            <div className="faq-question-all">
              <div className="faq-question">
                <p>De ce as posta tipuri pe acest site?</p>
                <PlusButton
                  onClick={() => {
                    setQ1(!q1);
                  }}
                ></PlusButton>
              </div>
              {q1 && (
                <h6>
                  Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                  dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem
                  ipsum dolor
                </h6>
              )}
            </div>
            <div className="faq-question-all">
              <div className="faq-question">
                <p>De ce as posta tipuri pe acest site?</p>
                <PlusButton
                  onClick={() => {
                    setQ2(!q2);
                  }}
                ></PlusButton>
              </div>
              {q2 && (
                <h6>
                  Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                  dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem
                  ipsum dolor
                </h6>
              )}
            </div>
            <div className="faq-question-all">
              <div className="faq-question">
                <p>De ce as posta tipuri pe acest site?</p>
                <PlusButton
                  onClick={() => {
                    setQ3(!q3);
                  }}
                ></PlusButton>
              </div>
              {q3 && (
                <h6>
                  Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                  dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem
                  ipsum dolor
                </h6>
              )}
            </div>
            <div className="faq-question-all">
              <div className="faq-question">
                <p>De ce as posta tipuri pe acest site?</p>
                <PlusButton
                  onClick={() => {
                    setQ4(!q4);
                  }}
                ></PlusButton>
              </div>
              {q4 && (
                <h6>
                  Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                  dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem
                  ipsum dolor
                </h6>
              )}
            </div>
            <div className="faq-question-all">
              <div className="faq-question">
                <p>De ce as posta tipuri pe acest site?</p>
                <PlusButton
                  onClick={() => {
                    setQ5(!q5);
                  }}
                ></PlusButton>
              </div>
              {q5 && (
                <h6>
                  Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                  dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem
                  ipsum dolor
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
