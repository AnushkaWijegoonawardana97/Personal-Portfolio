import React from "react";

function TimelineItem({
	timeline: {
		ExperienceName,
		OrganizationName,
		Timeline,
		ExperienceType,
		Description,
		OrganizationLogo,
		OrganizationURL,
	},
}) {
	return (
		<div className="timeline-card">
			<div className="timeline-card-time serviceCard">
				<div className="fadingText">{ExperienceType}</div>

				<div className="primarySubHeading">{Timeline}</div>
			</div>

			<div className="timeline-card-details">
				<a
					className="smallerText"
					href={OrganizationURL}
					target="_blank"
					rel="noreferrer"
				>
					{OrganizationName}
				</a>
				{/* <p className="smallerText">{OrganizationName}</p> */}

				<div className="secondarHeading">{ExperienceName}</div>

				<p>{Description}</p>
			</div>
			<div className="timeline-card-logo">
				<a href={OrganizationURL} target="_blank" rel="noreferrer">
					<img src={OrganizationLogo} alt="" className="img-fluid" />
				</a>
			</div>
		</div>
	);
}

export default TimelineItem;
