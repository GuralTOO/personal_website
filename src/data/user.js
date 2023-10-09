const INFO = {
	main: {
		title: "GN Works",
		name: "Gural Nuriyev",
		email: "gn237@cornell.edu",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/GuralTOO?tab=repositories",
		linkedin: "https://www.linkedin.com/in/gnuriyev/",
		instagram: "https://www.instagram.com/guralben/",
	},

	homepage: {
		title: "Hi! I am Gural's personal website.",
		description:
			"Gural is a Master's student at Cornell Tech in NYC studying Computer Science, Business, and Design.",
		description2:
			", leveraging AI to accelerate the literature review for researchers. \n Previously, he was the lead designer and engineer at Don't Go micromobility, leading a team of 3 developers. Having completed Don't Go, he worked at AWS and Coupang as a Software Engineering Intern.",
		description3:
			"Not too long ago, Gural was an Economist, aiding academic research at Boston College. He earned an Honors Bachelor's in Computer Science and Economics from Boston College by completing a Thesis on matching algorithms for labor markets. ",
		// I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	education: {
		title: "Gural is a student at Cornell Tech in NYC.",
		description:
			"At Cornell, Gural is pursuing a Master's in Computer Science. This is his courseload this semester:",

		classes: [
			{
				name: "Machine Learning Engineering",
				profName: "Sasha Rush",
				profLink: "https://rush-nlp.com",
				description: "Rebuilding Pytorch from scratch.",
			},
			{
				name: "HCI & Design",
				profName: "Thijs Roumen",
				profLink: "http://thijsroumen.eu/",
				description:
					"Basics of User Research, Design, and Prototyping.",
			},
			{
				name: "Deep Probabilistic and Generative Models",
				profName: "Volodymyr Kuleshov",
				profLink: "https://www.cs.cornell.edu/~kuleshov/",
				description:
					"Gerenative AI and its applications in computer vision, natural language processing, and biomedicine.",
			},
			{
				name: "AR/VR Development",
				name2: "3D User Interface Design",
				profName: "Harald Haraldsson",
				profLink: "https://haraldharaldsson.com/about",
				description: "Building Mixed Reality expeiences in Unity.",
			},
			{
				name: "Advanced Business Strategy",
				profName: "Gautam Ahuja",
				profLink:
					"https://www.johnson.cornell.edu/faculty-research/faculty/ga337/",
				description: "In-depth analysis of business strategy.",
			},
			{
				name: "Entrepreneurial Ventures",
				profName: "Mukti Khaire",
				profLink: "https://tech.cornell.edu/people/mukti-khaire/",
				description:
					"Ideation to Exit: Building a Startup from Scratch",
			},
			{
				name: "Valuations",
				profName: "Joseph Cherian",
				profLink:
					"https://www.johnson.cornell.edu/about/leadership-vision/advisory-council/advisory-council-members/joseph-cherian-phd-93/",
				description: "How to evaluate a company's worth?",
			},
			{
				name: "Designing Data Products",
				profName: "Lutz Finger",
				profLink:
					"https://www.johnson.cornell.edu/faculty-research/faculty/ltf24/",
				description: "Building Data Driven Products.",
			},
		],

		description1:
			"Before his Master's, Gural studied Economics and CS at Boston College. These were his favourite classes:",
		classes1: [
			{
				name: "Deep Learning and Computer Vision",
				profName: "Donglai Wei",
				profLink: "https://donglaiw.github.io/",
				description: "Built a fashion image classifier.",
			},
			{
				name: "Advanced Algorithms & Data Structures",
				profName: "Lewis Tseng",
				profLink: "https://www.linkedin.com/in/lewis-tseng-a3164027",
				description:
					"Independent Study to advance in Competitive Programming.",
			},
			{
				name: "Software Engineering",
				profName: "Maira Samary",
				profLink:
					"https://www.bc.edu/bc-web/schools/mcas/departments/computer-science/people/faculty-directory/maira-samary.html",
				description: "Designing, developing, and testing software.",
			},
			{
				name: "Honors Thesis in Economics and Computer Science",
				profName: "Gural Nuriyev",
				profLink: "https://www.linkedin.com/in/gnuriyev/",
				description:
					"An independent thesis on matching algorithms for labor markets.",
			},
			{
				name: "Experimental Economics",
				profName: "Lucas Coffman",
				profLink:
					"https://www.bc.edu/content/bc-web/schools/mcas/departments/economics/people/faculty-directory/coffman--lucas.html",
				description: "How to conduct and evaluate experiments?",
			},

			{
				name: "Brain, Mind and Behavior + Learning and Motivation",
				profName: "Jeffrey Lamoureux",
				profLink:
					"https://www.bc.edu/bc-web/schools/mcas/departments/psychology/people/faculty-directory/jeffrey-lamoureux.html",
				description: "NeuroScience and Human Behavior.",
			},
		],

		independentResearch: {
			description:
				"In May of 2023, Gural completed an Honors Thesis in Economics and Computer Science.",
			title: "Enhancing the Software Engineering Labor Market: A Deferred Acceptance Algorithm Approach",
			abstract:
				"This thesis conducts an analysis of the software engineering labor market with a focus on enhancing the efficiency and effectiveness of the job-matching process. By utilizing the Deferred Acceptance Algorithm (DAA), this research provides an algorithmic solution to job matching. The DAA’s application, potential advantages, and associated challenges within this context are carefully explored. Furthermore, a specific DAA implementation is proposed and tested in a computer simulation. The results demonstrate the algorithm’s capacity to provide stable, high-utility matches for both employers and job seekers in the software engineering labor market. This potentially reduces the time taken to secure a suitable match, thereby contributing a novel perspective to the literature on algorithmic applications in labor market economics.",
			link: "https://www.linkedin.com/posts/gnuriyev_enhancing-the-swe-labor-market-a-daa-approach-activity-7063743910111535104-7SAP?utm_source=share&utm_medium=member_desktop",
		},

		supervisedResearch: {
			description:
				"Between 2019 and 2023, Gural worked as a Research Assistant at the Center for Retirement Research at Boston College. He was recruited for his expertise in Economics and Computer Science.",
		},
	},

	work: {
		title: "Gural held varying jobs in the past 6 years.",
		description:
			"Since moving to the United States as a high schooler in 2017, Gural has held roles in software engineering, research, and restaurant business.",
		experiences: [
			{
				title: "Founder and Lead Developer",
				company: "RapidReview",
				companyLink: "https://workspace.gn-works.com", // Please replace this placeholder with the actual link if available
				companyLogo: require("../Images/RapidReview.png"), // Placeholder for RapidReview logo
				description:
					"Building an AI-powered platform to accelerate biomedical research. Enabling researchers to extract and analyze structured data from documents. Leading a team of three.",
				date: "Jun 2023 - Present",
				skills: [
					"Large Language Models",
					"AI",
					"Python",
					"React",
					"JavaScript",
					"UI/UX",
				],
			},
			{
				title: "Software Engineering Intern",
				company: "Amazon, AWS",
				companyLink: "https://aws.amazon.com/",
				companyLogo: require("../Images/aws_logo.png"), // Placeholder for Amazon AWS logo
				description:
					"Developed and tested a user-facing AWS server analytics tool. Successfully scaled the solution to process over 10 million entries per day.",
				date: "Sep 2022 - Dec 2022",
				skills: ["AWS", "Java", "Distributed Systems"],
			},
			{
				title: "Software Engineering Intern",
				company: "Coupang",
				companyLink: "https://www.coupang.com/",
				companyLogo: require("../Images/Coupang_logo.png"), // Placeholder for Coupang logo
				description:
					"Developed an analytics tool to identify weaknesses in the ML-powered price-matching pipeline. Enhanced collaboration across five departments and improved price accuracy by 20%.",
				date: "May 2022 - Sep 2022",
				skills: [
					"Machine Learning",
					"Kafka",
					"Python",
					"Collaboration",
				],
			},
			{
				title: "Software Development Research Assistant",
				company: "Center for Retirement Research at BC",
				companyLink: "https://www.bc.edu/", // Assuming Boston College website
				companyLogo: require("../Images/Boston-College.png"), // Placeholder for BC logo
				description:
					"Implemented high-performance algorithms in C++ and Python. Modeled the impact of economic policies on human behavior, resulting in eight new models and contributions to three peer-reviewed papers.",
				date: "Oct 2019 - May 2023",
				skills: ["C++", "Python", "Economics", "Algorithms"],
			},
			{
				title: "Founder",
				company: "Don’t Go - Micromobility Start-up",
				companyLink: "https://gn-works.com", // Please replace this placeholder with the actual link if available
				companyLogo: require("../Images/DG.png"), // Placeholder for Don't Go logo
				description:
					"Led a remote engineering team in developing a micromobility application using NodeJS and React Native. Successfully launched and operated in six major US cities.",
				date: "Jun 2021 - May 2022",
				skills: [
					"NodeJS",
					"React Native",
					"REST API",
					"Team Leadership",
				],
			},
			{
				title: "Data Analytics Intern",
				company: "Serco",
				companyLink: "https://www.serco.com/", // Assuming Serco's main website
				companyLogo: require("../Images/serco.png"), // Placeholder for Serco logo
				description:
					"Designed a data matching algorithm that boosted HR allocation efficiency by 40%. Led an intern team in creating an internal email phishing product.",
				date: "May 2021 - Aug 2021",
				skills: ["Data Matching", "Data Analytics", "Planning"],
			},
			{
				title: "Intern Generalist",
				company: "EJF Capital",
				companyLink: "https://www.ejfcap.com/", // Please replace this placeholder with the actual link if available
				companyLogo: require("../Images/EJF.png"), // Placeholder for EJF Capital logo
				description:
					"Conducted economic research contributing to the acquisition of a $100M client. Automated routine tasks, enhancing efficiency in the Investor Relations department.",
				date: "Jun 2019 - Aug 2019",
				skills: [
					"Economic Research",
					"Automation",
					"Investor Relations",
				],
			},
			{
				title: "Volunteer, Co-Chef",
				company: "Haley House Soup Kitchen",
				companyLink: "https://haleyhouse.org/", // Please replace this placeholder with the actual link if available
				companyLogo: require("../Images/HH_logo.png"), // Placeholder for Haley House Soup Kitchen logo
				description:
					"Cooked and served meals at a Boston soup kitchen, catering to 100 daily visitors. Actively participated twice a week in kitchen operations, including clean-up.",
				date: "Sep 2019 - Feb 2020",
				skills: ["Cooking", "Service", "Teamwork"],
			},
		],
	},

	projects: [
		{
			title: "Rapid Review",
			description:
				"AI-powered platform for literature review. Extracts and analyzes structured data from uploaded research papers using NLP. In active development.",
			logos: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png",
				require("../Images/supabase-logo.png"),
				require("../Images/weaviate-logo.png"),
				require("../Images/React-icon-black.png"),
			],
			status: "In Active Development",
			linkText: "View Project",
			link: "https://github.com/GuralTOO/workspace",
			link2Text: "Try It Out",
			link2: "https://workspace.gn-works.com/",
		},

		{
			title: "Chat with the Milken Institute",
			description:
				"GPT powered website that allows users to chat with a large language model about the Milken Institute, a 503C non-profit.",
			logos: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
				require("../Images/React-icon-black.png"),
				require("../Images/weaviate-logo.png"),
			],
			status: "Completed",
			linkText: "View Project",
			link: "https://github.com/GuralTOO/milken_chat_server",
			link2Text: "Try It Out",
			link2: "https://milken-institute.gn-works.com/",
		},

		{
			title: "DA for the SWE Labor Market",
			description:
				"Simulation of the Deferred Acceptance Algorithm application to the Software Engineering Labor Market. Part of a thesis in Economics.",
			logos: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			],
			status: "Completed",
			linkText: "View Project",
			link: "https://github.com/GuralTOO/DA_for_SWE",
		},

		{
			title: "Don't Go mobile app",
			description:
				"This application allowed users to find and rent electric bikes and scooters nearby. It was initially built with Unity, then rebuilt with React Native and NodeJS. The project was shut down due to legal backlash from providers.",
			logos: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
				require("../Images/unity-logo.png"),
				require("../Images/node-js.png"),
				require("../Images/React-icon-black.png"),
				require("../Images/mapbox-logo.png"),
			],
			status: "Archived",
			linkText: "View Project",
			link: "https://github.com/GuralTOO/dont_go_unity",
		},

		{
			title: "AR Chem Lab",
			description:
				"Chemistry Lab in Augmented Reality. Built by a team of three, this project was a proof of concept for a larger project. It was built with Unity and ARCore",
			logos: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
				require("../Images/unity-logo.png"),
			],
			status: "Archived",
			linkText: "View Project",
			link: "https://github/GuralTOO",
		},
	],
};

export default INFO;
