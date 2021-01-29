import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<div className="container-fluid">
				<NavLink to="/" exact className="navbar-brand">
					BrandName
				</NavLink>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/" exact>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/categories" exact>
								Categories
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/experiences" exact>
								Experiences
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/portfolios" exact>
								Portfolios
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/technologies" exact>
								Technologies
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavigationBar;
