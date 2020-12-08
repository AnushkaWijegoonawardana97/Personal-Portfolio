import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeHeroBanner from "./components/Homepage/HomeHeroBanner";
import HomeServices from "./components/Homepage/HomeServices";

import ImageBanner from "./components/ImageBanner";
import ContactBanner from "./layouts/ContactBanner";
import LineSperator from "./layouts/LineSperator";
import Navbar from "./layouts/Navbar";
import Overlayer from "./layouts/Overlayer";
import Pagefooter from "./layouts/Pagefooter";

function App() {
	return (
		<Router>
			<Overlayer />
			<Navbar />

			<section className="container">
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
								<ImageBanner imgClass={"aboutpage"} />
							</Fragment>
						)}
					/>

					<Route exact path="/showcase" />

					<Route exact path="/contact" />
				</Switch>

				<Pagefooter />
			</section>
		</Router>
	);
}

export default App;
