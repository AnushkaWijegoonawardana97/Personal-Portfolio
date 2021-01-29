import React, { Component } from "react";
import LayoutHeader from "../../components/UI/LayoutHeader/LayoutHeader";

export class Categories extends Component {
	render() {
		return (
			<section className="container">
				<LayoutHeader>Categories</LayoutHeader>

				<form>
					<div className="mb-3">
						<label htmlFor="" className="form-label"></label>
					</div>
				</form>
			</section>
		);
	}
}

export default Categories;
