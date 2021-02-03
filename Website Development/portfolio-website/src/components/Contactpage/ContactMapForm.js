import React, { useState } from "react";
import axios from "axios";

function ContactMapForm() {
	const [nameText, setNameText] = useState("");
	const [emailText, setEmailText] = useState("");
	const [subjectText, setSubjectText] = useState("");
	const [messageText, setMessageText] = useState("");

	const formSubmitHandler = (e) => {
		e.preventDefault();
		console.log("Form Submited");

		const formData = {
			nameText,
			emailText,
			subjectText,
			messageText,
			formChecked: false,
		};

		axios
			.post(
				"https://aw-personal-portfolio-default-rtdb.firebaseio.com/contectdetails.json",
				formData
			)
			.then((response) => {
				// console.log(response);

				setNameText("");
				setEmailText("");
				setSubjectText("");
				setMessageText("");
			});
	};

	return (
		<section className="sectionPadding  contactFormMap">
			<div className="contactMap">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27106.178260276654!2d79.88441479797642!3d7.001664065884502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f701733bc4b7%3A0x49c88746d84006d0!2sAnushka%20Wijegoonawardana!5e0!3m2!1sen!2slk!4v1607420110555!5m2!1sen!2slk"
					frameborder="0"
					allowfullscreen=""
					aria-hidden="false"
					title="GoogleMapLocation"
					tabindex="0"
				></iframe>
			</div>

			<div className="contactForm">
				<form>
					<div className="form-group">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="form-control"
							value={nameText}
							onChange={(e) => setNameText(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="form-control"
							value={emailText}
							onChange={(e) => setEmailText(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							className="form-control"
							value={subjectText}
							onChange={(e) => setSubjectText(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<textarea
							name="message"
							rows="10"
							className="form-control"
							placeholder="Your Message"
							value={messageText}
							onChange={(e) => setMessageText(e.target.value)}
						></textarea>
					</div>

					<button className="btn-form" onClick={(e) => formSubmitHandler(e)}>
						SUBMIT NOW
					</button>
				</form>
			</div>
		</section>
	);
}

export default ContactMapForm;
