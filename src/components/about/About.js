import React from "react";

import "./About.scss";

const progressList = [
	{
		title: "HTML",
		percent: 97,
	},
	{
		title: "CSS",
		percent: 90,
	},
	{
		title: "SASS",
		percent: 89,
	},
	{
		title: "JavaScript",
		percent: 87,
	},
	{
		title: "ReactJS",
		percent: 85,
	},
	{
		title: "Redux / Redux-Saga",
		percent: 82,
	},
	{
		title: "Bootstrap / Material-UI",
		percent: 70,
	},
	{
		title: "Firebase",
		percent: 50,
	},
];

const servicesList = [
	{
		title: "Creative",
		icon: "far fa-lightbulb",
	},
	{
		title: "Problem",
		icon: "fas fa-cut",
	},
	{
		title: "Fast",
		icon: "fas fa-tachometer-alt",
	},
	{
		title: "Dynamic",
		icon: "fas fa-rocket",
	},
];

const About = () => {
	return (
		<section id="section-2" className="section-2">
			<h1 className="section-heading section-2-heading">About me</h1>
			<div className="progress-bars-wrapper">
				{progressList.map((progress, index) => (
					<div key={index} className="progress-bar">
						<p className="progress-text">
							{progress.title}
							<span>{progress.percent}</span>%
						</p>
						<div className="progress-percent"></div>
					</div>
				))}
			</div>
			<div className="services">
				{servicesList.map((service, index) => (
					<div key={index} className="service">
						<i className={service.icon}></i>
						<h2 className="service-heading">{service.title}</h2>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
