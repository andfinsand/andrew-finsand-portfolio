import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectsBanner = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className="wideBoxBG flex justify-center bg-dark h-24 -mt-12">
        <div className="wideParent flex justify-center bg-medium h-32 -skew-y-3 -skew-x-3 -mt-4 lg:wideParentBG">
          <div className="wideBox flex justify-center bg-dark self-center h-24 font-bold text-6xl  skew-y-3 skew-x-3 p-5">
            <div className="self-center text-seagreen font-kanit italic font-bold mr-3">P R O </div>
            <div className="self-center text-white font-kanit italic font-bold"> J E C T S</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsBanner