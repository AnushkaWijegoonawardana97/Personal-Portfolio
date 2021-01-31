import React, { Component } from "react";
import LayoutHeader from "../../components/UI/LayoutHeader/LayoutHeader";
import axios from "../../axios";

export class Experiences extends Component {
	state = {
		experienceName: "",
		organizationName: "",
		organizationURL: "",
		organizationLogoUrl: "https://wijegoonawardana.com/uploads/Experience/",
		timeline: "",
		description: "",
		experienceType: "educational",
		order: "",
	};

	submitExperienceHandler = (e) => {
		e.preventDefault();
		console.log("Form Submitted");

		const experience = {
			experienceName: this.state.experienceName,
			organizationName: this.state.organizationName,
			organizationURL: this.state.organizationURL,
			organizationLogoUrl: this.state.organizationLogoUrl,
			timeline: this.state.timeline,
			description: this.state.description,
			experienceType: this.state.experienceType,
			order: this.state.order,
		};

		axios.post("/experiences.json", experience).then((response) => {
			console.log(response);

			this.setState({
				experienceName: "",
				organizationName: "",
				organizationURL: "",
				organizationLogoUrl: "https://wijegoonawardana.com/uploads/Experience/",
				timeline: "",
				description: "",
				experienceType: "educational",
				order: "",
			});
		});
	};

	render() {
		return (
			<section className="container-fluid">
				<LayoutHeader>Experiences</LayoutHeader>

				<div className="row">
					<div className="col-md-4">
						<div className="card">
							<div className="card-body">
								<form onSubmit={(e) => this.submitExperienceHandler(e)}>
									<div className="mb-3">
										<label htmlFor="experienceName" className="form-label">
											Experience Name
										</label>

										<input
											type="text"
											name="experienceName"
											className="form-control"
											value={this.state.experienceName}
											onChange={(e) =>
												this.setState({ experienceName: e.target.value })
											}
										/>
									</div>

									<div className="mb-3">
										<label htmlFor="organizationName" className="form-label">
											Organizaion Name
										</label>

										<input
											type="text"
											name="organizationName"
											className="form-control"
											value={this.state.organizationName}
											onChange={(e) =>
												this.setState({ organizationName: e.target.value })
											}
										/>
									</div>

									<div className="mb-3">
										<label htmlFor="organizationURL" className="form-label">
											Organizaion URL
										</label>

										<input
											type="text"
											name="organizationURL"
											className="form-control"
											value={this.state.organizationURL}
											onChange={(e) =>
												this.setState({ organizationURL: e.target.value })
											}
										/>
									</div>

									<div className="mb-3">
										<label htmlFor="organizationLogoUrl" className="form-label">
											Organizaion Logo Url
										</label>

										<input
											type="text"
											name="organizationLogoUrl"
											className="form-control"
											value={this.state.organizationLogoUrl}
											onChange={(e) =>
												this.setState({ organizationLogoUrl: e.target.value })
											}
										/>
									</div>

									<div className="mb-3">
										<label htmlFor="timeline" className="form-label">
											Timeline
										</label>

										<input
											type="text"
											name="timeline"
											className="form-control"
											value={this.state.timeline}
											onChange={(e) =>
												this.setState({ timeline: e.target.value })
											}
										/>
									</div>

									<div className="mb-3">
										<label htmlFor="description" className="form-label">
											Description
										</label>
										<textarea
											name="description"
											className="form-control"
											value={this.state.description}
											onChange={(e) =>
												this.setState({ description: e.target.value })
											}
										></textarea>
									</div>

									<div className="mb-3">
										<select
											className="form-select"
											aria-label="Default select example"
											value={this.state.experienceType}
											onChange={(e) =>
												this.setState({ experienceType: e.target.value })
											}
										>
											<option value="educational">Educational</option>
											<option value="occupation">Occupation</option>
										</select>
									</div>

									<div className="mb-3">
										<label htmlFor="order" className="form-label">
											Order
										</label>

										<input
											type="text"
											name="order"
											className="form-control"
											value={this.state.order}
											onChange={(e) => this.setState({ order: e.target.value })}
										/>
									</div>

									<button type="submit" className="btn btn-primary text-center">
										Add Experience
									</button>
								</form>
							</div>
						</div>
					</div>

					<div className="col-md-8"></div>
				</div>
			</section>
		);
	}
}

export default Experiences;
