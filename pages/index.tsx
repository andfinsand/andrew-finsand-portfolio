import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'

const Home: NextPage = () => {

  useEffect(() => {
    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframe.style.backgroundColor = 'transparent'
    }
  }, [])

  return (
    <div className="flex flex-col" id="home">
      <Head>
        <title>
          Andrew Finsand - Full Stack Developer | Python | Django | React
        </title>
        <meta
          name="keywords"
          content="Andrew Finsand, Full Stack Developer, Portfolio, Python, Django, Flask, React, MySQL, Javascript, HTML5, CSS3, Tailwind, Web Development, APIs, Figma, Docker, AI"
        />
        <meta
          name="viewport"
          content="width=device-width"
        />
        <meta
          name="description"
          content="Andrew Finsand, Full Stack Developer, Web Developer, Python, Django, React, Docker, AI, API"
        />

        {/* Botpress API */}
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/6a6d2b9c-bcca-4ae8-b436-b6d58ed79695/webchat/config.js" defer></script>
      </Head>
      <Navbar />
      <div id="background"></div>
      <Landing />
      <About />
      <ProjectCards />
      <Footer />
    </div>
  )
}

export default Home
