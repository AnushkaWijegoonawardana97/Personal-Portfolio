import React from "react";
import cv from "../../assets/Anushka Wijegoonawardana CV.pdf";

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

				<a className="theme-btn" href={cv} target="_blank" rel="noreferrer">
					DOWNLOAD MY CV
				</a>
			</div>
		</div>
	);
}

export default AboutHeroBanner;
