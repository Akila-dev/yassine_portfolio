import React from "react";

const ThankYou = () => {
	return (
		<header className="header">
			<div className="project_introduction">
				<h1 className="introduction__content">
					<span className="introduction__content-el introduction__content-el--description">
						Thank you
					</span>
					<span className="introduction__content-el introduction__content-el--job text-center-sm">
						I will get back to you soon!
					</span>
				</h1>
				<div className="go-home_404">
					<a className="navigation__cta button" href="/">
						Home
					</a>
				</div>
			</div>
		</header>
	);
};

export default ThankYou;
