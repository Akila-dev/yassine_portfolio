import React from "react";

const ProjectIntro = ({ title, subtitle, img }) => {
	return (
		<header className="header">
			<div className="project_introduction project_wrapper--large">
				<h1 className="project_introduction__content">
					{/* <span class="introduction__content-el introduction__content-el--name">Yassine DEHHANI</span> */}
					<span className="project_introduction__content-el project_introduction__content-el--description">
						{title}
					</span>
					<span className="project_introduction__content-el project_introduction__content-el--job">
						{subtitle}
					</span>
				</h1>
				<div className="argo_visual">
					<img src={img} alt="" />
				</div>
				<svg
					className="project_introduction__arrow"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Layer_1"
					x="0"
					y="0"
					viewBox="0 0 130 65"
					// xml:space="preserve"
					enable-background="new 0 0 130 65"
				>
					<g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)">
						<path d="M22.2 634c-50-35-40-47 293-349 174-157 323-285 333-285 24 0 635 552 647 585 8 23 6 30-14 46 -13 10-31 19-40 19s-57-37-107-83c-50-45-179-162-287-260l-197-179 -147 134c-319 289-433 388-446 388C50.2 650 34.2 643 22.2 634z" />
					</g>
				</svg>
			</div>
		</header>
	);
};

export default ProjectIntro;
