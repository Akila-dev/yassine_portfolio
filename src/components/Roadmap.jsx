import React from "react";

const Roadmap = ({ title, text, image }) => {
	return (
		<section className="cetifications wrapper--large">
			<div className="cetifications__wrapper wrapper--small">
				<div className="cetifications__content blurb">
					<h2 className="blurb__heading">{title}</h2>
					<p className="blurb__copy blurb__copy--tight">{text}</p>
				</div>
			</div>
			<div className="cetifications_visual">
				<img src={image} alt="" />
			</div>
		</section>
	);
};

export default Roadmap;
