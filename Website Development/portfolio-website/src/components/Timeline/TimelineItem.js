import React from "react";

function TimelineItem({
	timeline: {
		ExperienceName,
		OrganizationName,
		Timeline,
		ExperienceType,
		Description,
		OrganizationLogo,
	},
}) {
	return (
		<div className="timeline-card">
			<div className="timeline-card-time serviceCard">
				<div className="fadingText">{ExperienceType}</div>

				<div className="primarySubHeading">{Timeline}</div>
			</div>

			<div className="timeline-card-details">
				<p className="smallerText">{OrganizationName}</p>

				<div className="secondarHeading">{ExperienceName}</div>

				<p>{Description}</p>
			</div>
			<div className="timeline-card-logo">
				<img src={OrganizationLogo} alt="" className="img-fluid" />
			</div>
		</div>
	);
}

export default TimelineItem;
