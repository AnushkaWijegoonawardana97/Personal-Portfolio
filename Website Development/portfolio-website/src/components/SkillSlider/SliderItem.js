import React from "react";

function SliderItem({ technology: { Name, IconURL } }) {
	return (
		<div className="text-center">
			<img className="img-fluid text-center mx-auto" src={IconURL} alt={Name} />
		</div>
	);
}

export default SliderItem;
