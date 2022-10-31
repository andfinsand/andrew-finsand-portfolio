import Head from "next/head"
import 'aos/dist/aos.css';

const AboutTest = () => {
  return (
    <div className="flex flex-col bg-black py-36 px-10 lg:grid lg:grid-cols-5 lg:gap-4 lg:px-36" id="about">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <div className="self-center lg:col-span-2 lg:order-last">
        <div className="flex justify-center sm:pb-2">
          <img src="selfThumb.png" alt="Self Image" className="h-72 rounded-full lg:self-center lg:object-contain lg:h-80" />
        </div>
        <div className="flex justify-center pb-10">
            <div className="m-5">
                <a href="https://www.linkedin.com/in/andrewfinsand/" target="_blank"><img src = {"linkedinIcon.png"} alt="Image of LinkedIn icon" aria-label="open link to andrew's linkedin profile"></img></a>
            </div>
            <div className="m-5">
                <a href="https://github.com/andfinsand" target="_blank"><img src = {"githubIcon.png"} alt="Image of GitHub icon" aria-label="open link to andrew's github profile"></img></a>
            </div>
            <div className="m-5">
              <a href="mailto:andfinsand@gmail.com"><img src = {"emailIcon.png"} alt="Image of Email icon" aria-label="open email provider"></img></a>
            </div>
        </div>
      </div>
      <div className="flex flex-col lg:col-span-3">
        <div className="text-4xl text-center text-white font-spacegrotesk font-bold mb-5">
          <p>Hello, I'm <span className="text-seagreen">Andrew</span>.</p>
        </div>
        <div className = "flex flex-col">
          <div className="text-white text-xl font-kanit font-light my-4 lg:m-5 lg:px-5 2xl:px-10 self-center">
          I'm a software developer located in San Jose California, and I love to build. Whether it's classic trucks, gundam models, or full stack python and web apps, you'll find me buckled down and grinding until the job is done.
          </div>
          <div className="text-white text-xl font-kanit font-light my-4 lg:m-5 lg:px-5 2xl:px-10 self-center">
          With a diverse background, from the medical field to art, my innate desire to learn allows me to continually broaden and elevate my skills. My long term goal is to become a blockchain developer in Rust or Solidity. Until then...let's build together!
          </div>
        </div>
        <div className="flex flex-col mt-12 mb-10 px-28">
          <div className="flex justify-around mb-10">
            <img className="mx-2" src = {"pythonIcon.png"} alt="Image of Python icon"></img>
            <img className="mx-2" src = {"djangoIcon.png"} alt="Image of Django icon"></img>
            <img className="mx-2" src = {"flaskIcon.png"} alt="Image of Flask icon"></img>
            <img className="mx-2" src = {"apiIcon.png"} alt="Image of API icon"></img>
            <img className="mx-2" src = {"mysqlIcon.png"} alt="Image of MySQL icon"></img>
            <img className="mx-2" src = {"gitIcon.png"} alt="Image of Git icon"></img>
            <img className="mx-2" src = {"figmaIcon.png"} alt="Image of Figma icon"></img>
          </div>
          <div className="flex justify-around">
            <img className="mx-2" src = {"html5.png"} alt="Image of HTML icon"></img>
            <img className="mx-2" src = {"css3Icon.png"} alt="Image of CSS icon"></img>
            <img className="mx-2" src = {"bootstrapIcon.png"} alt="Image of Bootstrap icon"></img>
            <img className="mx-2" src = {"tailwindIcon.png"} alt="Image of Tailwind icon"></img>
            <img className="mx-2" src = {"javascriptIcon.png"} alt="Image of Javascript icon"></img>
            <img className="mx-2" src = {"typescriptIcon.png"} alt="Image of Typescript icon"></img>
            <img className="mx-2" src = {"reactIcon.png"} alt="Image of React icon"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTest