import React from "react";
import Spinner from "../../layouts/Spinner";
import ShowcaseGridItem from "./ShowcaseGridItem";

function ShowcaseGrid({ loading, portfolios }) {
	if (loading) {
		return <Spinner className="sectionPadding-bo" />;
	} else {
		return (
			<div className="portfolioGrid sectionPadding-bo">
				{portfolios.map((portfolio) => (
					<ShowcaseGridItem key={portfolio.id} portfolio={portfolio} />
				))}
			</div>
		);
	}
}

export default ShowcaseGrid;
