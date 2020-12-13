import React from "react";
import SlickSlider from "react-slick";
import SliderItem from "./SliderItem";

function SkillSlider({ loading, technologies }) {
	// console.log(technologies.length);

	let settings;

	if (technologies.length >= 6) {
		settings = {
			dots: false,
			infinite: true,
			autoplay: true,
			speed: 1000,
			slidesToShow: 6,
			slidesToScroll: 2,
			centerPadding: "2rem",
			responsive: [
				{
					breakpoint: 1080,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
					},
				},
			],
		};
	} else {
		settings = {
			dots: false,
			infinite: true,
			autoplay: true,
			speed: 1000,
			slidesToShow: technologies.length,
			slidesToScroll: 2,
			centerPadding: "2rem",
			responsive: [
				{
					breakpoint: 1080,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
					},
				},
			],
		};
	}

	if (loading) {
		return null;
	} else {
		return (
			<div className="sectionPadding sectionPadding-bo">
				<SlickSlider {...settings}>
					{technologies.map((technology) => (
						<SliderItem key={technology.id} technology={technology} />
					))}
				</SlickSlider>
			</div>
		);
	}
}

export default SkillSlider;
