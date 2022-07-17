import React from 'react'
import Head from "next/head"
import Link from "next/link"

const HomeSubTitle = () => {
  return (
    <div className="my-32 ml-32">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <div className="text-2xl text-white font-semibold font-electrolize">
          <p>Welcome to my portfolio</p>
      </div>
      <div className="flex my-5 mx-10">
        <a data-scroll="projects" href="#projects" className="btn btn btn-secondary text-dark font-bold bg-seagreen rounded-full border-seagreen px-6 hover:bg-dark hover:text-seagreen hover:border-seagreen">Jump to My Work</a>
      </div>
    </div>
  )
}

export default HomeSubTitle