import React, { useState, useEffect } from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// creating arrays of numbers because of the number of images in the folders and naming convention
const pripravy = Array.from(Array(32).keys(), (i) => i + 1);
const ucesy = Array.from(Array(21).keys(), (i) => i + 1);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  outline: 'none',
  width: "80vw",
  height: "90vh",
  bgcolor: 'transparent',
  p: 0,
};

export default function Gallery() {

  const [open, setOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState('');
  const handleOpen = (e) => {
    setOpen(true);
    setImageSrc(e.target.src);
    };
  const handleClose = () => setOpen(false);

  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);

  }, [scrolled]);

  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page page-gallery'>
        <div className='page-logo absolute-top'>
              <img src="images/gallery.svg" alt="galerie"/>
        </div>
        <nav className={`gallery-nav ${scrolled ? 'scrolled' : ''}`}>
          <ul className='gallery-nav-ul'>
            <li className='gallery-nav-item'>
              <a href="#pripravy">Přípravy</a>
            </li>
            <li className='gallery-nav-item'>
              <a href="#nevesty">Nevěsty</a>
            </li>
            <li className='gallery-nav-item'>
              <a href="#ucesy">Účesy</a>
            </li>
            <li className='gallery-nav-item'>
              <a href="#makeup">Makeup</a>
            </li>
            <li className='gallery-nav-item'>
              <a href="#doplnky">Doplňky</a>
            </li>
          </ul>
        </nav>
        <div className='page-content'>
          <h2 className='h-2 mi-10 pt-6' id="pripravy">Přípravy</h2>	
          <ImageList variant="masonry" className='mi-10 mt-2 mb-5' cols={3} gap={35}>
            {pripravy.map((item) => (
              <ImageListItem key={item}>
                <img 
                  className='gallery-img'
                  onClick={handleOpen}
                  srcSet={`images/pripravy/${item}.webp?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`images/pripravy/${item}.webp?w=248&fit=crop&auto=format`}
                  alt={item}
                  loading="lazy"
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    
                    <picture className='modal-picture'>
                      <img className='modal-img' src={imageSrc} alt="modal" />
                    </picture>
                    <button className='btn-close' onClick={handleClose}></button>
                  </Box>
                </Modal>
              </ImageListItem>
            ))}
          </ImageList>
          <h2 className='h-2 mi-10 pt-6' id="nevesty">Nevěsty</h2>
          <ImageList variant="masonry" className='mi-10 mt-2' cols={3} gap={35}>
            {ucesy.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`images/nevesty/${item}.webp?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`images/nevesty/${item}.webp?w=248&fit=crop&auto=format`}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  )
}
