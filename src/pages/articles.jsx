import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import WorkingLate from "../Images/working-late.jpg";
import Headshot from "../Images/Gural-headshot.jpg";
import AWSStation from "../Images/aws_station.jpg";
import HomeStationNight from "../Images/HomeStation_Night.jpg";
import INFO from "../data/user";
import SEO from "../data/seo";

import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-left-side">
								<div className="title about-title">
									{INFO.work.title}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.work.description}
								</div>
								<div className="experience-container">
									{
										INFO.work.experiences.map((experience, index) => (
											<div key={index} className="experience-card">
												<div className="experience-header">
													<div className="experience-details">
														<div className="experience-top-row">
															<h2 className="job-title">{experience.title}</h2>
															
															<p className="job-date">{experience.date}</p>
														</div>
														<div className="experience-second-row">
															<img 
																src={experience.companyLogo}
																alt={`${experience.company} Logo`} 
																className="company-logo"
															/>
															<a 
																href={experience.companyLink} 
																target="_blank" 
																rel="noopener noreferrer"
																className="company-name"
															>
																{experience.company}
															</a>
														</div>
													</div>
												</div>
												<p className="job-description">{experience.description}</p>
												<div className="skills">
													{/* add more space between skills */}
													Skills: &nbsp;
													{
														experience.skills.map((skill, index) => (
															<b style = {{	color: "#007ACC", marginRight: "5px"}}>
																{skill + (index === experience.skills.length - 1 ? "" : ", ")}																
															</b>
														))
													}
													
												</div>
											</div>
										))
									}
								</div>
							</div>

							<div className="about-right-side" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "200px"}}>
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={Headshot}
											alt="Headshot"
											className="about-image"
										/>
									</div>
								</div>
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={AWSStation}
											alt="AWS Station"
											className="about-image"
										/>
									</div>
								</div>
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={HomeStationNight}
											alt="Home Station at Night"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
