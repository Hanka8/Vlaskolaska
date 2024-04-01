import React, { useState } from 'react'

//components
import Intro from './components/Landing/Intro'
import About from './components/About'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Contact from './components/Contact'

//styles
import './styles/general.css'
import './styles/intro.css'
import './styles/index.css'
import './styles/menu.css'

function App() {


  return (
    <>
      <Intro />
      <About />
      <Process />
      <Services />
      <Gallery />
      <Contact />

      {/* <a href="http://www.freepik.com">Background designed by Freepik</a> */}
    </>
  )
}

export default App
