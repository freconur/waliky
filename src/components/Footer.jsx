import React from 'react';
import SocialMedia from './SocialMedia';
import '../styles/Footer.css';
import '../assets/font/flaticon.css';
import '../styles/Footer_res.css';
const Footer = () => {
	return (
		<div className="Footer">
			<div className="Footer__container">
				<div className="Footer__socialMedia">
				<SocialMedia/>

				</div>

				<div>
					<h1 className="Footer__tittle">©Waliky 2022</h1>
				</div>
			</div>
		</div>
	)
}

export default Footer;