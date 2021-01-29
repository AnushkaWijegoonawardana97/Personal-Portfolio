import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
	return (
		<div className="sectionPadding row">
			<div className="col-lg-6 text-center mx-auto">
				<div className="fadingText">404</div>
				<div className="primaryHeading  text-uppercase">Page Not Found</div>
				<p className="subSectionSpacing">
					Unfortunately, the page you're looking for doesn't exist ( anymore )
					or there was an error in the link you followed or typed.
				</p>

				<Link className="theme-btn" to="/">
					Go to homepage
				</Link>
			</div>
		</div>
	);
}
