import React, { Component } from "react";
import LayoutHeader from "../../components/UI/LayoutHeader/LayoutHeader";
import axios from "../../axios";

export class Portfolios extends Component {
	state = {
		portfolioName: "",
		portfolioSummary: "",
		clientName: "",
		timeLine: "",
		description: "",
		thumbnailURL: "http://wijegoonawardana.com/uploads/Portfolio/Thumbnail/",
		liveLink: "",
		featuredPortfolio: false,
		portfolioGallery: "",
		portfolioCategories: {},
		technologiesUsed: {},

		categories: [],
		technologies: [],

		editState: false,
		editID: null,
		loading: true,

		portfolios: [],
	};

	fetchPortfolio() {
		axios.get("/portfolios.json").then((response) => {
			const fetchedPortfolios = [];

			for (let key in response.data) {
				fetchedPortfolios.push({ ...response.data[key], id: key });
			}

			// console.log(fetchedPortfolios);
			this.setState({ loading: false, portfolios: fetchedPortfolios });
		});
	}

	componentDidMount() {
		axios.get("/categories.json").then((response) => {
			const fetchedCategories = [];
			// console.log(response.data);

			for (let key in response.data) {
				fetchedCategories.push({ ...response.data[key], id: key });
			}

			// console.log(fetchedCategories);
			this.setState({ categories: fetchedCategories });
		});

		axios.get("/technologies.json").then((response) => {
			const fetchedTechnologies = [];

			for (let key in response.data) {
				fetchedTechnologies.push({ ...response.data[key], id: key });
			}

			this.setState({ technologies: fetchedTechnologies });
		});

		this.fetchPortfolio();
	}

	submitPortfolioHandler = (e) => {
		e.preventDefault();

		let portfolioCategoryObject = this.state.portfolioCategories.reduce(
			(acc, cur, i) => {
				acc[i] = cur;
				return acc;
			},
			{}
		);

		let technologiesUdesObject = this.state.technologiesUsed.reduce(
			(acc, cur, i) => {
				acc[i] = cur;
				return acc;
			},
			{}
		);

		const portfolio = {
			portfolioName: this.state.portfolioName,
			portfolioSummary: this.state.portfolioSummary,
			clientName: this.state.clientName,
			timeLine: this.state.timeLine,
			description: this.state.description,
			thumbnailURL: this.state.thumbnailURL,
			liveLink: this.state.liveLink,
			featuredPortfolio: this.state.featuredPortfolio,
			portfolioGallery: this.state.portfolioGallery,
			portfolioCategories: portfolioCategoryObject,
			technologiesUsed: technologiesUdesObject,
		};

		axios.post("/portfolios.json", portfolio).then((response) => {
			// console.log(response);

			this.setState({
				portfolioName: "",
				portfolioSummary: "",
				clientName: "",
				timeLine: "",
				description: "",
				thumbnailURL:
					"http://wijegoonawardana.com/uploads/Portfolio/Thumbnail/",
				liveLink: "",
				featuredPortfolio: false,
				portfolioGallery: "",
				portfolioCategories: {},
				technologiesUsed: {},
			});
			this.fetchPortfolio();
		});
	};

	submitEditPortfolioHandler = (e) => {
		e.preventDefault();

		let portfolioCategoryObject = this.state.portfolioCategories.reduce(
			(acc, cur, i) => {
				acc[i] = cur;
				return acc;
			},
			{}
		);

		let technologiesUdesObject = this.state.technologiesUsed.reduce(
			(acc, cur, i) => {
				acc[i] = cur;
				return acc;
			},
			{}
		);

		const portfolio = {
			portfolioName: this.state.portfolioName,
			portfolioSummary: this.state.portfolioSummary,
			clientName: this.state.clientName,
			timeLine: this.state.timeLine,
			description: this.state.description,
			thumbnailURL: this.state.thumbnailURL,
			liveLink: this.state.liveLink,
			featuredPortfolio: this.state.featuredPortfolio,
			portfolioGallery: this.state.portfolioGallery,
			portfolioCategories: portfolioCategoryObject,
			technologiesUsed: technologiesUdesObject,
		};

		axios
			.put(`/portfolios/${this.state.editID}.json`, portfolio)
			.then((response) => {
				console.log(response.data);

				this.setState({
					portfolioName: "",
					portfolioSummary: "",
					clientName: "",
					timeLine: "",
					description: "",
					thumbnailURL:
						"http://wijegoonawardana.com/uploads/Portfolio/Thumbnail/",
					liveLink: "",
					featuredPortfolio: false,
					portfolioGallery: "",
					portfolioCategories: {},
					technologiesUsed: {},

					editState: false,
					editID: null,
				});

				this.fetchPortfolio();
			});
	};

