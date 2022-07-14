import React from 'react'
import Head from 'next/head'

const ProjectText = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>
      {/* Spacer */}
      <div className="bg-black h-28">
      </div>
      {/* Text */}
      <div className="flex justify-center bg-black h-72">
        <div className="wideParent flex justify-center bg-medium h-40 -skew-y-3 -skew-x-3">
          <div className="wideBox flex justify-center bg-dark self-center font-bold text-7xl drop-shadow-customDark skew-y-3 skew-x-3 p-5">
            <div className="self-center text-seagreen font-kanit italic font-bold">
            P R O<span className="text-white"> J E C T S</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectText