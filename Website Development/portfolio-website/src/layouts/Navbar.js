import React from "react";
import { Link } from "react-router-dom";

import DarkLogo from "../assets/DarkHeaderLogo.png";

function Navbar() {
	const openOverlayer = () => {
		// e.preventDefault();
		document.getElementById("navigationOverlayer").style.height = "100%";
	};

	return (
		<div className="sectionInnerPadding d-flex align-items-center justify-content-between overlayerNavHeader fixed-top">
			<Link to="/">
				<img
					src={DarkLogo}
					alt="Anushka Wijegoonawardana Logo"
					className="img-fluid logoImg"
				/>
			</Link>

			<Link onClick={openOverlayer}>
				<i className="fas fa-bars menuIcon"></i>
			</Link>
		</div>
	);
}

export default Navbar;
