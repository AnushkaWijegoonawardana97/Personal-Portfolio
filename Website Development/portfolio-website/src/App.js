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
import SkillSlider from "./components/SkillSlider/SkillSlider";
import PortfolioHeader from "./components/Portfolio/PortfolioHeader";
import PortfolioGrid from "./components/Portfolio/PortfolioGrid";
import ShowcaseGrid from "./components/Showcase/ShowcaseGrid";
import ShowcasePage from "./components/SingleShowcase/ShowcasePage";
import PageNotFound from "./layouts/PageNotFound";

function App() {
	const [timelineitems, settimelineitems] = useState([]);
	const [technology, settechnology] = useState([]);
	const [portfolios, setportfolios] = useState([]);
	const [loading, setloading] = useState(false);

	// Fetch Timeline Data
	useEffect(() => {
		const fetchTimelineItems = async () => {
			setloading(true);
			const response = await axios(
				"https://aw-personal-portfolio-default-rtdb.firebaseio.com/experiences.json"
			);

			const fetchedTimelineItems = [];
			for (let key in response.data) {
				fetchedTimelineItems.push({ ...response.data[key], id: key });
			}

			settimelineitems(fetchedTimelineItems);
			setloading(false);
		};

		fetchTimelineItems();
	}, []);

	// Fetching Technologies & Skills Data
	useEffect(() => {
		const fetchTechSkill = async () => {
			setloading(true);
			const response = await axios(
				"https://aw-personal-portfolio-default-rtdb.firebaseio.com/technologies.json"
			);

			const fetchedTechnologyItems = [];
			for (let key in response.data) {
				fetchedTechnologyItems.push({ ...response.data[key], id: key });
			}

			settechnology(fetchedTechnologyItems);
			setloading(false);
		};

		fetchTechSkill();
	}, []);

	// Fetching Portfolios
	useEffect(() => {
		const fetchPortfolios = async () => {
			setloading(true);
			const response = await axios(
				"https://aw-personal-portfolio-default-rtdb.firebaseio.com/portfolios.json"
			);

			const fetchedPortfolioItems = [];
			for (let key in response.data) {
				fetchedPortfolioItems.push({ ...response.data[key], id: key });
			}

			setportfolios(fetchedPortfolioItems);
			setloading(false);
		};

		fetchPortfolios();
	}, []);

	//

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

								<section className="sectionPadding">
									<PortfolioHeader />

									<PortfolioGrid loading={loading} portfolios={portfolios} />
								</section>

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

								<SkillSlider
									loading={loading}
									technologies={technology}
									slideRowCount={2}
								/>

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

								<ShowcaseGrid loading={loading} portfolios={portfolios} />

								<ContactBanner />
							</Fragment>
						)}
					/>

					<Route
						exact
						path="/showcase/:id"
						render={(props) => (
							<Fragment>
								<ShowcasePage />
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

					<Route component={PageNotFound} />
				</Switch>

				<Pagefooter />
			</section>
		</Router>
	);
}

export default App;
