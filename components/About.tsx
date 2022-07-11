import React from 'react'
import Head from "next/head"

const AboutMe = () => {
  return (
    <div className='flex flex-col justify-center mt-32'>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className="text-5xl text-center text-white font-semibold font-spacegrotesk mb-5">
          <p>Hello, I'm <span className="text-seagreen">Andrew</span>.</p>
        </div>
        <div className="text-white text-xl font-electrolize my-5 mx-40">
        I'm a software engineer located in San Jose California, and I love to build. Whether it's old trucks, gundam models, or full stack python and web apps, you'll find me buckled down and grinding until the job is done.
        </div>
        <div className="text-white text-xl font-electrolize my-5 mx-40">
        With a background in the medical field and art, my innate desire to always learn something new allows me to continually expand and diversify my skills. My long term goal is to become a blockchain developer in Rust or Solidity. Until then...let's build something together!
        </div>
        <div className="flex justify-center mt-20 mb-10">
          <a data-scroll="contact" href="#contact" className="btn btn-wide btn-secondary text-dark font-spacegrotesk bg-seagreen rounded-full border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">Contact me!</a>
        </div >
        <div className='flex justify-center'>
          <div className="mx-10">
            <a href="https://www.linkedin.com/in/andrewfinsand/" target="_blank"><img src = {"linkedinIcon.png"} className="object-scale-down"></img></a>
          </div>
          <div className="mx-10">
            <a href="https://github.com/andfinsand" target="_blank"><img src = {"githubIcon.png"} className="object-scale-down"></img></a>
          </div>
        </div>
    </div>
  )
}

export default AboutMe