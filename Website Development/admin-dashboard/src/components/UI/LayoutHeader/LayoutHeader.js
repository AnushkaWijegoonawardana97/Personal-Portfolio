import React from "react";

function LayoutHeader(props) {
	return (
		<div className="text-center mb-5">
			<h1>{props.children}</h1>
		</div>
	);
}

export default LayoutHeader;
