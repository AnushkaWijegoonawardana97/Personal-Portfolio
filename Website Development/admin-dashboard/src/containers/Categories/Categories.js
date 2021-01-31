import React, { Component } from "react";
import LayoutHeader from "../../components/UI/LayoutHeader/LayoutHeader";
import axios from "../../axios";

export class Categories extends Component {
	state = {
		categoryName: "",
		categories: [],
		loading: true,
		editState: false,
		editId: null,
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

	submiteditCategoryHandler = (e) => {
		e.preventDefault();
		// console.log("Edit This");

		const category = {
			categoryName: this.state.categoryName,
		};

		axios
			.put(`/categories/${this.state.editId}.json`, category)
			.then((response) => {
				// console.log(response);
				this.setState({ categoryName: "", editState: false, editId: null });
				this.fetchCategories();
			});
	};

	editButtonClickHandler = (id) => {
		// console.log("Need To Edit This");
		this.setState({ editState: true });

		axios.get(`/categories/${id}.json`).then((response) => {
			this.setState({ categoryName: response.data.categoryName, editId: id });
		});
	};

	deleteCategoryHandler = (id) => {
		// console.log(`Delete this ${id}`);

		axios.delete(`/categories/${id}.json`).then((response) => {
			// console.log(response);
			this.fetchCategories();
		});
	};

	render() {
		let categoriesDom = (
			<div className="text-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
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
								<span
									className="delete-Btn badge bg-danger rounded-pill me-3"
									onClick={() => this.deleteCategoryHandler(category.id)}
								>
									Delete
								</span>
								<span
									className="delete-Btn badge bg-warning rounded-pill"
									onClick={() => this.editButtonClickHandler(category.id)}
								>
									Edit
								</span>
							</div>
						</li>
					))}
				</ul>
			);
		}

		let ButtonDom = (
			<button
				type="submit"
				className="btn btn-primary text-center"
				onClick={(e) => this.submitCategoryHandler(e)}
			>
				Add Category
			</button>
		);

		if (this.state.editState) {
			ButtonDom = (
				<button
					type="submit"
					className="btn btn-warning text-center"
					onClick={(e) => this.submiteditCategoryHandler(e)}
				>
					Edit Category
				</button>
			);
		}

		return (
			<section className="container-fluid">
				<LayoutHeader>Categories</LayoutHeader>

				<div className="row">
					<div className="col-md-4 ">
						<div className="card">
							<div className="card-body">
								<form>
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

									{ButtonDom}
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
