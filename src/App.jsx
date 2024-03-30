import React, { useState } from 'react'


//components
import Intro from './components/Landing/Intro'
import About from './components/About'
import Booking from './components/Booking'
import Services from './components/Services'
import SwipeableTemporaryDrawer from './components/SwipableTemporaryDrawer';
import './styles/general.css'
import './styles/intro.css'
import './styles/index.css'
import './styles/menu.css'

function App() {


  return (
    <>
      <SwipeableTemporaryDrawer />
      <Intro />
      <About />
      <Booking />
      <Services />

      {/* <a href="http://www.freepik.com">Background designed by Freepik</a> */}
    </>
  )
}

export default App
