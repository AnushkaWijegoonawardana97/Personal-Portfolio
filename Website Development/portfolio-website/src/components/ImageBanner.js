import React from "react";
import PropTypes from "prop-types";

const ImageBanner = ({ imgClass }) => {
	const bannerClass = `imageBanner imageBanner-${imgClass}`;

	return <div className={bannerClass}></div>;
};

ImageBanner.propTypes = {
	imgClass: PropTypes.string.isRequired,
};

export default ImageBanner;
