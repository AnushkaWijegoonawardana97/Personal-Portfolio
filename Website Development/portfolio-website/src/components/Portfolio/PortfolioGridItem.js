import React from "react";
import { Link } from "react-router-dom";

function PortfolioGridItem({
  portfolio: {
    id,
    portfolioName,
    thumbnailURL,
    portfolioCategories,
    featuredPortfolio,
  },
}) {
  const CategoryList = portfolioCategories.map((category, index) => (
    <span key={index}> {category.categoryName} </span>
  ));

  return (
    <Link to={`/showcase/${id}`} className='portfolioGridItem'>
      <div className='portfolioImg'>
        <img className='img-fluid' src={thumbnailURL} alt={portfolioName} />
      </div>

      <div className='hoverOverlayer'>
        <div className='overLayerText text-center'>
          <div className='portfolioName primarySubHeading text-uppercase'>
            {portfolioName}
          </div>
          <div className='portfolioCategories smallerTextLight text-capitalize'>
            {CategoryList}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioGridItem;
