import { useState } from "react";

const ProjectSlider = ({ data }) => {
	const [isActive, setIsActive] = useState(0);
	return (
		<section id="work" className="work">
			<h2 className="work__heading title">Main Components</h2>
			<div className="work__wrapper wrapper--large">
				<ul className="work__list">
					{data.map((item, key) => (
						<li
							key={key}
							className={`work__list-el ${
								key === isActive && "work__list-el--is-active"
							}`}
						>
							<div className="work__content">
								<div className="work__content-blurb blurb blurb--framed">
									<h3 className="blurb__heading">
										{item.header1}
										<br />
										{item.header2}
									</h3>
									<p className="blurb__copy">{item.text}</p>
								</div>
							</div>
							<div className="work__visual">
								<img src={item.img} alt="Argo project" />
							</div>
						</li>
					))}
				</ul>
				<ul className="work__navigation">
					{data.map((item) => (
						<li className="work__navigation-el"></li>
					))}
				</ul>
				{/* <li class="work__navigation-el work__navigation-el--is-active"></li> */}
			</div>
		</section>
	);
};

export default ProjectSlider;
