import React from "react";
import SlickSlider from "react-slick";

function SkillSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	return (
		<div>
			<h2> Multiple items </h2>
			<SlickSlider {...settings}>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
				<div>
					<h3>7</h3>
				</div>
				<div>
					<h3>8</h3>
				</div>
				<div>
					<h3>9</h3>
				</div>
			</SlickSlider>
		</div>
	);
}

export default SkillSlider;
