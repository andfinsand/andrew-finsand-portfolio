import React, { useState, useEffect } from 'react'
import ProjectsTitle from './ProjectsTitle'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head"

const ProjectCards = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
    const projects = [
        {
            number: 1,
            name: "JCC Heating and Cooling",
            description: "Commercial website for JCC Heating and Cooling, a family-owned HVAC business serving Contra Costa, California. This responsive website serves as an online presence for showcasing their services, company history, and service areas to customers across the region.",
            stack: ["WordPress" , "|" , "JavaScript" , "|" , "HTML" , "|" , "CSS" , "|" , "PHP"],
            live: ["https://jccheatingandcooling.com/"],
            github: "none",
            image: "jccThumb.PNG",
        },
        {
            number: 2,
            name: "Gradient Wizard",
            description: "A web application that utilizes the OpenAI API and gpt-3.5-turbo model to create two or three-tone gradients based on user input. The generated gradients are accompanied by hex codes, a unique name, and a description for why the colors were chosen.",
            stack: ["React" , "|" , "Django" , "|" , "Docker" , "|" , "TailwindCSS" , "|" , "OpenAI API"],
            live: ["https://gradientwizard.io/"],
            github: "https://github.com/andfinsand/gradient-wizard",
            image: "gradientwizardThumb.PNG",
        },
        {
            number: 3,
            name: "Futurecap",
            description: "Entry for the Evmos-Covalent #OneMillionWallets Hackathon. A Django web app utilizing the Covalent Unified API for the Evmos blockchain serving the Cosmos ecosystem. Predict the price of Token A, if it had the market cap of Token B. Only tokens available from Diffusion Finance.",
            stack: ["Python" , "|" , "Django" , "|" , "HTML5" , "|" , "TailwindCSS" , "|" , "REST API"],
            live: ["https://futurecap.up.railway.app/"],
            github: "https://github.com/dna-projects/market-cap-transform",
            image: "futurecapThumb.png",
        },
        {
            number: 4,
            name: "Apefolio",
            description: "A Django web app to monitor your cryptocurrency portfolio. View overall portfolio balance with profit and loss percentages. Add new tokens to your portfolio and view calculated holdings based on live prices. View global cryptocurrency market cap data and search for specific tokens.",
            stack: ["Python" , "|" , "Django" , "|" , "HTML5" , "|" , "TailwindCSS" , "|" , "SQLite"],
            live: ["1", "https://www.youtube.com/watch?v=cQ7iAzpAaRA"],
            github: "https://github.com/colord/crypto-portfolio",
            image: "apefolioThumb.PNG",
        },
        // {
        //     number: 4,
        //     name: "Token Records",
        //     description: "A Flask web app to track NFT trades made on the Solana blockchain. Record profits and losses, monitor live floor prices, and manage trade status!",
        //     stack: ["Python" , "|" , "Flask" , "|" , "HTML5" , "|" , "BootstrapCSS" , "|" , "MySQL"],
        //     live: ["http://ec2-52-53-218-33.us-west-1.compute.amazonaws.com"],
        //     github: "https://github.com/andfinsand/token-records",
        //     image: "tokenRecordsThumb.png",
        // },
        {
            number: 5,
            name: "Cool Gym Hwy49",
            description: "Website for a family owned business, Cool Gym, located in Cool California. Sign up for a membership, check out the facilities, and view upcoming classes on the monthly calendar.",
            stack: ["React" , "|" , "NextJS" , "|" , "Typescript" , "|" , "TailwindCSS" , "|" , "GraphQL"],
            live: ["https://coolgymhwy49.netlify.app/"],
            github: "https://github.com/CoolGymHwy49/cool-gym-hwy-49",
            image: "coolGymHwy49Thumb.PNG",
        },
    ]

    return (
        <div id="projects">
            <Head>
                <title>Andrew Finsand's Projects and Freelance Work - Full Stack</title>
                <meta name="description" content="Explore Andrew Finsand's portfolio of projects and freelance work as a full-stack software developer. With expertise in Python, Django, React, Tailwind CSS, and WordPress, Andrew's projects showcase his creativity and passion for crafting user-friendly web applications." />
                <meta name="keywords" content="Andrew, Finsand, portfolio, software developer, full stack developer, front end developer, Python, Django, React, Tailwind CSS, AI, OpenAI, WordPress, projects, freelance" />
                <meta name="author" content="Andrew Finsand"></meta>
            </Head>
            <div className="flex flex-col pb-36 sm:px-20">
            <ProjectsTitle />

                {/* Project cards */}
                <div className="flex flex-col self-center mt-36 max-w-[370px] sm:max-w-[700px] lg:flex lg:min-w-[1100px] lg:max-w-[1285px]">
                    {projects.map(project =>
                        <div key={project.number} className="flex justify-center">
                            <div
                                data-aos="fade-up"
                                data-aos-once="true"
                                className="card backdrop-blur-xl bg-projectblue bg-opacity-20 shadow-xl border-2 border-blue border-opacity-20 rounded h-max my-8 p-5 lg:flex-row lg:w-5/6"
                            >

                                {/* Project image */}
                                <figure className="drop-shadow-customDark lg:w-[530px] lg:pl-2">
                                    <button>
                                        <img
                                            src={project.image}
                                            alt="Project Image"
                                            className="rounded"
                                            onClick={() => {
                                                setSelectedImage(project.image);
                                                setShowModal(true)
                                                console.log(showModal)
                                            }}
                                        />
                                    </button>
                                </figure>
                                <div className="card-body self-center items-left text-left text-lightblue px-1 pb-2 sm:px-2 lg:w-1/2 lg:py-1 lg:pr-0 lg:pl-12">

                                    {/* Project title */}
                                    <h1 className="card-title self-center tracking-wide text-xl font-semibold sm:self-start sm:text-2xl">{project.name}</h1>

                                    {/* Project description */}
                                    <p className="self-center text-sm font-normal mt-3">{project.description}</p>

                                    {/* Technologies used */}
                                    <div className="flex self-center text-xs font-medium mt-4 mb-5 sm:text-sm"> {project.stack.map(language => {
                                        if(language == "|") {
                                            return <div className="text-seagreen">&nbsp;{language}&nbsp;</div>
                                        } else {
                                            return <div>{language}</div>
                                        }
                                    })}
                                    </div>

                                    {/* Buttons for live, demo, and repository links */}
                                    <div className="card-actions justify-around sm:mx-16 lg:mx-0">
                                        {project.live.map((link, index) => {
                                            if (link === "0") {
                                                return (
                                                    <div className="self-center text-light" key={index}>
                                                        Coming Soon
                                                    </div>
                                                );
                                            } else if (link === "1") {
                                                return (
                                                    <a href={project.live[1]} target="_blank" key={index}>
                                                        <button className="w-20 h-10 tracking-wider text-xs text-dark font-bold bg-seagreen border border-seagreen rounded-sm buttonHoverTransparent hover:text-seagreen hover:font-medium">
                                                            Demo
                                                        </button>
                                                    </a>
                                                );
                                            } else if (index === 1 && project.live[0] === "1") {
                                                return null; // Don't render "Live" if "Demo" is showing
                                            } else {
                                                return (
                                                    <a href={link} target="_blank" key={index}>
                                                        <button className="w-20 h-10 tracking-wider text-xs text-dark font-bold bg-seagreen border border-seagreen rounded-sm buttonHoverTransparent hover:text-seagreen hover:font-medium">
                                                            Live
                                                        </button>
                                                    </a>
                                                );
                                            }
                                        })}
                                        {/* Show github link if available */}
                                        {project.github !== "none" && (
                                            <a href={project.github} target="_blank">
                                            <button className="w-20 h-10 tracking-wider text-xs text-seagreen font-medium bg-transparent border border-seagreen rounded-sm buttonHoverSeagreen hover:text-dark">
                                                Github
                                            </button>
                                            </a>
                                        )}
                                        {/* Hide github link if unavailable */}
                                        {project.github === "none" && (
                                            <button className="w-20 h-10 tracking-wider text-xs text-seagreen font-medium bg-transparent border border-seagreen rounded-sm buttonHoverSeagreen hover:text-dark visible hidden lg:invisible lg:block">
                                            Github
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Create modal for image when clicked and exit when clicked outside of modal. */}
                    {showModal && (
                    <div
                        className="image-modal"
                        onClick={(event) => {
                        const target = event.target as HTMLElement;
                        if (!target.closest('.enlarged-image')) {
                            setShowModal(false);
                        }
                        }}
                    >
                        {/* Enlarged image */}
                        <img src={selectedImage} alt="Enlarged Project Image" className="enlarged-image" />
                    </div>
                    )}

                </div>
            </div>

            {/* Back to top */}
            <div className="text-center text-md text-blue font-semibold"><a data-scroll="home" href="/#home"><span className="hover:text-seagreen">BACK TO TOP</span></a></div>
            <div className="spacer h-5"></div>
        </div>
    )
}

export default ProjectCards
