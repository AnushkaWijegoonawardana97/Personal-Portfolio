import React from "react";
import Spinner from "../../layouts/Spinner";
import TimelineItem from "./TimelineItem";

function Timeline({ loading, timelineitems }) {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="timeLineContainer">
				{timelineitems.map((timeline) => (
					<TimelineItem key={timeline.id} timeline={timeline} />
				))}
			</div>
		);
	}
}

export default Timeline;
