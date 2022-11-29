import React from "react";
import { Navbar } from "../components/Navbar";
import { HeaderContact } from "../components/HeaderContact";
import { Footer } from "./sections/Footer";
import { ContactForm } from "../components/ContactForm";

export const Contact = () =>{
  return (
      <>
      <Navbar></Navbar>
      <HeaderContact title="Contact" subtitle="Haideti sa tinem legatura!"></HeaderContact>
      <ContactForm></ContactForm>
      <div className="dateContact">
       <p>+40 766 666 666</p>
        <p>contact@betright.ro</p>
        <p>Adresa completa</p>
      </div>
      <Footer></Footer>
      </>
  );
};
