import React, { Fragment, useEffect } from "react";
import Spinner from "../../layouts/Spinner";
import SkillSlider from "../SkillSlider/SkillSlider";

function ShowcasePage({
	portfolio: {
		PortfolioName,
		PortfolioSummary,
		Client,
		Timeline,
		Description,
		ThumbnailURL,
		PortfolioGallery,
		categories,
		technologies,
		experience,
	},
	getPortfolio,
	loading,
	match,
}) {
	// useEffect(() => {
	// 	getPortfolio(match.params.id);
	// }, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<Fragment>
			{/* Portfolio Inside Header */}
			<div className="sectionPadding row">
				<div className="col-md-8">
					<div className="primaryHeading">{PortfolioName}</div>

					<p className="subSectionSpacing">{PortfolioSummary}</p>

					<a href="" target="_blank" rel="noreferrer" className="theme-btn">
						LIVE WEBSITE
					</a>
				</div>
			</div>

			{/*  */}
			<div className="sectionPadding">
				<div className="serviceGrid subSectionSpacing">
					<div className="serviceCard">
						<div className="fadingText">01</div>

						<div className="primarySubHeading">SERVICES</div>

						<div></div>
					</div>

					<div className="serviceCard">
						<div className="fadingText">02</div>

						<div className="primarySubHeading">BRAND / CLIENT</div>

						<div>{Client}</div>
					</div>

					<div className="serviceCard">
						<div className="fadingText">03</div>

						<div className="primarySubHeading">TIMELINE</div>

						<div>{Timeline}</div>
					</div>
				</div>

				<div className=" row">
					<div className="col-md-8">
						<p>{Description}</p>
					</div>
				</div>
			</div>

			{/* Languages Slider */}
		</Fragment>
	);
}

export default ShowcasePage;
