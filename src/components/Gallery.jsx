import React, { useState, useEffect } from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { BsInstagram } from "react-icons/bs";

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
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    setImageSrc(e.target.src);
    };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 170;
      setScrolled(isScrolled);

      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // roughly one-third into view
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
        setActiveSection(current)
      });
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };

  }, []);


  return (
    <>
      <div className='page page-gallery'>
        <h1 className='page-logo logo-gallery'>
              <img src="images/gallery.svg" alt="galerie"/>
              <span className='visually-hidden'>galerie</span>
        </h1>
        <nav className={`gallery-nav ${scrolled ? 'scrolled' : ''}`}>
          <a className={`nav-ig ${scrolled ? 'scrolled' : ''}`}  href="https://www.instagram.com/vlaskolaska/">
            <BsInstagram className={`ig-svg ${scrolled ? 'scrolled' : ''}`} />
          </a>
          <ul className='gallery-nav-ul'>
            <li className={`gallery-nav-item ${activeSection=="pripravy" ? 'active' : ''}`}>
              <a href="#pripravy">Přípravy</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="nevesty" ? 'active' : ''}`}>
              <a href="#nevesty">Nevěsty</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="ucesy" ? 'active' : ''}`}>
              <a href="#ucesy">Účesy</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="makeup" ? 'active' : ''}`}>
              <a href="#makeup">Makeup</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="doplnky" ? 'active' : ''}`}>
              <a href="#doplnky">Doplňky</a>
            </li>
          </ul>
          <SwipeableTemporaryDrawer scrolled={scrolled} gallery={true} />
        </nav>
        <div className='page-content'>
          <section className="pt-6" id="pripravy">
          <h2 className='h-2 mi-10 pt-6'>Přípravy</h2>	
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
          </section>
          <section className="pt-6" id="nevesty">
          <h2 className='h-2 mi-10 pt-6'>Nevěsty</h2>
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
          </section>
        </div>
      </div>
    </>
  )
}
