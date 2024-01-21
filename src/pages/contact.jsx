import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Gural loves to talk, are you sure you want to reach out?
						</div>

						<div className="subtitle contact-subtitle">
							Whether it is to talk tech, business, or just to say hi, please don't hesitate to reach out.
							&nbsp;{" "}
							{/* endline */}
							<br />
							To schedule a call, please check 
							&nbsp;{" "}
							<a href={`https://calendly.com/guralben/30min`}>
								Calendly
							</a>
							<br />
							If you prefer email: 
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							<br />
							LinkedIn: 
							&nbsp;{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								gnuriyev
							</a>
						</div>
					</div>

					<div className="socials-container" style={{marginBottom: "200px"}}>
						<div className="contact-socials">
							<Socials />
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

export default Contact;
