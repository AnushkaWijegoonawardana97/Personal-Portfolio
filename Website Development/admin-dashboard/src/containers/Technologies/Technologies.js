import React, { Component } from "react";
import LayoutHeader from "../../components/UI/LayoutHeader/LayoutHeader";
import axios from "../../axios";

export class Technologies extends Component {
	state = {
		technologyName: "",
		technologyIcon: "http://wijegoonawardana.com/uploads/skills/",
		technologies: [],
		loading: true,
		editState: false,
		editId: null,
	};

	fetchTechnologies() {
		axios.get("/technologies.json").then((response) => {
			const fetchedTechnologies = [];

			for (let key in response.data) {
				fetchedTechnologies.push({ ...response.data[key], id: key });
			}

			this.setState({ loading: false, technologies: fetchedTechnologies });
		});
	}

	componentDidMount() {
		this.fetchTechnologies();
	}

	submitTechnologyHandler = (e) => {
		e.preventDefault();
		// console.log("From Submitted");

		const technology = {
			technologyName: this.state.technologyName,
			technologyIcon: this.state.technologyIcon,
		};

		axios.post("/technologies.json", technology).then((response) => {
			// console.log(response);
			this.setState({
				technologyName: "",
				technologyIcon: "http://wijegoonawardana.com/uploads/skills/",
			});
			this.fetchTechnologies();
		});
	};

	submiteditTechnologyHandler = (e) => {
		e.preventDefault();
		// console.log(`${this.state.editId} technology edited`);

		const technology = {
			technologyName: this.state.technologyName,
			technologyIcon: this.state.technologyIcon,
		};

		axios
			.put(`/technologies/${this.state.editId}.json`, technology)
			.then((response) => {
				console.log(response);
				this.setState({
					technologyName: "",
					technologyIcon: "http://wijegoonawardana.com/uploads/skills/",
					editState: false,
					editId: null,
				});
				this.fetchTechnologies();
			});
	};

	editButtonClickHandler = (id) => {
		// console.log(`Edit technology id ${id}`);
		this.setState({ editState: true });

		axios.get(`/technologies/${id}.json`).then((response) => {
			// console.log(response);
			this.setState({
				technologyName: response.data.technologyName,
				technologyIcon: response.data.technologyIcon,
				editId: id,
			});
		});
	};

	deleteButtonClickHandler = (id) => {
		// console.log(`Delete this technology ${id}`);

		axios.delete(`/technologies/${id}.json`).then((response) => {
			// console.log(response);
			this.fetchTechnologies();
		});
	};

	render() {
		let technologiesDom = (
			<div className="text-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);

		if (!this.state.loading) {
			technologiesDom = (
				<ul className="list-group">
					{this.state.technologies.map((technology) => (
						<li
							key={technology.id}
							className="list-group-item d-flex justify-content-between align-items-center"
						>
							<div>
								<img
									src={technology.technologyIcon}
									className="img-thumbnail rounded img-fluid me-5"
									alt=""
									width="50"
								/>

								<span className="fw-bold">{technology.technologyName}</span>
							</div>

							<div>
								<span
									className="delete-Btn badge bg-danger rounded-pill me-3"
									onClick={() => this.deleteButtonClickHandler(technology.id)}
								>
									Delete
								</span>
								<span
									className="delete-Btn badge bg-warning rounded-pill"
									onClick={() => this.editButtonClickHandler(technology.id)}
								>
									Edit
								</span>
							</div>
						</li>
					))}
				</ul>
			);
		}

		let ButtonDOM = (
			<button
				type="submit"
				className="btn btn-primary text-center"
				onClick={(e) => this.submitTechnologyHandler(e)}
			>
				Add Technology
			</button>
		);

		if (this.state.editState) {
			ButtonDOM = (
				<button
					type="submit"
					className="btn btn-warning text-center"
					onClick={(e) => this.submiteditTechnologyHandler(e)}
				>
					Edit Technology
				</button>
			);
		}

		return (
			<section className="container-fluid">
				<LayoutHeader>Technologies</LayoutHeader>

				<div className="row">
					<div className="col-md-4 ">
						<div className="card">
							<div className="card-body">
								<form>
									<div className="mb-3">
										<label htmlFor="technologyName" className="form-label">
											Technology Name
										</label>
										<input
											type="text"
											name="technologyName"
											className="form-control"
											value={this.state.technologyName}
											onChange={(e) =>
												this.setState({ technologyName: e.target.value })
											}
										/>
									</div>

									<div className="mb-3">
										<label htmlFor="technologyIcon" className="form-label">
											Technology Icon URL
										</label>
										<input
											type="text"
											name="technologyIcon"
											className="form-control"
											value={this.state.technologyIcon}
											onChange={(e) =>
												this.setState({ technologyIcon: e.target.value })
											}
										/>
									</div>

									{ButtonDOM}
								</form>
							</div>
						</div>
					</div>

					<div className="col-md-8">{technologiesDom}</div>
				</div>
			</section>
		);
	}
}

export default Technologies;
