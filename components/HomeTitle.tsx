import React from 'react'
import Head from 'next/head'

const HomeTitle = () => {
  return (
    <div className="flex flex-col text-center mt-64 sm:ml-32 sm:text-left">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>
        <div className="text-7xl font-bakbakone font-bold text-white">
            <p>Full Stack Python Developer</p>
        </div>
        <div className="text-center text-4xl font-bakbakone text-seagreen sm:text-left">
            <p>Andrew Finsand</p>
        </div>
    </div>
  )
}

export default HomeTitle