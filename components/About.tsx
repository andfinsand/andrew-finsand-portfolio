import Head from "next/head"
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div className="flex flex-col self-center py-36 px-10 max-w-[1400px] lg:grid lg:grid-cols-5 lg:gap-4 lg:px-36" id="about">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kanit:wght@200;300;500&family=Play:wght@400;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
      </Head>

      {/* Profile picture and contact icons */}
      <div className="self-center lg:col-span-2 lg:order-last lg:mb-36 xl:mb-24">
        <div className="flex justify-center sm:pb-2">
          <img src="selfThumb.png" alt="Self Image" className="h-72 rounded-full lg:self-center lg:object-contain lg:h-72" />
        </div>
        <div className="flex justify-center pb-5">
            <div className="m-5">
                <a href="https://www.linkedin.com/in/andrewfinsand/" target="_blank">
                  <img src = {"linkedinIcon.png"} alt="Image of LinkedIn icon" aria-label="open link to andrew's linkedin profile"></img>
                </a>
            </div>
            <div className="m-5">
                <a href="https://github.com/andfinsand" target="_blank">
                  <img src = {"githubIcon.png"} alt="Image of GitHub icon" aria-label="open link to andrew's github profile"></img>
                </a>
            </div>
            <div className="m-5">
              <a href="mailto:andfinsand@gmail.com">
                <img src = {"emailIcon.png"} alt="Image of Email icon" aria-label="open email provider"></img>
              </a>
            </div>
        </div>
      </div>

      {/* About me bio */}
      <div className="flex flex-col lg:col-span-3">
        <div className="text-center tracking-wide text-xl  text-lightblue font-semibold mb-5">
          <p>Welcome to my <span className="text-seagreen">Portfolio!</span></p>
        </div>
        <div className = "flex flex-col">
          <div className="text-lightblue text-sm my-4 sm:px-20 lg:mx-5 lg:mb-3 lg:px-1 xl:px-5 self-center">
            Hi, I'm Andrew - a creative and driven full-stack software developer with a passion for crafting user-friendly web applications. I specialize in Python, Django, React, and Tailwind CSS for web development, as well as design with Figma to bring my ideas and concepts to life.
          </div>
          <div className="text-lightblue text-sm my-4 sm:px-20 lg:mx-5 lg:my-3 lg:px-1 xl:px-5 self-center">
            I have experience in utilizing various APIs, such as OpenAI, to create visually appealing and engaging projects like Gradient Wizard, a web app that generates two or three-tone gradients based on user input. I have developed a passion for exploring the possibilities of artificial intelligence and machine learning, and my long-term goal is to expand my understanding of this field and its applications. I am also eager to explore the exciting world of web3 and learn how these new technologies can be used to create sophisticated and secure applications. I am enthusiastic about the opportunity to collaborate with like-minded professionals towards a shared goal of creating cutting-edge solutions.
          </div>
          <div className="text-lightblue text-sm my-4 sm:px-20 lg:mx-5 lg:my-3 lg:px-1 xl:px-5">
            When I'm not developing, you can find me playing golf on the back nine or crafting delicious homemade mead.
          </div>
          <div className="text-lightblue text-sm my-4 sm:px-20 lg:m-5 lg:my-3 lg:px-1 xl:px-5">
            Cheers!
          </div>
        </div>
        <div className="flex flex-col mt-12 mb-10 sm:px-12 lg:px-0">
          <div className="flex justify-around mb-10">
            <img className="mx-2" src = {"pythonIcon.png"} alt="Image of Python icon"></img>
            <img className="mx-2" src = {"djangoIcon.png"} alt="Image of Django icon"></img>
            <img className="mx-2" src = {"flaskIcon.png"} alt="Image of Flask icon"></img>
            <img className="mx-2" src = {"gitIcon.png"} alt="Image of Git icon"></img>
            <img className="mx-2" src = {"figmaIcon.png"} alt="Image of Figma icon"></img>
          </div>
          <div className="flex justify-around">
            <img className="mx-2" src = {"html5.png"} alt="Image of HTML icon"></img>
            <img className="mx-2" src = {"css3Icon.png"} alt="Image of CSS icon"></img>
            <img className="mx-2" src = {"tailwindIcon.png"} alt="Image of Tailwind icon"></img>
            <img className="mx-2" src = {"javascriptIcon.png"} alt="Image of Javascript icon"></img>
            <img className="mx-2" src = {"reactIcon.png"} alt="Image of React icon"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About