import React from "react";
import { Link } from "react-router-dom";

function AboutHeroBanner() {
	return (
		<div className="sectionPadding row">
			<div className="col-md-8">
				<div className="primaryHeading">ABOUT ME</div>

				<p className="subSectionSpacing">
					My Name is Anushka Wijegoonawardana, born in 1997. I live in Sri
					Lanka. From an early age, I have been interested in everything that
					has to do with coding & designing. Love to watch movies all day long &
					I could say I'm a foodie.
				</p>

				<Link className="theme-btn" to="/about">
					DOWNLOAD MY CV
				</Link>
			</div>
		</div>
	);
}

export default AboutHeroBanner;
