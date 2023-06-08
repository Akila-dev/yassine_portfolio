import React from "react";

const Goals = ({ goals }) => {
	return (
		<section className="skills">
			<div className="skills__wrapper wrapper--large">
				<div className="skills__content blurb">
					<h2 className="blurb__heading">The Goals</h2>
					{/* Check it out project transform-link */}
				</div>

				<p className="skills_visual">
					{goals.map((goal, key) => (
						<span key={key}>
							●&emsp;{goal} <br />
						</span>
					))}
				</p>
			</div>
		</section>
	);
};

export default Goals;
