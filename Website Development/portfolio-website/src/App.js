import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";

import AboutHeroBanner from "./components/AboutPage/AboutHeroBanner";
import ContactCards from "./components/Contactpage/ContactCards";
import ContactHeroBanner from "./components/Contactpage/ContactHeroBanner";
import ContactMapForm from "./components/Contactpage/ContactMapForm";
import HomeHeroBanner from "./components/Homepage/HomeHeroBanner";
import HomeServices from "./components/Homepage/HomeServices";
import ImageBanner from "./components/ImageBanner";
import PortfolioHeroBanner from "./components/Portfoliopage/PortfolioHeroBanner";

import ContactBanner from "./layouts/ContactBanner";
import LineSperator from "./layouts/LineSperator";
import Navbar from "./layouts/Navbar";
import Overlayer from "./layouts/Overlayer";
import Pagefooter from "./layouts/Pagefooter";
import PortfolioBanner from "./layouts/PortfolioBanner";
import Timeline from "./components/Timeline/Timeline";
import TimelineHeader from "./components/Timeline/TimelineHeader";

function App() {
	const [timelineitems, settimelineitems] = useState([]);
	const [loading, setloading] = useState(false);

	// Fetch Timeline Data
	useEffect(() => {
		const fetchTimelineItems = async () => {
			setloading(true);
			const response = await axios(
				"https://wijegoonawardana-dashboard.herokuapp.com/Experiences"
			);

			console.log(response.data);
			settimelineitems(response.data);
			setloading(false);
		};

		fetchTimelineItems();
	}, []);

	return (
		<Router>
			<Overlayer />
			<Navbar />

			<section className="container sectionPadding sectionPadding-to">
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Fragment>
								<HomeHeroBanner />

								<ImageBanner imgClass={"homepage"} />

								<HomeServices />

								<LineSperator />

								<ContactBanner />
							</Fragment>
						)}
					/>

					<Route
						exact
						path="/about"
						render={(props) => (
							<Fragment>
								<AboutHeroBanner />

								<ImageBanner imgClass={"aboutpage"} />

								<section className="sectionPadding">
									<TimelineHeader />

									<Timeline loading={loading} timelineitems={timelineitems} />
								</section>

								<PortfolioBanner />
							</Fragment>
						)}
					/>

					<Route
						exact
						path="/showcase"
						render={(props) => (
							<Fragment>
								<PortfolioHeroBanner />

								<ContactBanner />
							</Fragment>
						)}
					/>

					<Route
						exact
						path="/contact"
						render={(props) => (
							<Fragment>
								<ContactHeroBanner />

								<ContactCards />

								<ContactMapForm />

								<PortfolioBanner />
							</Fragment>
						)}
					/>
				</Switch>

				<Pagefooter />
			</section>
		</Router>
	);
}

export default App;
