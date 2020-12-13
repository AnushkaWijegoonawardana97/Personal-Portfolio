import React from "react";
import { Link } from "react-router-dom";

function PortfolioHeader() {
	return (
		<div className="row subSectionSpacing">
			<div className="col-lg-8 col-md-10">
				<div className="primaryHeading">EXPLORE RECENT WORKS</div>

				<p className="subSectionSpacing">
					Development & designing is the most important skill set that I have
					here are a few projects that I completed over my career life.
				</p>

				<Link className="theme-btn" to="/showcase">
					DISCOVER MORE
				</Link>
			</div>
		</div>
	);
}

export default PortfolioHeader;
