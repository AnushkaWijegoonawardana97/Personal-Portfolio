import React from "react";
import SlickSlider from "react-slick";
import SliderItem from "./SliderItem";

function SkillSlider({ loading, technologies }) {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 6,
		slidesToScroll: 2,
		centerPadding: "2rem",
	};

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
