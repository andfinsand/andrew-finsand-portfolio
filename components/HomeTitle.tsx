import React from 'react'
import Head from 'next/head'

const HomeTitle = () => {
  return (
    <div className="flex flex-col text-center mt-56 mb-36">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className="text-7xl font-bakbakone font-bold text-white">
          <p>Full Stack Python Developer</p>
      </div>
      <div className="text-center text-4xl font-bakbakone text-seagreen m-5">
          <p>Andrew Finsand</p>
      </div>
      <div className="mt-16">
        <div className="flex justify-center my-5">
          <a data-scroll="projects" href="#projects" className="btn btn-secondary w-48 text-seagreen font-bold bg-transparent border-seagreen rounded-[0px] buttonHover hover:bg-transparent hover:text-dark hover:border-seagreen">My Work</a>
        </div>
      </div>
    </div>
  )
}

export default HomeTitle