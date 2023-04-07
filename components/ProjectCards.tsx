import React, { useEffect } from 'react'
import Head from 'next/head'
import ProjectsTitle from './ProjectsTitle'
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCards = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
    const projects = [
        {
            number: 1,
            name: "Gradient Wizard",
            description: "A web application that utilizes the OpenAI API and gpt-3.5-turbo model to create two or three-tone gradients based on user input. The generated gradients are accompanied by hex codes, a unique name, and a description for why the colors were chosen.",
            stack: ["React" , "|" , "Django" , "|" , "Docker" , "|" , "Tailwind CSS" , "|" , "OpenAI API"],
            live: ["https://gradient-wizard.up.railway.app/"],
            github: "https://github.com/andfinsand/gradient-wizard",
            image: "gradientwizardThumb.PNG",
        },
        {
            number: 2,
            name: "Futurecap",
            description: "Entry for the Evmos-Covalent #OneMillionWallets Hackathon. A full stack Django web app utilizing the Covalent Unified API for the Evmos blockchain serving the Cosmos ecosystem. Predict the price of Token A, if it had the market cap of Token B. Only tokens available from Diffusion Finance.",
            stack: ["Python" , "|" , "Django" , "|" , "HTML5" , "|" , "Tailwind CSS" , "|" , "REST API"],
            live: ["https://futurecap.up.railway.app/"],
            github: "https://github.com/dna-projects/market-cap-transform",
            image: "futurecapThumb.png",
        },
        {
            number: 3,
            name: "Apefolio",
            description: "A full stack Django web app to monitor your cryptocurrency portfolio. View overall portfolio balance with profit and loss percentages. Add new tokens to your portfolio and view calculated holdings based on live prices. View global cryptocurrency market cap data and search for specific tokens.",
            stack: ["Python" , "|" , "Django" , "|" , "HTML5" , "|" , "Tailwind CSS" , "|" , "SQLite"],
            live: ["0"],
            github: "https://github.com/colord/crypto-portfolio",
            image: "apefolioThumb.PNG",
        },
        {
            number: 4,
            name: "Token Records",
            description: "A full stack Flask web app to track NFT trades made on the Solana blockchain. Record profits and losses, monitor live floor prices, and manage trade status!",
            stack: ["Python" , "|" , "Flask" , "|" , "HTML5" , "|" , "Bootstrap CSS" , "|" , "MySQL"],
            live: ["http://ec2-52-53-218-33.us-west-1.compute.amazonaws.com"],
            github: "https://github.com/andfinsand/token-records",
            image: "tokenRecordsThumb.png",
        },
        {
            number: 5,
            name: "Cool Gym Hwy49",
            description: "Website for a family owned business, Cool Gym, located in Cool California. Sign up for a membership, check out the facilities, and view upcoming classes on the monthly calendar.",
            stack: ["React" , "|" , "NextJS" , "|" , "Typescript" , "|" , "Tailwind CSS" , "|" , "GraphQL"],
            live: ["https://coolgymhwy49.netlify.app/"],
            github: "https://github.com/CoolGymHwy49/cool-gym-hwy-49",
            image: "coolGymHwy49Thumb.PNG",
        },
    ]

    return (
        <div id="projects">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
            </Head>
            <div className="flex flex-col bg-[#101010] pb-36 px-10 sm:px-20">
            <ProjectsTitle />
                <div className="flex flex-col self-center mt-32 max-w-[1920px] lg:flex">
                    {projects.map(project =>
                        <div key={project.number} className="flex justify-center">
                            <div data-aos="fade-right" className="greyGradient card h-max shadow-xl rounded-2xl my-8 lg:flex-row lg:w-5/6">
                                <figure className="drop-shadow-customDark p-5 lg:w-3/5 lg:p-7">
                                    <img
                                        src={project.image}
                                        alt="Project Image"
                                        className="rounded-2xl" />
                                </figure>
                                <div className="card-body self-center items-left text-left text-white font-kanit pt-2 lg:w-2/5 lg:pt-8">
                                    <h1 className="card-title font-normal text-4xl">{project.name}</h1>
                                    <p className="self-center font-light text-lg mt-5">{project.description}</p>
                                    <div className="flex self-center my-6">  {project.stack.map(language => {
                                        if(language == "|") {
                                            return <div className="text-seagreen">&nbsp;{language}&nbsp;</div>
                                        } else {
                                            return <div>{language}</div>
                                        }
                                    })}
                                    </div>
                                    <div className="card-actions justify-around">
                                        {project.live.map(link => {
                                            if(link == "0") {
                                                return <div className="self-center text-light">Coming Soon</div>
                                            } else {
                                                return <a href={link} target="_blank"><button className="btn btn-secondary w-24 text-seagreen font-medium bg-transparent border-seagreen rounded-[0px] px-6 buttonHover hover:bg-transparent hover:text-dark hover:border-seagreen">Live</button></a>
                                            }
                                        })}
                                        <a href={project.github} target="_blank"><button className="btn btn-secondary w-24 text-seagreen font-medium bg-transparent border-seagreen rounded-[0px] px-6 buttonHover hover:bg-transparent hover:text-dark hover:border-seagreen">Github</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-center text-lg bg-[#101010] text-light font-bold"><a data-scroll="home" href="/#home"><span className="hover:text-seagreen">BACK TO TOP</span></a></div>
            <div className="spacer bg-[#101010] h-10"></div>
        </div>
    )
}

export default ProjectCards