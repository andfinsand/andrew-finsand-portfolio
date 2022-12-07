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
            name: "Futurecap",
            description: "Entry for the Evmos-Covalent #OneMillionWallets Hackathon. A full stack Django web app utilizing the Covalent Unified API for the Evmos blockchain serving the Cosmos ecosystem. Calculate the price of Token A, if it had the market cap of Token B. Only tokens available from diffusion.fi.",
            stack: ["Python" , "|" , "Django" , "|" , "HTML5" , "|" , "Tailwind CSS" , "|" , "Rest API"],
            live: ["https://futurecap.up.railway.app/"],
            github: "https://github.com/dna-projects/market-cap-transform",
            image: "futurecapThumb.png",
        },
        {
            number: 2,
            name: "Apefolio",
            description: "A full stack Django web app to monitor your cryptocurrency portfolio. View overall portfolio balance with profit and loss percentage. Add new tokens to your portfolio and view calculated holdings based on live prices. View global cryptocurrency market cap data and search for specific tokens.",
            stack: ["Python" , "|" , "Django" , "|" , "HTML5" , "|" , "Tailwind CSS" , "|" , "SQLite"],
            live: ["0"],
            github: "https://github.com/colord/crypto-portfolio",
            image: "apefolioThumb.PNG",
        },
        {
            number: 3,
            name: "Token Records",
            description: "A full stack Flask web app to track NFT trades made on the Solana blockchain. Record profits and losses, monitor live floor prices, and manage trade status!",
            stack: ["Python" , "|" , "Flask" , "|" , "HTML5" , "|" , "Bootstrap CSS" , "|" , "MySQL"],
            live: ["http://ec2-52-53-218-33.us-west-1.compute.amazonaws.com"],
            github: "https://github.com/andfinsand/token-records",
            image: "tokenRecordsThumb.png",
        },
        {
            number: 4,
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
        <div className="flex flex-col bg-black pb-36 px-10 sm:px-20">
        <ProjectsTitle />
            <div className="flex flex-col mt-32 lg:flex">
                {projects.map(project =>
                    <div key={project.number} className="flex justify-center">
                        <div data-aos="fade-right" className="greyGradient card h-max shadow-xl rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none my-8 lg:flex-row lg:w-5/6">
                            <figure className="drop-shadow-customDark p-7 lg:w-3/5">
                                <img
                                    src={project.image}
                                    alt="Project Image"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body self-center items-left text-left text-white font-kanit lg:w-2/5">
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
        <div className="text-center text-lg bg-black text-light font-bold"><a data-scroll="home" href="/#home"><span className="hover:text-seagreen">BACK TO TOP</span></a></div>
        <div className="spacer bg-black h-10"></div>
    </div>
  )
}

export default ProjectCards