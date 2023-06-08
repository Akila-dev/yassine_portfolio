import React from "react";


import cv from "../assets/download/DEHHANI_Yassine_CV_FR.pdf";

const Navbar = ({ type }) => {

	
	return (
		<div className="navigation">
			<div className="navigation__wrapper wrapper--large">
				<a className="navigation__logo logo" href="/">
					YD
				</a>
				{type === "home" && (
					<nav className="navigation__container">
						<ul className="navigation__list">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="#work">Portfolio</a>
							</li>
							<li>
								<a href="#blog">Blog</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/yassine-dehhani/"
									target="_blank"
									rel="noreferrer"
								>
									<strong>Linkedin</strong>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/yaxsomo"
									target="_blank"
									rel="noreferrer"
								>
									<strong>Github</strong>
								</a>
							</li>
						</ul>
					</nav>
				)}
				<div>
					<a
						id="download-cv-button"
						className="navigation__cta button"
						href={type === "home" ? { cv } : "/"}
						download={type === "home" ? "DEHHANI_Yassine_CV" : null}
					>
						{type === "home" ? "Download CV" : "Back Home"}
					</a>
				</div>
				<div className="navigation__burger">
					<span className="navigation__burger-el navigation__burger-el--top"></span>
					<span className="navigation__burger-el navigation__burger-el--middle"></span>
					<span className="navigation__burger-el navigation__burger-el--bottom"></span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
