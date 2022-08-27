import React, { useEffect } from 'react'
import Head from "next/head"
import 'aos/dist/aos.css';

const AboutTest = () => {
  return (
    <div className="flex flex-col bg-black py-36  px-20 lg:grid lg:grid-cols-5 lg:gap-4 lg:px-36" id="about">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className="flex justify-center pb-16 lg:col-span-2 lg:order-last">
          <img src="selfThumb.png" alt="Self Image" className="h-80 rounded-full lg:self-center lg:object-contain lg:h-80" />
        </div>
        <div className="flex flex-col lg:col-span-3">
          <div className="text-4xl text-center text-white font-spacegrotesk font-bold mb-5">
            <p>Hello, I'm <span className="text-seagreen">Andrew</span>.</p>
          </div>
          <div className = "flex flex-col">
            <div className="text-white text-xl font-electrolize my-4 lg:m-5 lg:px-5 self-center">
            I'm a software developer located in San Jose California, and I love to build. Whether it's classic trucks, gundam models, or full stack python and web apps, you'll find me buckled down and grinding until the job is done.
            </div>
            <div className="text-white text-xl font-electrolize my-4 lg:m-5 lg:px-5 self-center">
            With a diverse background, from the medical field to art, my innate desire to learn allows me to continually broaden and elevate my skills. My long term goal is to become a blockchain developer in Rust or Solidity. Until then...let's build together!
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-10">
            <a data-scroll="contact" href="#contact" className="btn btn-wide btn-secondary rounded-full text-dark font-bold bg-seagreen border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">Contact</a>
          </div >
        </div>
    </div>
  )
}

export default AboutTest