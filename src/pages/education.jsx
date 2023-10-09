import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import CornellTechLogo from "../Images/Twisted-T-Lockup-Cornell-Red.png";
import BostonCollegeLogo from "../Images/Boston-College.png";
import WorkingLate from "../Images/working-late.jpg";
import BCWinter from "../Images/BC_Winter.jpg";
import CornellHall from "../Images/Cornell_Hall.jpg";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "education");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Education | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-left-side">
								<div className="title about-title">
									{INFO.education.title}
								</div>
								<div className="subtitle about-subtitle">
									<img src={CornellTechLogo} alt="Cornell Tech Logo" className="cornell-tech-logo" />{INFO.education.description}
								</div>
								<div className="courses-container">
									{
										INFO.education.classes.map((item, index) => (
											<div key={index} className="course-card">
												{/* if there is item.name2, print it as well */}
												{item.name2 ? <h2 className="course-title">{item.name}, &</h2> : <h2 className="course-title">{item.name}</h2>}
												{/* if there is item.name2, print it as well */}
												{item.name2 && <h2 className="course-title">{item.name2}</h2>												}
												<div className="prof-info">
													{/* <i className="fa fa-user"></i> Example icon. Consider using Font Awesome or another icon library */}
													<a
														href={item.profLink}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.profName}
													</a>
												</div>
												<p className="course-description">{item.description}</p>
											</div>
										))
									}
								</div>
								<div className="subtitle about-subtitle">
									<img src={BostonCollegeLogo} alt="Boston College Logo" className="cornell-tech-logo" />{INFO.education.description1}
								</div>
								<div className="courses-container">
									{
										INFO.education.classes1.map((item, index) => (
											<div key={index} className="course-card">
												<h2 className="course-title">{item.name}</h2>
												<div className="prof-info">
													<a
														href={item.profLink}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.profName}
													</a>
												</div>
												<p className="course-description">{item.description}</p>
											</div>
										))
									}
								</div>
							</div>

							<div className="about-right-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										{/* render the working-late image */}
										<img
											src={CornellHall}
											alt="Hall at Cornell Tech"
											className="about-image"
										/>
									</div>
								</div>
							    <div className="research-section">
									<h2 className="research-title">Research</h2>

									<div className="independent-research">
										{/* <h3 className="sub-research-title">Independent</h3> */}
										<h4 className="thesis-title">
											{INFO.education.independentResearch.title}
										</h4>	
										<p className="thesis-abstract">
											{INFO.education.independentResearch.abstract} {/* Assuming you've added this to your data */}
										</p>
										<a  className="read-more"
											href={INFO.education.independentResearch.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											Read More...
										</a>
									</div>
								</div>	
								<div className="about-image-container" style={{marginTop: "100px"}}>
									<div className="about-image-wrapper">
										{/* render the working-late image */}
										<img
											src={BCWinter}
											alt="Winter at BC"
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

export default Education;
