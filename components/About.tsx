import React, { useEffect } from 'react'
import Head from "next/head"
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);
  return (
    <div className="flex flex-col my-48" id="about">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div data-aos="fade-up" className="text-4xl text-center text-white font-bakbakone font-normal mb-10">
          <p>About <span className="text-seagreen">Me</span></p>
        </div>
        <div data-aos="fade-up" className = "flex flex-col">
          <div className="text-white text-xl font-electrolize my-5 mx-7 md:mx-20 lg:w-2/3 self-center">
          Hello! I'm Andrew, a software developer located in San Jose California, and I love to build. Whether it's classic trucks, gundam models, or full stack python and web apps, you'll find me buckled down and grinding until the job is done.
          </div>
          <div className="text-white text-xl font-electrolize my-5 mx-7 md:mx-20 lg:w-2/3 self-center">
          With a diverse background, from the medical field to art, my innate desire to learn allows me to continually broaden and elevate my skills. My long term goal is to become a blockchain developer in Rust or Solidity. Until then...let's build together!
          </div>
        </div>
        <div data-aos="fade-up" className="flex justify-center mt-10 mb-10">
          <a data-scroll="contact" href="#contact" className="btn btn-wide btn-secondary rounded-full text-dark font-bold bg-seagreen border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">Contact</a>
        </div >
    </div>
  )
}

export default AboutMe