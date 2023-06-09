import React from "react";

const Goals = ({ goals }) => {
	return (
		<section className="project_skills">
			<div className="project_skills__wrapper project_wrapper--large">
				<div className="project_skills__content project_blurb">
					<h2 className="project_blurb__heading">The Goals</h2>
					{/* Check it out project transform-link */}
				</div>

				<p className="project_skills_visual">
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
