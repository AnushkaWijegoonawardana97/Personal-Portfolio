import React from "react";

import LineSperator from "./LineSperator";

function Pagefooter() {
	return (
		<div className="sectionPadding sectionPadding-to">
			<LineSperator />
			<div className="sectionInnerPadding sectionInnerPadding-y d-flex align-itmes-center justify-content-between pageFooter">
				<div className="byline primarySubHeading text-uppercase">
					© 2020 ANUSHKA WIJEGOONAWARDANA
				</div>

				<div className="socialLinks">
					<a
						href="https://www.linkedin.com/in/anushkawijegoonawardana97"
						target="_blank"
						rel="noreferrer"
						className="socialLinkItem"
					>
						<i class="fab fa-linkedin-in"></i>
					</a>

					<a
						href="https://www.instagram.com/anushkawijegoonawardana97"
						target="_blank"
						rel="noreferrer"
						className="socialLinkItem"
					>
						<i class="fab fa-instagram"></i>
					</a>

					<a
						href="https://github.com/AnushkaWijegoonawardana97"
						target="_blank"
						rel="noreferrer"
						className="socialLinkItem"
					>
						<i class="fab fa-github-alt"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Pagefooter;
