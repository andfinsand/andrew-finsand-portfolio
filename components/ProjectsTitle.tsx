import Head from 'next/head'

const ProjectsTitle = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex justify-center bg-medium w-10/12 -skew-x-20 rounded-tr-none rounded-bl-none rounded-tl-lg rounded-br-lg py-5 md:w-2/3">
        <div className="flex justify-center bg-dark text-4xl w-11/12 drop-shadow-customDark rounded-tr-none rounded-bl-none rounded-tl-lg rounded-br-lg py-5 sm:px-5 md:w-11/12">
            <div className="self-center text-seagreen font-kanit italic font-bold skew-x-12 mr-2">P R O </div>
            <div className="self-center text-white font-kanit italic font-bold skew-x-12"> J E C T S</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsTitle