import React from 'react'
import Head from 'next/head'

const Landing = () => {
  return (
    <div className="flex flex-col text-center mt-56 mb-36">
      <div className="tracking-wide text-lg text-seagreen">
          <p>Full Stack Python Developer</p>
      </div>
      <div className="text-shadow tracking-widest text-center text-5xl text-blue font-medium m-5">
          <p>Andrew Finsand</p>
      </div>
      <div className="mt-20">
        <div className="flex justify-center">
          <a data-scroll="projects" href="#projects" className="btn w-32 bg-transparent border-seagreen rounded-sm text-seagreen font-medium normal-case buttonHoverSeagreen hover:bg-transparent hover:text-dark hover:border-seagreen">
            My Work
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing