import React from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'

export default function Gallery() {
  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page'>
        <div className='page-logo'>
              <img src="images/gallery.svg" alt="galerie"/>
        </div>
        <div className='page-content'>

        </div>
      </div>
    </>
  )
}
