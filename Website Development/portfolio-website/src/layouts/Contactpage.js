import React, { Fragment } from "react";
import ContactCards from "../components/Contactpage/ContactCards";
import ContactHeroBanner from "../components/Contactpage/ContactHeroBanner";
import ContactMapForm from "../components/Contactpage/ContactMapForm";
import PortfolioBanner from "./PortfolioBanner";

function Contactpage() {
  return (
    <Fragment>
      <ContactHeroBanner />
      <ContactCards />
      <ContactMapForm />
      <PortfolioBanner />
    </Fragment>
  );
}

export default Contactpage;
