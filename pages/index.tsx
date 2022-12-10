import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import HomeTitle from '../components/HomeTitle'
import About from '../components/About'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col" id="home">
      <Head>
        <title>
          Andrew Finsand Portfolio - Full Stack Python Developer | Django | Flask | React | MySQL
        </title>
        <meta
          name="keywords"
          content="Andrew Finsand, Full Stack Developer, Portfolio, Python, Django, Flask, React, MySQL, Javascript, HTML5, CSS3, Python, Django, Flask, React, web development, APIs, Figma" />
        <meta
          name="viewport"
          content="width=device-width" />
      </Head>
      <Navbar />
      <div id="background"></div>
      <HomeTitle />
      <About />
      <ProjectCards />
      <Footer />
    </div>
  )
}

export default Home
