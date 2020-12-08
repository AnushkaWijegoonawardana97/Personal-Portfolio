import React from "react";
import { Link } from "react-router-dom";

function PortfolioBanner() {
	return (
		<div className="textImgBanner portfolioBanner d-flex flex-column justify-content-center">
			<div className="sectionPadding sectionPadding-x ">
				<div className="primaryHeading">CHECKOUT FEW OF MY RECENT WORKS</div>

				<div className="bannerText">
					Want to check the few projects that I did.
				</div>

				<Link className="theme-btn theme-btn-light" to="/showcase">
					DISCOVER MORE
				</Link>
			</div>
		</div>
	);
}

export default PortfolioBanner;
