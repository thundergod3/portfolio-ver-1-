import React from "react";

import images1 from "../../images/abc-game-app.jpg";
import images2 from "../../images/ecommerce.jpg";
import images3 from "../../images/sum-game-app.jpg";
import images4 from "../../images/lyric-search.jpg";
import images5 from "../../images/covid-tracker.jpg";
import images6 from "../../images/beach-resort.jpg";
import images7 from "../../images/simple-todo-list.jpg";
import images8 from "../../images/budget-calculator.jpg";
import images9 from "../../images/store-phone.jpg";
import images10 from "../../images/expense-tracker.jpg";
import images11 from "../../images/count-down-XO-game-app.jpg";

import "./ProjectList.scss";

import ProjectItem from "../projectItem/ProjectItem";

const projectList = [
	{
		name: "ABC Game App",
		img: images1,
		link: "https://abc-game-app.herokuapp.com",
		technologies: "ReactJS / SCSS ",
	},
	{
		name: "E-Commerce",
		img: images2,
		link: "https://lc-e-commerce-react-app.herokuapp.com/",
		technologies: "ReactJS / Redux / NodeJS / MongoDb ",
	},
	{
		name: "Sum Game App",
		img: images3,
		link: "https://sum-app-react.netlify.app/",
		technologies: "ReactJS / SCSS ",
	},
	{
		name: "Lyrics Tracks",
		img: images4,
		link: "https://lyrics-tracks.netlify.app/",
		technologies: "ReactJS / Redux / Redux-Saga / Bootstrap ",
	},
	{
		name: "Covid Tracker",
		img: images5,
		link: "https://reactcovidtracker.netlify.app/",
		technologies: "ReactJS / SCSS ",
	},
	{
		name: "Beach Resort App",
		img: images6,
		link: "https://beachresortroom.netlify.app/",
		technologies: "ReactJS / React-Context / Style Components / Bootstrap ",
	},
	{
		name: "Simple TODO App",
		img: images7,
		link: "https://todoappbasic.netlify.app/",
		technologies: "ReactJS / CSS ",
	},
	{
		name: "Budget Calculator",
		img: images8,
		link: "https://reactbudgetcalculator.netlify.app/",
		technologies: "ReactJS / CSS ",
	},
	{
		name: "Store Phone",
		img: images9,
		link: "https://reactstorephone.herokuapp.com/",
		technologies: "ReactJS / React-Context / Bootstrap ",
	},
	{
		name: "Expense Tracker",
		img: images10,
		link: "https://cong-expense-tracker-react-app.netlify.app/",
		technologies: "ReactJS / Redux / Redux-Saga / CSS / Boostrap ",
	},
	{
		name: "Countdown - XO Game App",
		img: images11,
		link: "https://thundergod3.github.io/Web_final-C4T8/",
		technologies: "HTML / CSS / JS",
	},
];

const ProjectList = () => {
	return (
		<section id="section-3" className="section-3">
			<h1 className="section-heading section-3-heading">My Projects</h1>
			<div className="projects-wrapper center">
				{projectList.map((project, index) => (
					<ProjectItem key={index} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectList;
