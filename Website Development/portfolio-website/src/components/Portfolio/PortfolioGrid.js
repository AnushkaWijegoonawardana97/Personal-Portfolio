import React from "react";
import Spinner from "../../layouts/Spinner";
import PortfolioGridItem from "./PortfolioGridItem";

function PortfolioGrid({ loading, portfolios }) {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="portfolioGrid">
				{portfolios.map((portfolio) => (
					<PortfolioGridItem key={portfolio.id} portfolio={portfolio} />
				))}
			</div>
		);
	}
}

export default PortfolioGrid;
