import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import HomeTitle from '../components/HomeTitle'
import About from '../components/About'
import ProjectCards from '../components/ProjectCards'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col" id="home">
      <Head>
        <meta
            name="keywords"
            content="Andrew Finsand, Full Stack Python Developer, portfolio"
          />
          <meta name="description" content="Andrew Finsand, Full Stack Python Developer" />
          <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <div className="bg-bgImage bg-cover bg-fixed bg-center w-full h-full">
        <HomeTitle />
      </div>
      <About />
      <ProjectCards />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
