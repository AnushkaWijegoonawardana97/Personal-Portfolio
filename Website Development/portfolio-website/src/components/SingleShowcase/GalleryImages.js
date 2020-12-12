import React from "react";
import SlickSlider from "react-slick";

function GalleryImages({ PortfolioGalleries }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		cssEase: "linear",
		centerPadding: "2rem",
	};

	return (
		<div>
			<SlickSlider {...settings}>
				{PortfolioGalleries.map((PortfolioGallery) => (
					<img src={PortfolioGallery} alt="" />
				))}
			</SlickSlider>
		</div>
	);
}

export default GalleryImages;
