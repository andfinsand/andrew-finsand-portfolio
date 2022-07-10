import type { NextPage } from 'next'

import Navbar from '../components/Navbar'
import HomeTitle from '../components/HomeTitle'
import HomeSubTitle from '../components/HomeSubTitle'
import ProjectCards from '../components/ProjectCards'

const Home: NextPage = () => {
  return (
    <div className="bg-bgImage bg-cover">
      {/* <img src = {"blackWaves.jpg"} className="w-full h-full object-cover absolute"></img> */}
        <Navbar />
        <main className="flex flex-col h-screen mx-32">
          <div className="mt-20">
            <HomeTitle />
          </div>
          <div className="mt-20">
            <HomeSubTitle />
          </div>
        </main>
        <ProjectCards />
    </div>
  )
}

export default Home

// style={{ backgroundImage: `url(background-image)` }}