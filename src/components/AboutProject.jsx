import React from "react";

const AboutProject = ({ header1, header2, text, video }) => {
	return (
		<section className="project_about">
			{/* <div class="about__wrapper wrapper--small"> */}
			<div className="project_about__content">
				{/* <div class="about__content-blurb blurb blurb--framed"> */}

				{/* “The most difficult thing is the decision to act, the rest is merely tenacity.” */}
				<h2 className="project_blurb__heading__about">
					{header1}
					<br />
					{header2}
				</h2>
				<p className="project_blurb__copy project_no-margin">{text}</p>
				{/* </div> */}
				{/* <p class="about__content-signature">Yassine DEHHANI</p> */}
			</div>
			{video && (
				<div className="project_video_presentation">
					<video width="80%" height="80%" controls>
						<source src={video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			)}
			{/* </div> */}
		</section>
	);
};

export default AboutProject;
