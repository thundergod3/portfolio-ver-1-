import React, { useState, useEffect, useRef } from "react";

import classNames from "classnames";
import "./Navbar.scss";

const Navbar = () => {
	const [statusScroll, setStatusScroll] = useState(false);
	let navbar;
	const navbarOffsetTop = 730;
	const progressBarPercents = [70, 70, 60, 70, 70, 70, 60, 50, 70, 50];

	useEffect(() => {
		navbar = document.querySelector(".navbar");

		window.addEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		const progress = document.querySelector(".progress-bars-wrapper");
		if (window.scrollY >= navbarOffsetTop) {
			setStatusScroll(true);
		} else {
			setStatusScroll(false);
		}

		if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
			document.querySelectorAll(".progress-percent").forEach((el, index) => {
				el.style.width = `${progressBarPercents[index]}%`;
			});
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [statusScroll]);

	return (
		<nav
			ref={navbar}
			className={classNames({
				"navbar center": true,
				sticky: statusScroll,
			})}>
			<a href="#section-1" className="navbar-link">
				Home
			</a>
			<a href="#section-2" className="navbar-link">
				About
			</a>
			<a href="#section-3" className="navbar-link">
				Portfolio
			</a>
		</nav>
	);
};

export default Navbar;
