import React, { useState } from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

//https://www.freeconvert.com/mov-to-mp4/download zbytek videí limit byl 20

const itemData = [
  {
    img: 'videos/thumbnails/3.png',
    video: 'videos/3.mp4',
  },
  {
    img: 'videos/thumbnails/4.png',
    video: 'videos/4.mp4',
  },
  {
    img: 'videos/thumbnails/5.png',
    video: 'videos/5.mp4',
  },
  {
    img: 'videos/thumbnails/6.png',
    video: 'videos/6.mp4',
  },
  {
    img: 'videos/thumbnails/7.png',
    video: 'videos/7.mp4',
  },
  {
    img: 'videos/thumbnails/8.png',
    video: 'videos/8.mp4',
  },

  // Add more items as needed
];

export default function VideoGallery( {videos} ) {

  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredVideo(index);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };
  
  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page page-gallery'>
        <h1 className='page-logo logo-gallery'>
              <img src="images/gallery.svg" alt="galerie"/>
              <span className='visually-hidden'>galerie</span>
        </h1>
        <div className='page-content'>
      <Box sx={{ width: "100vw", height: "fit-content", overflowY: 'hidden', marginInline: "10rem" }}>
      <ImageList variant="masonry" cols={3} gap={35}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={item.img}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredVideo === index ? (
              <div className='video-wrapper'>
                <video
                  src={item.video}
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ) : (
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={"uces"}
       
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

        </div>
      </div>
    </>
  )
}
