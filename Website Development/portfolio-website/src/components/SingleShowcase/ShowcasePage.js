import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";

import Spinner from "../../layouts/Spinner";
import SkillSlider from "../SkillSlider/SkillSlider";
import GalleryImages from "./GalleryImages";

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
				`https://anushkaportfoliodb.herokuapp.com/Portfolios/${portfolioID}`
			);

			console.log(response.data);
			setportfolio(response.data);
			setloading(false);
		};

		fetchSinglePortfolio();
	}, [portfolioID]);

	if (portfolioID !== null) {
		// Portfolio Categories
		let categoryList;
		if (portfolio.categories) {
			categoryList = portfolio.categories.map((category) => (
				<span key={category.id}> {category.CategoryName} </span>
			));
		}

		if (loading) {
			return <Spinner />;
		}

		return (
			<Fragment>
				{/* Portfolio Inside Header */}
				<div className="sectionPadding row">
					<div className="col-lg-8 col-md-10">
						<div className="primaryHeading text-uppercase">
							{portfolio.PortfolioName}
						</div>

						<p className="subSectionSpacing">{portfolio.PortfolioSummary}</p>

						<a
							href={portfolio.LiveLink}
							target="_blank"
							rel="noreferrer"
							className="theme-btn"
						>
							LIVE WEBSITE
						</a>
					</div>
				</div>

				{/* Portfolio INside Gallery */}
				{portfolio.PortfolioGallery ? (
					<GalleryImages PortfolioGalleries={portfolio.PortfolioGallery} />
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

							<div>{portfolio.Client}</div>
						</div>

						<div className="serviceCard">
							<div className="fadingText">03</div>

							<div className="primarySubHeading">TIMELINE</div>

							<div>{portfolio.Timeline}</div>
						</div>
					</div>

					<div className=" row">
						<div className="col-lg-8 col-md-10">
							<p>{portfolio.Description}</p>
						</div>
					</div>
				</div>

				{/* Languages Slider */}
				{portfolio.technologies ? (
					<SkillSlider
						loading={loading}
						technologies={portfolio.technologies}
					/>
				) : null}
			</Fragment>
		);
	}
}

export default ShowcasePage;
