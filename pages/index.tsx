import type { NextPage } from 'next'

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
      <Navbar />
      <div className="bg-bgImage bg-cover bg-fixed bg-center w-full h-screen">
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

// style={{ backgroundImage: `url(background-image)` }}