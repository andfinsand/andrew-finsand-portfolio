import React from 'react'
import Head from 'next/head'

const HomeTitle = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>
        <div className="text-6xl font-bakbakone font-bold text-white">
            <p>Full Stack Python Developer</p>
        </div>
        <div className="text-4xl font-bakbakone text-pink">
            <p>Andrew Finsand</p>
        </div>
    </div>
  )
}

export default HomeTitle