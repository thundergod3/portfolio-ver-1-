import React, { useRef, useEffect, useState } from "react";

import "./App.scss";

import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Footer from "./components/footer/Footer";

const App = () => {
	const [statusScroll, setStatusScroll] = useState(false);

	const changeColor = () => {
		if (
			document.querySelector(".section-1").offsetTop <= window.scrollY &&
			window.scrollY <= document.querySelector(".section-2").offsetTop - 150
		) {
			document.querySelectorAll(".navbar-link")[0].classList.add("change");
			document.querySelectorAll(".navbar-link")[1].classList.remove("change");
			document.querySelectorAll(".navbar-link")[2].classList.remove("change");
		} else if (
			document.querySelector(".section-2").offsetTop <= window.pageYOffset &&
			window.pageYOffset <= document.querySelector(".section-3").offsetTop - 20
		) {
			document.querySelectorAll(".navbar-link")[1].classList.add("change");
			document.querySelectorAll(".navbar-link")[0].classList.remove("change");
			document.querySelectorAll(".navbar-link")[2].classList.remove("change");
		} else if (
			document.querySelector(".section-3").offsetTop <= window.pageYOffset + 10 &&
			window.pageYOffset <= document.querySelector(".section-5").offsetTop - 10
		) {
			document.querySelectorAll(".navbar-link")[2].classList.add("change");
			document.querySelectorAll(".navbar-link")[0].classList.remove("change");
			document.querySelectorAll(".navbar-link")[1].classList.remove("change");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", () => changeColor());
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => changeColor());
	}, [statusScroll]);

	return (
		<div className="container">
			<Landing />
			<Navbar />
			<About />
			<ProjectList />
			<Footer />
		</div>
	);
};

export default App;
