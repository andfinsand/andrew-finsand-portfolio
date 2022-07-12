import React from 'react'
import Head from 'next/head'

const Skills = () => {
  return (
    <div className="bg-light p-20" id="skills">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Electrolize&family=Kanit:ital,wght@1,600;1,800;1,900&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet" />
        </Head>
        <div className="flex justify-around h-auto bg-light text-light font-kanit font-thin">
            {/* Frontend */}
            <div className="flex justify-center bg-light w-72">
                <div className="flex flex-col bg-dark h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex justify-center self-center bg-black h-28 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down" src = {"frontendIcon.png"}></img>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"html5.png"}></img>
                        <p className="self-center mx-2">
                        HTML5
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"css3Icon.png"}></img>
                        <p className="self-center mx-2">
                        CSS3
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"javascriptIcon.png"}></img>
                        <p className="self-center mx-2">
                        Javascript
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"reactIcon.png"}></img>
                        <p className="self-center mx-2">
                        React
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"nextjsIcon.png"}></img>
                        <p className="self-center mx-2">
                        NextJS
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"bootstrapIcon.png"}></img>
                        <p className="self-center mx-2">
                        Bootstrap
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"tailwindIcon.png"}></img>
                        <p className="self-center mx-2">
                        Tailwind
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"typescriptIcon.png"}></img>
                        <p className="self-center mx-2">
                        Typescript
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-5" src = {"jinja2Icon.png"}></img>
                        <p className="self-center ml-3">
                        Jinja2
                        </p>
                    </div>
                </div>
            </div>
            {/* Backend */}
            <div className="flex justify-center bg-light w-72">
                <div className="flex flex-col bg-dark h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex justify-center self-center bg-black h-28 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down" src = {"backendIcon.png"}></img>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"pythonIcon.png"}></img>
                        <p className="self-center mx-2">
                        Python
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"apiIcon.png"}></img>
                        <p className="self-center mx-2">
                        API
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="object-scale-down mx-4" src = {"graphqlIcon.png"}></img>
                        <div>
                            <p className="self-center mx-2">
                            GraphQL
                            </p>
                            <p className="self-center mx-2">
                                (Learning)
                            </p>
                        </div>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"flaskIcon.png"}></img>
                        <p className="self-center mx-2">
                        Flask
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="object-scale-down mx-4" src = {"djangoIcon.png"}></img>
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
            <div className="flex justify-center bg-light w-72">
                <div className="flex flex-col bg-dark h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex justify-center self-center bg-black h-28 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down" src = {"dbIcon.png"}></img>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"mysqlIcon.png"}></img>
                        <p className="self-center mx-2">
                        MySQL
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-5" src = {"sanityioIcon.jpg"}></img>
                        <p className="self-center ml-2">
                        Sanityio
                        </p>
                    </div>
                </div>
            </div>
            {/* Other */}
            <div className="flex justify-center bg-light w-72">
                <div className="flex flex-col bg-dark h-auto drop-shadow-customLight rounded-tr-3xl rounded-bl-3xl w-60 pb-12">
                    <div className="flex justify-center self-center bg-black h-28 w-72 drop-shadow-custom -mx-20 m-7">
                        <img className="object-scale-down" src = {"toolsIcon.png"}></img>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"gitIcon.png"}></img>
                        <p className="self-center mx-2">
                        GIT
                        </p>
                    </div>
                    <div className="flex text-white mt-5 px-10">
                        <img className="mx-4" src = {"figmaIcon.png"}></img>
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