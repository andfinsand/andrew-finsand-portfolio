import React from 'react'

const ProjectCards = () => {
  return (
    <div>
        <div className="card w-96 bg-base-100 bg-purple shadow-xl border-2 border-skyblue">
            <figure className="px-5 pt-5">
                <img src="tokenRecordsThumb.png" alt="Project Image" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left text-white">
                <h2 className="card-title">Token Records</h2>
                <p className="text-skyblue">A full stack python application to track NFT trades made on the Solana blockchain.</p>
                <div className="card-actions justify-center mt-5">
                    <button className="btn btn-primary bg-pink">View</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards