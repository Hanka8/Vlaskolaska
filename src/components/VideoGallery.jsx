import React, { useState } from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

const numberOfVideos = Array.from(Array(33).keys(), i => i + 1);

export default function VideoGallery( {videos} ) {

  const isUnder1000screen = useMediaQuery('(max-width:1000px)');
  const isUnder700screen = useMediaQuery('(max-width:700px)');
  const isUnder500screen = useMediaQuery('(max-width:500px)');

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
        <div className='page-content gallery'>
          <Box sx={{ width: "100vw", height: "fit-content", overflowY: 'hidden', marginInline: "0" }}>
          <ImageList
            className={`${isUnder1000screen ? isUnder500screen ? "mi-2" : "mi-5" : "mi-10"} mt-2 mb-5`} 
            variant="masonry" 
            cols={isUnder1000screen ? isUnder700screen ? 1 : 2 : 3}  
            gap={35}>
            {numberOfVideos.map((num) => (
              <ImageListItem
                key={num}
                onMouseEnter={() => handleMouseEnter(num)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredVideo === num ? (
                  <div className='video-wrapper'>
                    <video
                      src={`videos/${num}.mp4`}
                      controls
                      autoPlay
                      loop
                      muted
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <img
                    srcSet={`videos/thumbnails/${num}.webp?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`videos/thumbnails/${num}.webp?w=248&fit=crop&auto=format`}
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
