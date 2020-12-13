import React from "react";
import { Link } from "react-router-dom";

import LightLogo from "../assets/LightHeaderLogo.png";

function Overlayer() {
	const closeOverlayer = () => {
		document.getElementById("navigationOverlayer").style.height = "0%";
	};

	return (
		<div className="navigationOverlayer" id="navigationOverlayer">
			<nav className="sectionInnerPadding d-flex align-items-center justify-content-between">
				<Link to="/" onClick={closeOverlayer}>
					<img
						src={LightLogo}
						alt="Anushka Wijegoonawardana Logo"
						className="img-fluid logoImg"
					/>
				</Link>

				<Link onClick={closeOverlayer}>
					<i className="fas fa-times menuIcon"></i>
				</Link>
			</nav>

			<div className="navigationOverlayerLinks container d-flex flex-column justify-content-center">
				<Link
					className="link-item text-uppercase"
					to="/"
					onClick={closeOverlayer}
				>
					Home
					<span className="smallerText d-block">FIRST PAGE</span>
				</Link>

				<Link
					className="link-item text-uppercase"
					to="/about"
					onClick={closeOverlayer}
				>
					About
					<span className="smallerText d-block">ALL ABOUT ME</span>
				</Link>

				<Link
					className="link-item text-uppercase"
					to="/showcase"
					onClick={closeOverlayer}
				>
					Showcase
					<span className="smallerText d-block">MY PROJECTS</span>
				</Link>

				<Link
					className="link-item text-uppercase"
					to="/contact"
					onClick={closeOverlayer}
				>
					contact
					<span className="smallerText d-block">say hello</span>
				</Link>
			</div>
		</div>
	);
}

export default Overlayer;
