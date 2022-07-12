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
        <div className="flex flex-col pb-32">
        <ProjectText />
            {/* Project One */}
            <div className="flex justify-around bg-black">
                <div className="card w-96 bg-medium shadow-xl rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none">
                    <figure className="p-5">
                        <img src="tokenRecordsThumb.png" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white">
                        <h1 className="card-title font-kanit font-normal text-2xl">Token Records</h1>
                        <p className="font-electrolize"> A full stack python application to track NFT trades made on the Solana blockchain.</p>
                        <div className="card-actions justify-center mt-5">
                            <button className="btn btn-primary text-dark bg-seagreen border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">Details</button>
                        </div>
                    </div>
                </div>
                {/* Project Two */}
                <div className="card w-96 bg-medium shadow-xl border rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none">
                    <figure className="p-5">
                        <img src="coolGymThumb.PNG" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white">
                        <h1 className="card-title font-kanit font-normal text-2xl">Cool Gym Hwy49</h1>
                        <p className="font-electrolize"> Website for family owned business, Cool Gym, located in Cool California. Developed with React and Nextjs.</p>
                        <div className="card-actions justify-center mt-5">
                            <button className="btn btn-primary text-dark bg-seagreen border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards