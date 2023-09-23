import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col" id="home">
      <Head>
        <title>
          Andrew Finsand - Full Stack Developer | Python | Django | React
        </title>
        <meta
          name="keywords"
          content="Andrew Finsand, Full Stack Developer, Portfolio, Python, Django, Flask, React, MySQL, Javascript, HTML5, CSS3, Tailwind, Web Development, APIs, Figma, Docker, AI"
        />
        <meta
          name="viewport"
          content="width=device-width"
        />
        <meta
          name="description"
          content="Andrew Finsand, Full Stack Developer, Web Developer, Python, Django, React, Docker, AI, API"
        />

        {/* Botpress API */}
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.botpressWebChat.init({
                "composerPlaceholder": "Chat with Andrew's AI Assistant",
                // "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
                "botId": "6a6d2b9c-bcca-4ae8-b436-b6d58ed79695",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "6a6d2b9c-bcca-4ae8-b436-b6d58ed79695",
                "lazySocket": true,
                "botName": "Andrew's AI Assistant",
                "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/44dd69ea-88cf-4c0b-90ce-0b7d77a1cabe/v5841/style.css",
                "frontendVersion": "v0"
              });
            `,
          }}
        />
      </Head>
      <Navbar />
      <div id="background"></div>
      <Landing />
      <About />
      <ProjectCards />
      <Footer />
    </div>
  )
}

export default Home
