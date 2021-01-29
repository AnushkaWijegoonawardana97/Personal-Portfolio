import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/UI/Footer/Footer";

function App() {
	return (
		<Router>
			<h1>This is the Header Navigation</h1>
			<div>This is the body layout</div>
			<Footer />
		</Router>
	);
}

export default App;
