import React, { Component } from "react";
import LayoutHeader from "../../components/UI/LayoutHeader/LayoutHeader";
import axios from "../../axios";

export class Messages extends Component {
	state = {
		messages: [],
		loading: true,
		editState: false,
		editId: null,
	};

	fetchMessages = () => {
		axios.get("/contectdetails.json").then((response) => {
			const fetchedMessages = [];

			for (let key in response.data) {
				fetchedMessages.push({ ...response.data[key], id: key });
			}

			console.log(fetchedMessages);

			this.setState({ loading: false, messages: fetchedMessages });
		});
	};

	readCompleteClickHandler = ({
		id,
		nameText,
		emailText,
		subjectText,
		messageText,
	}) => {
		const data = {
			formChecked: true,
			nameText,
			emailText,
			subjectText,
			messageText,
		};

		axios.put(`/contectdetails/${id}.json`, data).then((response) => {
			console.log(response);
			this.fetchMessages();
		});
	};

	componentDidMount() {
		this.fetchMessages();
	}

	render() {
		let messageDOM = (
			<div className="text-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);

		if (!this.state.loading) {
			messageDOM = (
				<div>
					{this.state.messages.map((message) => (
						<div
							className={
								message.formChecked
									? "card border-secondary mb-3"
									: "card border-success mb-3"
							}
							key={message.id}
						>
							<div
								className={
									message.formChecked
										? "card-body text-dark"
										: "card-body text-success"
								}
							>
								<div className="d-flex align-items-center justify-content-between">
									<h5 className="card-title">{message.subjectText}</h5>

									{!message.formChecked ? (
										<span
											className="badge rounded-pill bg-success"
											onClick={() => this.readCompleteClickHandler(message)}
										>
											New Message
										</span>
									) : null}
								</div>
								<p className="card-text">
									<strong>Name</strong> : {message.nameText} <br />
									<strong>Email</strong> : {message.emailText} <br />
									<strong>Message</strong> : {message.messageText} <br />
								</p>
							</div>
						</div>
					))}
				</div>
			);
		}

		return (
			<section className="container-fluid">
				<LayoutHeader>Messages</LayoutHeader>

				<div className="row">
					<div className="col-md-6 mx-auto">
						<h4 className="mb-5">New Messages</h4>

						{messageDOM}
					</div>
				</div>
			</section>
		);
	}
}

export default Messages;
