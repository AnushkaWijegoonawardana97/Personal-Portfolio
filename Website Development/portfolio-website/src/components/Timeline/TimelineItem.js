import React from "react";

function TimelineItem({
	timeline: { Name, Organization, Timeline, ExperienceType, Description, Logo },
}) {
	return (
		<div className="timeline-card">
			<div className="timeline-card-time serviceCard">
				<div className="fadingText">{ExperienceType}</div>

				<div className="primarySubHeading">{Timeline}</div>
			</div>

			<div className="timeline-card-details">
				<p className="smallerText">{Organization}</p>

				<div className="secondarHeading">{Name}</div>

				<p>{Description}</p>
			</div>
			<div className="timeline-card-logo">
				<img
					src={`https://wijegoonawardana-dashboard.herokuapp.com${Logo.url}`}
					alt=""
					className="img-fluid"
				/>
			</div>
		</div>
	);
}

export default TimelineItem;
