import type { NextPage } from 'next'

import Navbar from '../components/Navbar'
import HomeTitle from '../components/HomeTitle'
import HomeSubTitle from '../components/HomeSubTitle'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-50 flex flex-col justify-center w-full relative">
      <img src = {"backgroundDark.png"} className="w-full h-full object-cover absolute"></img>
        <Navbar />
        <main className="flex flex-col h-screen mx-32 mt-32 relative">
          <div className="mt-20">
            <HomeTitle />
          </div>
          <div className="mt-20">
            <HomeSubTitle />
          </div>
        </main>
    </div>
  )
}

export default Home

// style={{ backgroundImage: `url(background-image)` }}