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
      <div> {/* for responsiveness, consider 'bg-cover and bg-center'. This will result in a more zoomed in bg, but no white spaces between divs. */}
        {/* <img src = {"blackWaves.jpg"} className="w-full h-full object-cover absolute"></img> */}
        {/* Consider using        sm:bg-[length:2000px_2000px] */}
          <Navbar />
          <main className="flex flex-col">
            <div className="bg-bgImage bg-cover bg-center">
              <div>
                <HomeTitle />
              </div>
              <div>
                <HomeSubTitle />
              </div>
              <div>
                <About />
              </div>
            </div>
            <div>
              <ProjectCards />
              <Skills />
              <Contact />
              <Footer />
            </div>
          </main>
      </div>
  )
}

export default Home

// style={{ backgroundImage: `url(background-image)` }}