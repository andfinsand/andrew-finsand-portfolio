import React from 'react'
import Head from "next/head"

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center h-screen " id="about">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className="text-4xl text-center text-white font-semibold font-bakbakone font-normal mb-10">
          <p>About <span className="text-seagreen">Me</span></p>
        </div>
        <div className="text-white text-xl font-electrolize my-5 mx-0 md:mx-20 lg:mx-40">
        Hello! I'm Andrew, a software developer located in San Jose California, and I love to build. Whether it's classic trucks, gundam models, or full stack python and web apps, you'll find me buckled down and grinding until the job is done.
        </div>
        <div className="text-white text-xl font-electrolize my-5 mx-0 md:mx-20 lg:mx-40">
        With a diverse background from medical to art, my innate desire to learn allows me to continually broaden and elevate my skills. My long term goal is to become a blockchain developer in Rust or Solidity. Until then...let's build together!
        </div>
        {/* <div>
          Im not your average developer. I started off my journey as an EMT working late hours on an ambulance in the Bay Area. After a couple years, the need to supplement my knowledge drove me to complete my undergrad in Kinesiology at California State Univseristy Monterey Bay in 2018. During all this time, I was learning about and trading cryptocurrencies. With this fascination of blockchain technology, I began to dive deeper into the endless abyss that is crypto, and soon realized, I had to learn as much as possible. But in order to do so, I had to understand the basic building blocks of code, which led me to successfully complete a 7 month long intensive coding bootcamp at Coding Dojo.

          I now live in San Jose California, and build full stack applications primarily in Python on my freetime. I've also done freelancing for a small family business, redesigning their website with React and Nextjs.

          All in all, I'm a builder, and I love the grind. Whether it's classic trucks, gundam models, or programs, you'll find me buckled down and focused until the job is done. Hard work always pays off in one way or another, and there's nothing better than admiring the fruits of labor.

          "Preparation for tomorrow is hard work today." - Bruce Lee
        </div> */}
        <div className="flex justify-center mt-10 mb-10">
          <a data-scroll="contact" href="#contact" className="btn btn-wide btn-secondary text-dark font-bold bg-seagreen rounded-full border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">Contact</a>
        </div >
    </div>
  )
}

export default AboutMe