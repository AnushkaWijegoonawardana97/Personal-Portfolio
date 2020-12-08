import React from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
	return (
		<div className="sectionPadding row">
			<div className="col-md-8">
				<p className="smallerText">DEVELOPER / FREELANCER</p>

				<div className="primaryHeading">HELLO, I'M ANUSHKA</div>

				<p className="subSectionSpacing">
					I am a developer based in Sri Lanka. Highly experienced with WordPress
					development & javascript related technologies. I would love to help to
					develop your brand. Available for freelance projects.
				</p>

				<Link className="theme-btn" to="/about">
					DISCOVER MORE
				</Link>
			</div>
		</div>
	);
}

export default HeroBanner;
