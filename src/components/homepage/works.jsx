import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{
							INFO.work.experiences.map((experience, index) => (
								<div className="work">
								<img
									src={experience.companyLogo}
									alt={`${experience.company} Logo`} 
									className="work-image"
								/>
								<div className="work-title">{experience.company}</div>
								<div className="work-subtitle" style={{maxWidth: 180}}>
									{experience.title}
								</div>
								<div className="work-duration">{experience.date}</div>
							</div>
								))
						}
						{/* <div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Facebook</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
