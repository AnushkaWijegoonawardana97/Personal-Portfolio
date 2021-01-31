import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import BodyLayout from "./components/UI/BodyLayout/BodyLayout";
import Footer from "./components/UI/Footer/Footer";
import Categories from "./containers/Categories/Categories";
import Experiences from "./containers/Experiences/Experiences";
import NavigationBar from "./containers/NavigationBar/NavigationBar";
import Portfolios from "./containers/Portfolios/Portfolios";
import Technologies from "./containers/Technologies/Technologies";

function App() {
	return (
		<Router>
			<NavigationBar />
			<BodyLayout>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/categories" component={Categories} />
					<Route exact path="/experiences" component={Experiences} />
					<Route exact path="/portfolios" component={Portfolios} />
					<Route exact path="/technologies" component={Technologies} />
				</Switch>
			</BodyLayout>
			<Footer />
		</Router>
	);
}

export default App;
