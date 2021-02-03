import React from "react";

function TimelineItem({
	timeline: {
		experienceName,
		organizationName,
		timeline,
		experienceType,
		description,
		organizationLogoUrl,
		organizationURL,
	},
}) {
	return (
		<div className="timeline-card">
			<div className="timeline-card-time serviceCard">
				<div className="fadingText">{experienceType}</div>

				<div className="primarySubHeading">{timeline}</div>
			</div>

			<div className="timeline-card-details">
				<a
					className="smallerText"
					href={organizationURL}
					target="_blank"
					rel="noreferrer"
				>
					{organizationName}
				</a>
				{/* <p className="smallerText">{organizationName}</p> */}

				<div className="secondarHeading">{experienceName}</div>

				<p>{description}</p>
			</div>
			<div className="timeline-card-logo">
				<a href={organizationURL} target="_blank" rel="noreferrer">
					<img src={organizationLogoUrl} alt="" className="img-fluid" />
				</a>
			</div>
		</div>
	);
}

export default TimelineItem;
