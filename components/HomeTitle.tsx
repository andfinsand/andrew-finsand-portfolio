import React from 'react'
import Head from 'next/head'

const HomeTitle = () => {
  return (
    <div className="flex flex-col text-center mt-56 mb-28 md:ml-32 md:text-left">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className="text-7xl font-bakbakone font-bold text-white">
          <p>Full Stack Python Developer</p>
      </div>
      <div className="text-center text-4xl font-bakbakone text-seagreen md:text-left">
          <p>Andrew Finsand</p>
      </div>
      <div className="mt-32">
        <div className="text-2xl text-white font-semibold font-electrolize">
          <p>Welcome to my portfolio</p>
        </div>
        <div className="flex justify-center my-5 mx-9 md:justify-start">
        <a data-scroll="projects" href="#projects" className="btn btn-secondary text-dark font-bold bg-seagreen rounded-full border-seagreen px-6 hover:bg-dark hover:text-seagreen hover:border-seagreen">Jump to My Work</a>
        </div>
      </div>
    </div>
  )
}

export default HomeTitle