import React from "react";
import { Link } from "react-router-dom";

function PortfolioGridItem({
	portfolio: { id, PortfolioName, thumbnailURL, categories, FeaturedPortfolio },
}) {
	const CategoryList = categories.map((category) => (
		<span key={category.id}> {category.CategoryName} </span>
	));

	if (FeaturedPortfolio) {
		return (
			<Link to={`/showcase/${id}`} className="portfolioGridItem">
				<div className="portfolioImg">
					<img className="img-fluid" src={thumbnailURL} alt={PortfolioName} />
				</div>

				<div className="hoverOverlayer">
					<div className="overLayerText text-center">
						<div className="portfolioName primarySubHeading text-uppercase">
							{PortfolioName}
						</div>
						<div className="portfolioCategories smallerTextLight text-capitalize">
							{CategoryList}
						</div>
					</div>
				</div>
			</Link>
		);
	} else {
		return null;
	}
}

export default PortfolioGridItem;
