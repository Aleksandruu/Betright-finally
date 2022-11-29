import React from "react";
import LOGO1 from "../../assets/LOGO-ALB.png";
import { Button } from "../../components/Button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import SAL from "../../assets/ANPC - SAL.png";
import SOL from "../../assets/ANPC - SOL.png";

export const Footer = () => {
  return (

    <section className="footer">
      <div className="footer-box">
        <div className="footer-float">
          <div className="column">
          <h2>Facebook Grup</h2>
          <Button
            text="Verifica Facebook"
            color="#1580F2"
            link={"/meciuri"}
          ></Button>
        </div>
          <div className="column">
          <h2>Nu rata ultimele noutati din lumea sportului</h2>
          <p>Aboneaza-te si vei primi cele mai fierbinti ponturi</p>
          
          <form className="formFooter">
            <input type={"email"} placeholder="Introduceti adresa de email"></input>
            <input
              type={"submit"}
              value=">"
              style={{ color: "#00c358", fontWeight: "600", fontSize: "18px" }}
            ></input>
          </form>
          </div>
         <div className="column">
         <h2>Telegram</h2>
         <Button
            text="Verifica Telegram"
            color="#7289da"
            link={"/meciuri"}
          ></Button>
         </div>
        </div>
        <div className="footer-details">
          <img className="logo1" src={LOGO1}></img>
          <div className="links">
            <a href="/">Acasa</a>
            <a href="/contact">Contact</a>
            <a href="/termeni-si-conditii">Termeni si conditii</a>
            <a href="/politica-de-confidentialitate">Politica de confidetialitate</a>
            <a href="/protectia-datelor">Protectia datelor</a>
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=EN">ANPC-SOL</a>
            <a href="https://anpc.ro/ce-este-sal/">ANPC-SAL</a>
          </div>
        </div>
        <div className="footer-down">
          <p>Copyright C BETRIGHT | <a href="https://web-visionary.com/">Creat de Web-Visionary</a></p>
         <div className="SAL-SOL">
          <a href="https://anpc.ro/ce-este-sal/" className="SAL-SOL_img"><img src={SAL}></img></a>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=EN" className="SAL-SOL_img"><img src={SOL}></img></a>
          </div>
          <div style={{ fontSize: "34px" }}>
            <p>
              <FaFacebook></FaFacebook>
            </p>
            <p style={{ marginLeft: "1rem" }}>
              <FaInstagram></FaInstagram>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
