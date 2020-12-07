import React from "react";

import personImg from "../../images/person_1.jpg";
import "./Landing.scss";

const Landing = () => {
	return (
		<section id="section-1" className="section-1 center">
			<h1 className="section-1-heading">Web Developer</h1>
			<img src={personImg} alt="Phan Huy Công" className="person-img" />
			<h3 className="person-name">Phan Huy Công</h3>
			<a href="#section-3" className="section-1-btn">
				Projects
			</a>
		</section>
	);
};

export default Landing;
