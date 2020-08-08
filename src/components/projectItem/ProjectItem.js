import React from "react";

import "./ProjectItem.scss";

const ProjectItem = ({ project }) => {
	return (
		<div className="project">
			<div className="project-text">
				<h2 className="project-name">{project.name}</h2>
				<h4 className="project-technologies">{project.technologies}</h4>
			</div>
			<img src={project.img} className="project-img" />
			<a href={project.link} className="project-link" target="_blank">
				Go to website
			</a>
		</div>
	);
};

export default ProjectItem;
