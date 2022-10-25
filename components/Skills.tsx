import React, { useEffect } from 'react'
import Head from 'next/head'
import SkillsTitle from './SkillsTitle'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, []);
  return (
    <div className="flex flex-col h-auto bg-black" id="skills">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
        </Head>
        <SkillsTitle />
        <div className="self-center bg-black text-light font-kanit font-thin mt-36 lg:columns-3 xl:flex justify-between">
            {/* Frontend */}
            <div data-aos="fade-up" className="break-after-column flex justify-center bg-black w-72 md:mt-0 lg:my-5 mx-3">
                <div className="flex flex-col bg-medium h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex flex-col justify-center self-center bg-dark h-32 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down h-16" src = {"frontendIcon.png"} alt="Image of frontend icon"></img>
                        <div className="text-center text-xl text-seagreen font-kanit italic font-semibold pt-1">Front End</div>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"html5.png"} alt="Image of HTML icon"></img>
                        <p className="self-center mx-2">
                        HTML5
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"css3Icon.png"} alt="Image of CSS icon"></img>
                        <p className="self-center mx-2">
                        CSS3
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"bootstrapIcon.png"} alt="Image of Bootstrap icon"></img>
                        <p className="self-center mx-2">
                        BootstrapCSS
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"tailwindIcon.png"} alt="Image of Tailwind icon"></img>
                        <p className="self-center mx-2">
                        TailwindCSS
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"javascriptIcon.png"} alt="Image of Javascript icon"></img>
                        <p className="self-center mx-2">
                        Javascript
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"typescriptIcon.png"} alt="Image of Typescript icon"></img>
                        <p className="self-center mx-2">
                        Typescript
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"reactIcon.png"} alt="Image of React icon"></img>
                        <p className="self-center mx-2">
                        React
                        </p>
                    </div>
                </div>
            </div>
            {/* Backend */}
            <div data-aos="fade-up" data-aos-duration="1600" className="flex justify-center bg-black w-72 my-5 break-after-column lg:mx-3">
                <div className="flex flex-col bg-medium h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex flex-col justify-center self-center bg-dark h-32 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down h-16" src = {"backendIcon.png"} alt="Image of backend icon"></img>
                        <div className="text-center text-xl text-seagreen font-kanit italic font-semibold pt-1">Back End</div>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"pythonIcon.png"} alt="Image of Python icon"></img>
                        <p className="self-center mx-2">
                        Python
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"apiIcon.png"} alt="Image of API icon"></img>
                        <p className="self-center mx-2">
                        API
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"flaskIcon.png"} alt="Image of Flask icon"></img>
                        <p className="self-center mx-2">
                        Flask
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="object-scale-down h-16" src = {"djangoIcon.png"} alt="Image of Django icon"></img>
                        <div>
                            <p className="self-center mx-2">
                            Django
                            </p>
                            <p className="self-center mx-2">
                                (Learning)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* DB */}
            <div data-aos="fade-up" data-aos-duration="2200" className="flex justify-center bg-black w-72 my-5 lg:mx-3">
                <div className="flex flex-col bg-medium h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex flex-col justify-center self-center bg-dark h-32 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down h-16" src = {"dbIcon.png"} alt="Image of database icon"></img>
                        <div className="text-center text-xl text-seagreen font-kanit italic font-semibold pt-1">Database</div>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"mysqlIcon.png"} alt="Image of MySQL icon"></img>
                        <p className="self-center mx-2">
                        MySQL
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-5" src = {"sanityioIcon.jpg"} alt="Image of SanityIO icon"></img>
                        <p className="self-center ml-2">
                        Sanityio
                        </p>
                    </div>
                </div>
            </div>
            {/* Other */}
            <div data-aos="fade-up" data-aos-duration="2800" className="flex justify-center bg-black w-72 my-5 lg:mx-3">
                <div className="flex flex-col bg-medium h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex flex-col justify-center self-center bg-dark h-32 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down h-16" src = {"toolsIcon.png"} alt="Image of tools icon"></img>
                        <div className="text-center text-xl text-seagreen font-kanit italic font-semibold pt-1">Other</div>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"gitIcon.png"} alt="Image of Git icon"></img>
                        <p className="self-center mx-2">
                        GIT
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"figmaIcon.png"} alt="Image of Figma icon"></img>
                        <p className="self-center mx-2">
                        Figma
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills