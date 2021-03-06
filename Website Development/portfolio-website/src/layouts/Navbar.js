import React from "react";
import { Link } from "react-router-dom";

import DarkLogo from "../assets/DarkHeaderLogo.png";
import ReactGA from "react-ga";

function Navbar() {
  const openOverlayer = (e) => {
    e.preventDefault();
    document.getElementById("navigationOverlayer").style.height = "100%";

    ReactGA.event({
      category: "UI Interactions",
      action: "Header Navigation Menu Opened",
    });
  };

  return (
    <div className="subSectionInnerPadding d-flex align-items-center justify-content-between overlayerNavHeader fixed-top">
      <Link to="/">
        <img
          src={DarkLogo}
          alt="Anushka Wijegoonawardana Logo"
          className="img-fluid logoImg"
        />
      </Link>

      <Link to="/" onClick={openOverlayer}>
        <i className="fas fa-bars menuIcon"></i>
      </Link>
    </div>
  );
}

export default Navbar;
