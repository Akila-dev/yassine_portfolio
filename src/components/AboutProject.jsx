import React from "react";

const AboutProject = ({ header1, header2, text, video }) => {
	return (
		<section className="about">
			{/* <div class="about__wrapper wrapper--small"> */}
			<div className="about__content">
				{/* <div class="about__content-blurb blurb blurb--framed"> */}

				{/* “The most difficult thing is the decision to act, the rest is merely tenacity.” */}
				<h2 className="blurb__heading__about">
					{header1}
					<br />
					{header2}
				</h2>
				<p className="blurb__copy no-margin">{text}</p>
				{/* </div> */}
				{/* <p class="about__content-signature">Yassine DEHHANI</p> */}
			</div>
			{video && (
				<div className="video_presentation">
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
