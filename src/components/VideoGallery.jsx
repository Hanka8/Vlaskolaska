import React from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'

export default function VideoGallery() {
  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page'>
        <div className='page-logo'>
              <img src="images/gallery.svg" alt="galerie"/>
        </div>
        <div className='page-content'>

            <a className='link' href="https://www.lightgalleryjs.com/demos/video-gallery/" target="_blank" rel="noreferrer">lightgallery</a>

        </div>
      </div>
    </>
  )
}
