import React from "react";

function SliderItem({ technology: { technologyName, technologyIcon } }) {
	return (
		<div className="text-center ">
			<img
				className="img-fluid text-center mx-auto"
				src={technologyIcon}
				alt={technologyName}
			/>
		</div>
	);
}

export default SliderItem;
