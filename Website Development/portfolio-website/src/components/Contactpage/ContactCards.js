import React from "react";

export default function ContactCards() {
	return (
		<div className="serviceGrid">
			<div className="serviceCard">
				<div className="fadingText">01</div>

				<div className="primarySubHeading">LOCATION</div>

				<a
					href="https://goo.gl/maps/rHvA7WgSZNerWDjp7"
					rel="noreferrer"
					target="_blank"
					className="ContactLinks"
				>
					132 / 6 Nahena Hunupitiya, Wattala, Sri Lanka.
				</a>
			</div>

			<div className="serviceCard">
				<div className="fadingText">02</div>

				<div className="primarySubHeading">SEND A MESSAGE</div>

				<a
					href="mailto:anushkaduwolka123@gmail.com"
					rel="noreferrer"
					target="_blank"
					className="ContactLinks"
				>
					anushkaduwolka123@gmail.com
				</a>
			</div>

			<div className="serviceCard">
				<div className="fadingText">03</div>

				<div className="primarySubHeading">SAY HELLO</div>

				<a href="tel:0711971313" rel="noreferrer" className="ContactLinks">
					+94 711 971 313
				</a>
			</div>
		</div>
	);
}
