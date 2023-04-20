import Head from 'next/head'

const ProjectsTitle = () => {
  return (
    <div className="flex justify-center">

      {/* Left decorative line */}
      <div className='flex flex-col self-center'>
        <div className='border border-t-[#8097D4] w-24 sm:w-36 md:w-52'></div>
        <div className='w-24 sm:w-36'></div>
      </div>

      {/* "Projects" title */}
      <div className="flex-shrink-0">
        <div className="flex justify-center tracking-wider text-xl font-kanit drop-shadow-customDark mx-6 sm:text-2xl sm:px-5 lg:text-3xl">
            <div className="self-center text-seagreen italic mr-2">P R O </div>
            <div className="self-center text-lightblue italic"> J E C T S</div>
        </div>
      </div>

      {/* Right decorative line */}
      <div className='flex flex-col self-center'>
        <div className='border border-t-[#8097D4] w-24 sm:w-36 md:w-52'></div>
        <div className='w-24 sm:w-36'></div>
      </div>
    </div>
  )
}

export default ProjectsTitle