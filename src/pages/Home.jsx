import React from 'react'
import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'

function Home() {
  return (
    <div>
      <div
        className="bg-secondary md:min-h-screen md:w-screen flex flex-col md:flex-row justify-center"
        id="home"
      >
        <Intro/>
        <AboutMe/>
        </div>
    </div>
  )
}

export default Home