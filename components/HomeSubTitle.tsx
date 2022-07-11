import React from 'react'
import Head from "next/head"
import Link from "next/link"

const HomeSubTitle = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <div className="text-3xl text-white font-semibold font-electrolize">
          <p>Welcome to my portfolio</p>
      </div>
      <div className="flex my-5 mx-8">
        <a data-scroll="projects" href="#projects" className="btn btn-wide btn-secondary text-dark font-spacegrotesk bg-seagreen rounded-full border-seagreen hover:bg-dark hover:text-seagreen hover:border-seagreen">My Work</a>
      </div>
    </div>
  )
}

export default HomeSubTitle