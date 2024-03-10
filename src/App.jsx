import React, { useState } from 'react'


//components
import Intro from './components/Landing/Intro'
import About from './components/About'
import SwipeableTemporaryDrawer from './components/SwipableTemporaryDrawer';
import './styles/general.css'
import './styles/intro.css'
import './styles/index.css'
import './styles/menu.css'
import './styles/about.css'

function App() {


  return (
    <>
      <SwipeableTemporaryDrawer />
      <Intro />
      <About />


      {/* <a href="http://www.freepik.com">Background designed by Freepik</a> */}
    </>
  )
}

export default App
