import React from "react";

import "./About.scss";

const progressList = [
	{
		title: "HTML",
		percent: 70,
	},
	{
		title: "CSS",
		percent: 70,
	},
	{
		title: "SASS",
		percent: 60,
	},
	{
		title: "JavaScript",
		percent: 70,
	},
	{
		title: "TypeScript",
		percent: 70,
	},
	{
		title: "ReactJS",
		percent: 70,
	},
	{
		title: "Redux / Redux-Saga",
		percent: 70,
	},
	{
		title: "Bootstrap / Material-UI",
		percent: 60,
	},
	{
		title: "Firebase",
		percent: 50,
	},
	{
		title: "Photoshop",
		percent: 70,
	},
	{
		title: "Figma",
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
