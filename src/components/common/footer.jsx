import React from "react";
import { Link } from "react-router-dom";
import Socials from "../about/socials";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links" >
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/education">Education</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/work">Work</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="footer-socials">
					<Socials />
				</div>

				{/* <div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 GN-Works. All Rights Reserved.
					</div>
				</div> */}
			</div>
		</React.Fragment>
	);
};

export default Footer;
