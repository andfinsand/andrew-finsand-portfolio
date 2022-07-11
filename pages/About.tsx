import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="bg-bgImage bg-contain">
    {/* <div className="bg-slate-50 flex flex-col justify-center w-full relative"> */}
      {/* <img src = {"blackWaves.jpg"} className="w-full h-full object-cover absolute"></img> */}
        <Navbar />
        <main className="flex flex-col h-screen mx-32">
          <AboutMe />
        </main>
        <Contact />
        <Footer />
    </div>
  )
}

export default About