	editButtonClickHandler = (id) => {
		// console.log(`Need to edit portfolio ${id}`);

		axios.get(`/portfolios/${id}.json`).then((response) => {
			// console.log(response.data);

			this.setState({
				editState: true,
				editID: id,
				portfolioName: response.data.portfolioName,
				portfolioSummary: response.data.portfolioSummary,
				clientName: response.data.clientName,
				timeLine: response.data.timeLine,
				description: response.data.description,
				thumbnailURL: response.data.thumbnailURL,
				liveLink: response.data.liveLink,
				featuredPortfolio: response.data.featuredPortfolio,
				portfolioGallery: response.data.portfolioGallery,
				portfolioCategories: response.data.portfolioCategories,
				technologiesUsed: response.data.technologiesUsed,
			});
		});
	};

	deleteButtonClickHandler = (id) => {
		axios.delete(`/portfolios/${id}.json`).then((response) => {
			console.log();
			this.fetchPortfolio();
		});
	};

	render() {
		let categorySelectDOM = (
			<select
				required
				name="portfolioCategories"
				className="form-select"
				multiple={true}
				aria-label="multiple select"
				// value={this.state.portfolioCategories}
				onChange={(e) => {
					let options = e.target.options;
					let values = [];

					for (let i = 0; i < options.length; i++) {
						if (options[i].selected) {
							axios
								.get(`/categories/${options[i].value}.json`)
								.then((response) => {
									values.push(response.data);
								});
						}
					}

					this.setState({ portfolioCategories: values });
				}}
			>
				{this.state.categories.map((category) => (
					<option value={category.id} key={category.id}>
						{category.categoryName}
					</option>
				))}
			</select>
		);

		let technologySelectDOM = (
			<select
				required
				name="technologiesUsed"
				className="form-select"
				multiple={true}
				aria-label="multiple select"
				onChange={(e) => {
					let options = e.target.options;
					let values = [];

					for (let i = 0; i < options.length; i++) {
						if (options[i].selected) {
							axios
								.get(`/technologies/${options[i].value}.json`)
								.then((response) => {
									// console.log(response);
									values.push(response.data);
								});
						}
					}

					// console.log(values);

					this.setState({ technologiesUsed: values });
				}}
			>
				{this.state.technologies.map((technology) => (
					<option value={technology.id} key={technology.id}>
						{technology.technologyName}
					</option>
				))}
			</select>
		);

		let ButtonDOM = (
			<button
				type="submit"
				className="btn btn-primary text-center"
				onClick={(e) => this.submitPortfolioHandler(e)}
			>
				Add Portfolio
			</button>
		);

		let portfolioDOM = (
			<div className="text-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);

		if (!this.state.loading) {
			portfolioDOM = (
				<section>
					<ul className="list-group">
						{this.state.portfolios.map((portfolio) => {
							const portfolioCategoryArray = [];

							for (let key in portfolio.portfolioCategories) {
								portfolioCategoryArray.push({
									...portfolio.portfolioCategories[key],
									id: key,
								});
							}

							const technologiesUsedArray = [];

							for (let key in portfolio.technologiesUsed) {
								technologiesUsedArray.push({
									...portfolio.technologiesUsed[key],
									id: key,
								});
							}

							const portfolioGalleryArray = portfolio.portfolioGallery.split(
								","
							);

							return (
								<li
									className="list-group-item d-flex align-items-center justify-content-between mb-3"
									key={portfolio.id}
								>
									<div className="w-75">
										<h2>
											<a href={portfolio.liveLink} className="text-dark">
												{portfolio.portfolioName}
											</a>{" "}
											{portfolio.featuredPortfolio ? (
												<span className="delete-Btn badge bg-success rounded-pill me-3">
													Featured Portfolio
												</span>
											) : null}
										</h2>
										<h3>
											<i>{portfolio.timeLine}</i> |{" "}
											<span>{portfolio.clientName}</span>
										</h3>
										<p>
											<strong>{portfolio.portfolioSummary}</strong>
										</p>
										<p>{portfolio.description}</p>
										<hr />
										<div>
											{portfolioCategoryArray.map((categoryItem) => {
												return (
													<span
														key={categoryItem.id}
														className="badge bg-info rounded-pill me-3"
													>
														{categoryItem.categoryName}
													</span>
												);
											})}
										</div>
										<br></br>
										<div>
											{technologiesUsedArray.map((technologyItem) => {
												return (
													<span
														key={technologyItem.id}
														className="badge bg-secondary rounded-pill me-3"
													>
														{technologyItem.technologyName}
													</span>
												);
											})}
										</div>
										<hr />
										<div className="d-flex align-items-center justify-content-between">
											<div>
												<img
													src={portfolio.thumbnailURL}
													alt=""
													className="img-thumbnail rounded"
													width="100"
												/>
											</div>
											<div>
												{portfolioGalleryArray.map((galleryImage, index) => {
													return (
														<img
															key={index}
															src={galleryImage}
															alt=""
															className="img-thumbnail rounded"
															width="150"
														/>
													);
												})}
											</div>
										</div>
									</div>
									<div>
										<span
											className="delete-Btn badge bg-danger rounded-pill me-3"
											onClick={() =>
												this.deleteButtonClickHandler(portfolio.id)
											}
										>
											Delete
										</span>
										<span
											className="delete-Btn badge bg-warning rounded-pill"
											onClick={() => this.editButtonClickHandler(portfolio.id)}
										>
											Edit
										</span>
									</div>
								</li>
							);
						})}
					</ul>
				</section>
			);
		}

		if (this.state.editState) {
			categorySelectDOM = (
				<React.Fragment>
					<select
						required
						name="portfolioCategories"
						className="form-select"
						multiple={true}
						aria-label="multiple select"
						// value={this.state.portfolioCategories}
						onChange={(e) => {
							let options = e.target.options;
							let values = [];

							for (let i = 0; i < options.length; i++) {
								if (options[i].selected) {
									axios
										.get(`/categories/${options[i].value}.json`)
										.then((response) => {
											values.push(response.data);
										});
								}
							}

							this.setState({ portfolioCategories: values });
						}}
					>
						{this.state.categories.map((category) => (
							<option value={category.id} key={category.id}>
								{category.categoryName}
							</option>
						))}
					</select>
					<div id="emailHelp" className="form-text">
						Please select mentions items again{" "}
						{this.state.portfolioCategories.map((portfolio, index) => {
							return (
								<span
									className="badge rounded-pill bg-light text-dark me-2"
									key={index}
								>
									{portfolio.categoryName}
								</span>
							);
						})}
					</div>
				</React.Fragment>
			);

			technologySelectDOM = (
				<React.Fragment>
					<select
						required
						name="technologiesUsed"
						className="form-select"
						multiple={true}
						aria-label="multiple select"
						onChange={(e) => {
							let options = e.target.options;
							let values = [];

							for (let i = 0; i < options.length; i++) {
								if (options[i].selected) {
									axios
										.get(`/technologies/${options[i].value}.json`)
										.then((response) => {
											// console.log(response);
											values.push(response.data);
										});
								}
							}

							// console.log(values);

							this.setState({ technologiesUsed: values });
						}}
					>
						{this.state.technologies.map((technology) => (
							<option value={technology.id} key={technology.id}>
								{technology.technologyName}
							</option>
						))}
					</select>
					<div id="emailHelp" className="form-text">
						Please select mentions items again{" "}
						{this.state.technologiesUsed.map((tecchnology, index) => {
							return (
								<span
									className="badge rounded-pill bg-light text-dark me-2"
									key={index}
								>
									{tecchnology.technologyName}
								</span>
							);
						})}
					</div>
				</React.Fragment>
			);

			ButtonDOM = (
				<button
					type="submit"
					className="btn btn-warning text-center"
					onClick={(e) => this.submitEditPortfolioHandler(e)}
				>
					Edit Portfolio
				</button>
			);
		}

		return (
			<section className="container-fluid">
				<LayoutHeader>Portfolios</LayoutHeader>

				<div className="w-75 mx-auto mb-5">
					<div className="card">
						<div className="card-body">
							<form>
								<div className="mb-3">
									<label htmlFor="portfolioName" className="form-label">
										Portfolio Name
									</label>

									<input
										type="text"
										name="portfolioName"
										className="form-control"
										value={this.state.portfolioName}
										onChange={(e) =>
											this.setState({ portfolioName: e.target.value })
										}
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="portfolioSummary" className="form-label">
										Portfolio Summary
									</label>

									<textarea
										className="form-control"
										value={this.state.portfolioSummary}
										onChange={(e) =>
											this.setState({ portfolioSummary: e.target.value })
										}
									></textarea>
								</div>

								<div className="mb-3">
									<label htmlFor="clientName" className="form-label">
										Client Name
									</label>

									<input
										type="text"
										name="clientName"
										className="form-control"
										value={this.state.clientName}
										onChange={(e) =>
											this.setState({ clientName: e.target.value })
										}
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="timeLine" className="form-label">
										Timeline
									</label>

									<input
										type="text"
										name="timeLine"
										className="form-control"
										value={this.state.timeLine}
										onChange={(e) =>
											this.setState({ timeLine: e.target.value })
										}
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="description" className="form-label">
										Description
									</label>

									<textarea
										className="form-control"
										value={this.state.description}
										onChange={(e) =>
											this.setState({ description: e.target.value })
										}
									></textarea>
								</div>

								<div className="mb-3">
									<label htmlFor="thumbnailURL" className="form-label">
										thumbnail Url
									</label>

									<input
										type="text"
										name="thumbnailURL"
										className="form-control"
										value={this.state.thumbnailURL}
										onChange={(e) =>
											this.setState({ thumbnailURL: e.target.value })
										}
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="liveLink" className="form-label">
										Live Link
									</label>

									<input
										type="text"
										name="liveLink"
										className="form-control"
										value={this.state.liveLink}
										onChange={(e) =>
											this.setState({ liveLink: e.target.value })
										}
									/>
								</div>

								<div className="mb-3">
									<div className="form-check">
										<input
											type="checkbox"
											name=""
											className="form-check-input"
											value={this.state.featuredPortfolio}
											checked={this.state.featuredPortfolio}
											onChange={(e) =>
												this.setState({
													featuredPortfolio: !this.state.featuredPortfolio,
												})
											}
										/>

										<label htmlFor="" className="form-check-label">
											Featured Portfolio
										</label>
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="portfolioGallery" className="form-label">
										Portfolio Gallery Image Links
									</label>

									<div className="form-text">
										Please enter , this to saperate the links
									</div>
									<textarea
										className="form-control"
										value={this.state.portfolioGallery}
										onChange={(e) => {
											this.setState({ portfolioGallery: e.target.value });
										}}
									></textarea>
								</div>

								<div className="mb-3">
									<label htmlFor="portfolioCategories" className="form-label">
										Portfolio Categories
									</label>

									{categorySelectDOM}
								</div>

								<div className="mb-3">
									<label htmlFor="technologiesUsed" className="form-label">
										Technologies Used
									</label>

									{technologySelectDOM}
								</div>

								{ButtonDOM}
							</form>
						</div>
					</div>
				</div>

				{portfolioDOM}
			</section>
		);
	}
}

export default Portfolios;
