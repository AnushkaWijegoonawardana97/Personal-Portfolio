import React from "react";

function ShowcaseGridItem({
	portfolio: { PortfolioName, thumbnailURL, categories },
}) {
	const CategoryList = categories.map((category) => (
		<span key={category.id}> {category.CategoryName} </span>
	));

	return (
		<div className="portfolioGridItem">
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
		</div>
	);
}

export default ShowcaseGridItem;
