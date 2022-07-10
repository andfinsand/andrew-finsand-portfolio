import React from 'react'
import Head from "next/head"
import Link from "next/link"

const AboutMe = () => {
  return (
    <div>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className="text-5xl text-center text-white font-semibold font-bakbakone">
          <p>Hello, I'm <span className="text-pink">Andrew</span>.</p>
        </div>
        <div className="text-white text-xl my-10 mx-20 px-20">
        I'm a full stack python developer located in San Jose California, and I love to build. Whether it's old trucks, models, or full stack python apps, ....I love to build and I love the grind.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="flex justify-center my-20">
            <Link href="/Contact">
            <a className="btn btn-secondary">Message me!</a>
            </Link>
        </div>
    </div>
  )
}

export default AboutMe