import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import WorkingLate from "../Images/working-late.jpg";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";


import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const stayLogo = true;
	// const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					// setStayLogo(false);
				} else {
					// setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				// setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<div>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container" style={{marginBottom: '200px'}}>
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
										Gural lives in 
										<a style={{ color: "#3E63DD" }}> New York. </a> 
										<a>He is a Master's student at </a>
										<a href = "https://tech.cornell.edu" target="_blank" rel="noreferrer" style = {{color: "#b31b1b"}}>Cornell Tech</a> <a> studying Computer Science. He is also building </a>
										<a href="https://rapidreview.io" target="_blank" rel="noreferrer" color="#3E63DD">RapidReview.io</a>
										, an ML-powered platform for literature review.
									{/* dotted horizontal line */}
									<div className="homepage-subtitle-line"></div>
									<a>Gural really likes computers. This is evident in his poor eyeseight and his background. His areas of interest include: Machine-Learning/AI, Human-Computer-Interaction, Augmented Reality, and regular Software Engineering.
									His </a>
									{/* link to the /work page */}
									<a href="/work">work</a><a> history and </a><a href="/education">education</a><a>.</a>
									{/* dotted horizontal line */}
									<div className="homepage-subtitle-line"></div>
									<a>Gural is also a fan of economics. He double majored in CS and Economics in college and always feels the need to tell people that he reads The Economist. His </a>
									<a href={INFO.education.independentResearch.link}>research</a><a>.</a>
									{/* {INFO.homepage.description3} */}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src = {WorkingLate}
											alt="about"
											className="homepage-image"
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
		</div>
	);
};

export default Homepage;
