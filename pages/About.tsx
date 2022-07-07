import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="bg-slate-50 flex flex-col justify-center w-full relative">
      <img src = {"backgroundDark.png"} className="w-full h-full object-cover absolute"></img>
        <Navbar />
        <main className="flex flex-col h-screen mx-32 mt-32 relative">
            <p className="text-white">About</p>
        </main>
    </div>
  )
}

export default About