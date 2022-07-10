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
      <div className="flex my-5 px-8">
        <Link href="/Projects">
          <a className="btn btn-wide btn-secondary">My Work</a>
        </Link>
      </div>
    </div>
  )
}

export default HomeSubTitle