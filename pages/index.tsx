import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

const Home: NextPage = () => {
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
          content="Andrew Finsand, Full Stack Developer, Web Developer, Python, Django, React, Docker, AI, API, WordPress"
        />
        <meta
          name="author"
          content="Andrew Finsand"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div id="background"></div>
      <Landing />
      <About />
      <ProjectCards />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default Home
