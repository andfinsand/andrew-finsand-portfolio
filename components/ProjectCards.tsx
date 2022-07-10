import React from 'react'
import Head from 'next/head'
import VertProjectText from '../components/VertProjectText'

const ProjectCards = () => {
  return (
    <div className="h-1" id="projects">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className="flex">
        <VertProjectText />
            <div className="bg-black w-screen flex justify-around py-52 pl-20">
                <div className="card w-96 bg-base-100 bg-dark shadow-xl border border-seagreen">
                    <figure className="p-5">
                        <img src="tokenRecordsThumb.png" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white">
                        <h2 className="card-title font-electrolize">Token Records</h2>
                        <p> A full stack python application to track NFT trades made on the Solana blockchain.</p>
                        <div className="card-actions justify-center mt-5">
                            <button className="btn btn-primary text-dark bg-seagreen border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black w-screen flex justify-around py-52 pr-40">
                <div className="card w-96 bg-base-100 bg-dark shadow-xl border border-seagreen">
                    <figure className="p-5">
                        <img src="coolGymThumb.PNG" alt="Project Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-left text-left text-white">
                        <h2 className="card-title font-electrolize">Cool Gym Hwy49</h2>
                        <p> Website for family owned business, Cool Gym, located in Cool California. Developed with React and Nextjs.</p>
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