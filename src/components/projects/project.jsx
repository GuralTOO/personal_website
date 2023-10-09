import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logos, title, description, linkText, link, link2, link2Text, status } = props;
	console.log("link2", link2)
	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						{logos.map((logo, index) => (
							<img
								key={index}
								src={logo}
								alt="logo"
								className="project-logo-image"
							/>
						))}
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-status">{status}</div>
					<div className="project-link">
						<Link to = {link} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</Link>
						{link2 === undefined ? null : 
						<Link to = {link2} style={{paddingLeft: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{link2Text}</div>
						</Link>
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
