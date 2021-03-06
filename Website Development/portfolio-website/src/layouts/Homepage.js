import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import HomeHeroBanner from "../components/Homepage/HomeHeroBanner";
import HomeServices from "../components/Homepage/HomeServices";
import ImageBanner from "../components/ImageBanner";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";
import PortfolioHeader from "../components/Portfolio/PortfolioHeader";
import ContactBanner from "./ContactBanner";
import LineSperator from "./LineSperator";

function Homepage() {
  const [portfolios, setportfolios] = useState([]);
  const [loading, setloading] = useState(false);

  // Fetching Portfolios
  useEffect(() => {
    const fetchPortfolios = async () => {
      setloading(true);
      const response = await axios(
        "https://aw-personal-portfolio-default-rtdb.firebaseio.com/portfolios.json"
      );
      const PortfolioItems = [];
      for (let key in response.data) {
        PortfolioItems.push({ ...response.data[key], id: key });
      }
      const fetchedPortfolioItems = [];
      //   console.log(PortfolioItems);
      PortfolioItems.map((portfolio) => {
        if (portfolio.featuredPortfolio) {
          fetchedPortfolioItems.push(portfolio);
        }
      });
      setportfolios(fetchedPortfolioItems);
      setloading(false);
    };
    fetchPortfolios();
  }, []);

  return (
    <Fragment>
      <HomeHeroBanner />
      <ImageBanner imgClass={"homepage"} />
      <HomeServices />
      <LineSperator />
      <section className='sectionPadding'>
        <PortfolioHeader />
        <PortfolioGrid loading={loading} portfolios={portfolios} />
      </section>
      <ContactBanner />
    </Fragment>
  );
}

export default Homepage;
