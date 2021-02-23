import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";

import Spinner from "../../layouts/Spinner";
import SkillSlider from "../SkillSlider/SkillSlider";
import GalleryImages from "./GalleryImages";
import { Helmet } from "react-helmet";

function ShowcasePage() {
  const [portfolio, setportfolio] = useState([]);
  const [loading, setloading] = useState(false);

  const currentURLPathArry = window.location.pathname.split("/");
  const portfolioID = currentURLPathArry[2];
  // console.log(portfolioID);

  useEffect(() => {
    const fetchSinglePortfolio = async () => {
      setloading(true);
      const response = await axios(
        `https://aw-personal-portfolio-default-rtdb.firebaseio.com/portfolios/${portfolioID}.json`
      );

      // const fetchedPortfolioItems = [];
      // for (let key in response.data) {
      // 	fetchedPortfolioItems.push({ ...response.data[key], id: key });
      // }

      //   console.log(response.data);
      setportfolio(response.data);
      setloading(false);
    };

    fetchSinglePortfolio();
  }, [portfolioID]);

  if (portfolioID !== null) {
    // Portfolio Categories
    let categoryList;
    if (portfolio.portfolioCategories) {
      categoryList = portfolio.portfolioCategories.map((category, index) => (
        <span key={index}> {category.categoryName} </span>
      ));
    }

    if (loading) {
      return <Spinner />;
    }

    let pageTitle = portfolio.portfolioName;
    console.log(pageTitle);

    return (
      <Fragment>
        <Helmet>
          <title>{`Anushka Wijegoonawardana | ${portfolio.portfolioName} Showcase`}</title>
          <meta
            name="description"
            content={`${portfolio.portfolioSummary}`}
          ></meta>
        </Helmet>

        {/* Portfolio Inside Header */}
        <div className="sectionPadding row">
          <div className="col-lg-8 col-md-10">
            <div className="primaryHeading text-uppercase">
              {portfolio.portfolioName}
            </div>

            <p className="subSectionSpacing">{portfolio.portfolioSummary}</p>

            <a href={portfolio.liveLink} target="_blank" className="theme-btn">
              LIVE WEBSITE
            </a>
          </div>
        </div>

        {/* Portfolio INside Gallery */}
        {portfolio.portfolioGallery ? (
          <GalleryImages PortfolioGalleries={portfolio.portfolioGallery} />
        ) : null}

        {/* Service Type, Client Details, Timeline */}
        <div className="sectionPadding">
          <div className="serviceGrid subSectionSpacing">
            <div className="serviceCard">
              <div className="fadingText">01</div>

              <div className="primarySubHeading">SERVICES</div>

              <div className="portfolioCategories">{categoryList}</div>
            </div>

            <div className="serviceCard">
              <div className="fadingText">02</div>

              <div className="primarySubHeading">BRAND / CLIENT</div>

              <div>{portfolio.clientName}</div>
            </div>

            <div className="serviceCard">
              <div className="fadingText">03</div>

              <div className="primarySubHeading">TIMELINE</div>

              <div>{portfolio.timeLine}</div>
            </div>
          </div>

          <div className=" row">
            <div className="col-lg-8 col-md-10">
              <p>{portfolio.description}</p>
            </div>
          </div>
        </div>

        {/* Languages Slider */}
        {portfolio.technologiesUsed ? (
          <SkillSlider
            loading={loading}
            technologies={portfolio.technologiesUsed}
            slideRowCount={1}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default ShowcasePage;
