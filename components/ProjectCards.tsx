import React from 'react'
import Head from 'next/head'
import ProjectText from '../components/ProjectText'

const ProjectCards = () => {
  return (
    // <div className="h-1 border-t-2 border-seagreen" id="projects">
    <div className="bg-black bg-auto" id="projects">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className="flex flex-col pb-56 px-20">
        <ProjectText />
            <div className="flex flex-col md:flex justify-around md:flex-row">
                {/* Project One */}
                <div className="self-center greyGradient card w-auto h-max shadow-xl rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none my-5 md:w-2/5 lg:w-1/3">
                    <figure className="drop-shadow-customDark p-5">
                        <img src="tokenRecordsThumb.png" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white">
                        <h1 className="card-title font-kanit font-normal text-2xl">Token Records</h1>
                        <p className="font-electrolize mt-2"> A full stack python application to track NFT trades made on the Solana blockchain. Record profits and losses, monitor live floor prices, and manage trade status!</p>
                        <div className="self-center font-bold my-6">Python <span className="font-normal text-seagreen">|</span> Flask <span className="font-normal text-seagreen">|</span> HTML5 <span className="font-normal text-seagreen">|</span> Bootstrap CSS <span className="font-normal text-seagreen">|</span> MySQL</div>
                        <div className="card-actions justify-around my-2">
                            <div className="self-center text-light font-bold">Coming Soon</div>
                            <a href="https://github.com/andfinsand/token-records" target="_blank"><button className="btn btn-primary w-20 text-dark font-bold bg-seagreen border-seagreen drop-shadow-customLight hover:bg-dark hover:text-seagreen hover:border-seagreen">Github</button></a>
                        </div>
                    </div>
                </div>
                {/* Project Two */}
                <div className="self-center greyGradient card w-auto shadow-xl rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none my-5 md:w-2/5 lg:w-1/3">
                    <figure className="drop-shadow-customDark p-5">
                        <img src="coolGymHwy49Thumb.PNG" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white">
                        <h1 className="card-title font-kanit font-normal text-2xl">Cool Gym Hwy49</h1>
                        <p className="font-electrolize mt-2"> Website for family owned business, Cool Gym, located in Cool California. Sign up for a membership, check out the facilities, and view upcoming classes on the monthly calendar!</p>
                        <div className="self-center font-bold my-6">React <span className="font-normal text-seagreen">|</span> NextJS <span className="font-normal text-seagreen">|</span> Typescript <span className="font-normal text-seagreen">|</span> Tailwind CSS <span className="font-normal text-seagreen">|</span> GraphQL</div>
                        <div className="card-actions justify-around my-2">
                            <a href="https://coolgymhwy49.netlify.app/" target="_blank"><button className="btn btn-primary w-20 text-dark font-bold bg-seagreen border-seagreen drop-shadow-customLight hover:bg-dark hover:text-seagreen hover:border-seagreen">Live</button></a>
                            <a href="https://github.com/CoolGymHwy49/cool-gym-hwy-49" target="_blank"><button className="btn btn-primary w-20 text-dark font-bold bg-seagreen border-seagreen drop-shadow-customLight hover:bg-dark hover:text-seagreen hover:border-seagreen">Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards