import type { NextPage } from 'next'
// import Image from 'next'
// import bgImage from "../public/blackWaves.jpg"

import Navbar from '../components/Navbar'
import HomeTitle from '../components/HomeTitle'
import HomeSubTitle from '../components/HomeSubTitle'
import About from '../components/About'
import ProjectCards from '../components/ProjectCards'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
// import BackgroundImage from '../components/BackgroundImage'

const Home: NextPage = () => {
  return (
      <div className="bg-bgImage bg-[length:1920px_1920px] bg-absolute bg-no-repeat"> {/* for responsiveness, consider 'bg-cover and bg-center'. This will result in a more zoomed in bg, but no white spaces between divs. */}
        {/* <img src = {"blackWaves.jpg"} className="w-full h-full object-cover absolute"></img> */}
        {/* Consider using        sm:bg-[length:2000px_2000px] */}
          <Navbar />
          <main className="flex flex-col h-auto mx-32 pt-20">
            <div className="mt-20">
              {/* <BackgroundImage /> */}
              <HomeTitle />
            </div>
            <div className="mt-20">
              <HomeSubTitle />
            </div>
            <div className="m-20 mx-0 mt-52 md:mt-20">
              <About />
            </div>
          </main>
          <ProjectCards />
          <Skills />
          <Contact />
          <Footer />
      </div>
  )
}

export default Home

// style={{ backgroundImage: `url(background-image)` }}