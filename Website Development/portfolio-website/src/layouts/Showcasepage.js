import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import PortfolioHeroBanner from "../components/Portfoliopage/PortfolioHeroBanner";
import ShowcaseGrid from "../components/Showcase/ShowcaseGrid";
import ContactBanner from "./ContactBanner";

function Showcasepage() {
  const [portfolios, setportfolios] = useState([]);
  const [loading, setloading] = useState(false);
  // Fetching Portfolios
  useEffect(() => {
    const fetchPortfolios = async () => {
      setloading(true);
      const response = await axios(
        "https://aw-personal-portfolio-default-rtdb.firebaseio.com/portfolios.json"
      );

      const fetchedPortfolioItems = [];
      for (let key in response.data) {
        fetchedPortfolioItems.push({ ...response.data[key], id: key });
      }

      setportfolios(fetchedPortfolioItems);
      setloading(false);
    };

    fetchPortfolios();
  }, []);
  return (
    <Fragment>
      <PortfolioHeroBanner />
      <ShowcaseGrid loading={loading} portfolios={portfolios} />
      <ContactBanner />
    </Fragment>
  );
}

export default Showcasepage;
