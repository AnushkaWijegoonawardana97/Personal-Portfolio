import React from "react";

function ContactMapForm() {
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
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<textarea
							name="message"
							rows="10"
							className="form-control"
							placeholder="Your Message"
						></textarea>
					</div>

					<input type="button" value="SUBMIT NOW" className="btn-form" />
				</form>
			</div>
		</section>
	);
}

export default ContactMapForm;
