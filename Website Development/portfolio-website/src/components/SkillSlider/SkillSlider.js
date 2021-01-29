import React from "react";
import SlickSlider from "react-slick";
import SliderItem from "./SliderItem";

function SkillSlider({ loading, technologies, slideRowCount }) {
	// console.log(technologies.length);

	let settings;

	if (technologies.length >= 6) {
		settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 1000,
			slidesToShow: 6,
			slidesToScroll: 2,
			centerPadding: "2rem",
			slidesPerRow: slideRowCount,
			responsive: [
				{
					breakpoint: 1080,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						centerPadding: "1rem",
					},
				},
			],
		};
	} else {
		settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 1000,
			slidesToShow: technologies.length,
			slidesToScroll: 2,
			centerPadding: "2rem",
			slidesPerRow: slideRowCount,
			responsive: [
				{
					breakpoint: 1080,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						centerPadding: "1rem",
					},
				},
			],
		};
	}

	if (loading) {
		return null;
	} else {
		return (
			<div className="sectionPadding sectionPadding-bo skillSilder">
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
