import React, { Component } from "react";
import LayoutHeader from "../../components/UI/LayoutHeader/LayoutHeader";
import axios from "../../axios";

export class Categories extends Component {
	state = {
		categoryName: "",
		categories: [],
		loading: true,
	};

	fetchCategories() {
		axios.get("/categories.json").then((response) => {
			const fetchedCategories = [];
			// console.log(response.data);

			for (let key in response.data) {
				fetchedCategories.push({ ...response.data[key], id: key });
			}

			// console.log(fetchedCategories);
			this.setState({ loading: false, categories: fetchedCategories });
		});
	}

	componentDidMount() {
		this.fetchCategories();
	}

	submitCategoryHandler = (e) => {
		e.preventDefault();
		// console.log("Form Submitted");

		const category = {
			categoryName: this.state.categoryName,
		};

		axios.post("/categories.json", category).then((response) => {
			// console.log(response);
			this.setState({ categoryName: "" });
			this.fetchCategories();
		});
	};

	render() {
		let categoriesDom = (
			<div cl="text-center">
				<div cl="spinner-border" role="status">
					<span cl="visually-hidden">Loading...</span>
				</div>
			</div>
		);

		if (!this.state.loading) {
			categoriesDom = (
				<ul className="list-group">
					{this.state.categories.map((category) => (
						<li
							key={category.id}
							className="list-group-item d-flex justify-content-between align-items-center"
						>
							<span className="fw-bold">{category.categoryName}</span>

							<div>
								<span className="delete-Btn badge bg-danger rounded-pill me-3">
									Delete
								</span>
								<span className="delete-Btn badge bg-warning rounded-pill">
									Edit
								</span>
							</div>
						</li>
					))}
				</ul>
			);
		}

		return (
			<section className="container-fluid">
				<LayoutHeader>Categories</LayoutHeader>

				<div className="row">
					<div className="col-md-4 ">
						<div className="card">
							<div className="card-body">
								<form onSubmit={(e) => this.submitCategoryHandler(e)}>
									<div className="mb-3">
										<label htmlFor="category-name" className="form-label">
											Category Name
										</label>
										<input
											type="text"
											name="category-name"
											className="form-control"
											value={this.state.categoryName}
											onChange={(e) =>
												this.setState({ categoryName: e.target.value })
											}
										/>
									</div>

									<button type="submit" className="btn btn-primary text-center">
										Add Category
									</button>
								</form>
							</div>
						</div>
					</div>

					<div className="col-md-8">{categoriesDom}</div>
				</div>
			</section>
		);
	}
}

export default Categories;
