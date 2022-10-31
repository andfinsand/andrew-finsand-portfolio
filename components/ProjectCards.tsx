import React, { useEffect } from 'react'
import Head from 'next/head'
import ProjectsTitle from './ProjectsTitle'
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCards = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);
  return (
    <div id="projects">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className="flex flex-col bg-black pb-36 px-10 sm:px-20">
        <ProjectsTitle />
            <div className="flex flex-col mt-36 lg:flex justify-around lg:flex-row">
                {/* Project One */}
                <div data-aos="fade-right" className="self-center greyGradient card w-auto h-max shadow-xl rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none my-5 lg:w-1/3">
                    <figure className="drop-shadow-customDark p-5">
                        <img src="tokenRecordsThumb.png" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white font-kanit">
                        <h1 className="card-title font-normal text-2xl">Token Records</h1>
                        <p className="font-light mt-2"> A full stack python application to track NFT trades made on the Solana blockchain. Record profits and losses, monitor live floor prices, and manage trade status!</p>
                        <div className="self-center my-6">Python <span className="font-normal text-seagreen">|</span> Flask <span className="font-normal text-seagreen">|</span> HTML5 <span className="font-normal text-seagreen">|</span> Bootstrap CSS <span className="font-normal text-seagreen">|</span> MySQL</div>
                        <div className="card-actions justify-around my-2">
                        <a href="http://ec2-52-53-218-33.us-west-1.compute.amazonaws.com" target="_blank"><button className="btn btn-secondary w-24 text-seagreen font-medium bg-transparent border-seagreen rounded-[0px] px-6 hover:bg-seagreen hover:text-dark hover:border-seagreen">Live</button></a>
                            <a href="https://github.com/andfinsand/token-records" target="_blank"><button className="btn btn-secondary w-24 text-seagreen font-medium bg-transparent border-seagreen rounded-[0px] px-6 hover:bg-seagreen hover:text-dark hover:border-seagreen">Github</button></a>
                        </div>
                    </div>
                </div>
                {/* Project Two */}
                <div data-aos="fade-left" className="self-center greyGradient card w-auto shadow-xl rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none my-5 lg:w-1/3">
                    <figure className="drop-shadow-customDark p-5">
                        <img src="coolGymHwy49Thumb.PNG" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white font-kanit">
                        <h1 className="card-title font-normal text-2xl">Cool Gym Hwy49</h1>
                        <p className="font-light mt-2"> Website for family owned business, Cool Gym, located in Cool California. Sign up for a membership, check out the facilities, and view upcoming classes on the monthly calendar!</p>
                        <div className="self-center my-6">React <span className="font-normal text-seagreen">|</span> NextJS <span className="font-normal text-seagreen">|</span> Typescript <span className="font-normal text-seagreen">|</span> Tailwind CSS <span className="font-normal text-seagreen">|</span> GraphQL</div>
                        <div className="card-actions justify-around my-2">
                            <a href="https://coolgymhwy49.netlify.app/" target="_blank"><button className="btn btn-secondary w-24 text-seagreen font-medium bg-transparent border-seagreen rounded-[0px] px-6 hover:bg-seagreen hover:text-dark hover:border-seagreen">Live</button></a>
                            <a href="https://github.com/CoolGymHwy49/cool-gym-hwy-49" target="_blank"><button className="btn btn-secondary w-24 text-seagreen font-medium bg-transparent border-seagreen rounded-[0px] px-6 hover:bg-seagreen hover:text-dark hover:border-seagreen">Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center text-lg bg-black text-light font-bold"><a data-scroll="home" href="/#home"><span className="hover:text-seagreen">BACK TO TOP</span></a></div>
        <div className="spacer bg-black h-10"></div>
    </div>
  )
}

export default ProjectCards