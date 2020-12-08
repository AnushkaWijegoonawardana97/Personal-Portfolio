import React from "react";
import { Link } from "react-router-dom";

function ContactBanner() {
	return (
		<div className="textImgBanner contactBanner d-flex flex-column justify-content-center">
			<div className="sectionPadding sectionPadding-x ">
				<div className="primaryHeading">LET’S TALK ABOUT YOUR PROJECT.</div>

				<div className="bannerText">
					Need more information or want to get in touch?
				</div>

				<Link className="theme-btn theme-btn-light" to="/contact">
					get in touch
				</Link>
			</div>
		</div>
	);
}

export default ContactBanner;
