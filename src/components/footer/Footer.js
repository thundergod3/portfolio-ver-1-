import React from "react";

import "./Footer.scss";

const socialMediaList = [
	{
		title: "Github",
		icon: "fab fa-github-square",
		link: "https://github.com/thundergod3",
	},
	{
		title: "Facebook",
		link: "https://www.facebook.com/mee.yee.9/",
		icon: "fab fa-facebook-square",
	},
	{
		title: "Instagram",
		icon: "fab fa-instagram-square",
		link: "https://www.instagram.com/cong_phan30/?hl=vi",
	},
];

const Footer = () => {
	return (
		<footer className="section-5 center">
			<div className="social-media">
				{socialMediaList.map((social, index) => (
					<a key={index} href={social.link} target="_blank" className="social-media-link">
						<i className={social.icon}></i>
					</a>
				))}
			</div>
			<p className="copyright">Copyright &copy; Phan Huy Công</p>
		</footer>
	);
};

export default Footer;
