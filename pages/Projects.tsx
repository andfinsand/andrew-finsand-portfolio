import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ProjectCards from '../components/ProjectCards'

const Projects = () => {
  return (
    <div>
      <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
        </Head>
    <div className="bg-slate-50 flex flex-col justify-center w-full relative">
      <img src = {"backgroundDark.png"} className="w-full h-full object-cover absolute"></img>
        <Navbar />
        <main className="flex flex-col h-screen mx-32 mt-32 relative">
        <p className="text-center text-5xl text-white font-bakbakone mb-20">My<span className="text-pink"> Projects</span></p>
        <div className="flex justify-center m-10">
          <ProjectCards />
        </div>
        </main>
    </div>
    </div>
    
  )
}

export default Projects