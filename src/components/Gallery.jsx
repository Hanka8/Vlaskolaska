import React, { useEffect } from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import { BsInstagram } from "react-icons/bs";
import useMediaQuery from '@mui/material/useMediaQuery';
import GallerySection from './GallerySection';
import { motion } from 'framer-motion';

// creating arrays of numbers because of the number of images in the folders and naming convention
const pripravy = Array.from(Array(32).keys(), (i) => i + 1);
const nevesty = Array.from(Array(21).keys(), (i) => i + 1);
const ucesy = Array.from(Array(29).keys(), (i) => i + 1);
const makeup = Array.from(Array(10).keys(), i => i + 1);
const doplnky = Array.from (Array(22).keys(), i => i + 1);

export default function Gallery() {

  console.log(window.scrollY)

  const isUnder600screen = useMediaQuery("(max-width:600px)");

  const [scrolledMenu, setScrolledMenu] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("pripravy");

  useEffect(() => {
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > (isUnder600screen ? 80 : 170);
      setScrolledMenu(isScrolled);

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
      <div className={`page page-gallery ${scrolledMenu ? 'scrolled-menu' : ''}`}>
        <h1 className={`page-logo logo-gallery ${scrolledMenu ? 'scrolled-menu' : ''}`}>
              <img src="images/gallery.svg" alt="galerie"/>
              <span className='visually-hidden'>galerie</span>
        </h1>
        <nav className={`gallery-nav ${scrolledMenu ? 'scrolled-menu' : ''}`}>
          <a className={`nav-ig ${scrolledMenu ? 'scrolled-menu' : ''}`}  href="https://www.instagram.com/vlaskolaska/">
            <BsInstagram className={`ig-svg ${scrolledMenu ? 'scrolled-menu' : ''}`} />
          </a>
          <ul className='gallery-nav-ul'>
            <li className={`gallery-nav-item ${activeSection=="pripravy" ? 'active' : ''}`}>
              <a onClick={() => setActiveSection("pripravy")}>Přípravy</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="nevesty" ? 'active' : ''}`}>
              <a onClick={() => setActiveSection("nevesty")}>Nevěsty</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="ucesy" ? 'active' : ''}`}>
              <a onClick={() => setActiveSection("ucesy")}>Účesy</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="makeup" ? 'active' : ''}`}>
              <a onClick={() => setActiveSection("makeup")}>Makeup</a>
            </li>
            <li className={`gallery-nav-item ${activeSection=="doplnky" ? 'active' : ''}`}>
              <a onClick={() => setActiveSection("doplnky")}>Doplňky</a>
            </li>
          </ul>
          <SwipeableTemporaryDrawer scrolledMenu={scrolledMenu} gallery={true} />
        </nav>
        <div className={`page-content gallery ${scrolledMenu ? 'scrolled-menu' : ''}`}>

        <motion.div
          initial={{opacity: 0}} 
          animate={{opacity: 1, transition: {duration: 0.4}}}
          exit={{x: window.innerWidth, transition: {duration: 0.2}}}>

          {activeSection === "pripravy" && (
            <motion.div
              initial={{x: window.innerWidth, transition: {duration: 0.2}, opacity: 0}} 
              animate={{x: 0, transition: {duration: 0.2}, opacity: 1}}
              exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
              <GallerySection
                numberOfImages={32}
                heading={"Přípravy"}
                sourceFolder={"pripravy"}
                id={"pripravy"}
              />
            </motion.div>
          )}

          {activeSection === "nevesty" && (
            <motion.div
              initial={{x: window.innerWidth, transition: {duration: 0.2}, opacity: 0}} 
              animate={{x: 0, transition: {duration: 0.2}, opacity: 1}}
              exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
              <GallerySection
                numberOfImages={21}
                heading={"Nevěsty"}
                sourceFolder={"nevesty"}
                id={"nevesty"}
              />
            </motion.div>
          )}

          {activeSection === "ucesy" && (
            <motion.div
              initial={{x: window.innerWidth, transition: {duration: 0.2}, opacity: 0}} 
              animate={{x: 0, transition: {duration: 0.2}, opacity: 1}}
              exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
              <GallerySection
                numberOfImages={29}
                heading={"Účesy"}
                sourceFolder={"ucesy"}
                id={"ucesy"}
              />
            </motion.div>
          )}

          {activeSection === "makeup" && (
            <motion.div
              initial={{x: window.innerWidth, transition: {duration: 0.2}, opacity: 0}} 
              animate={{x: 0, transition: {duration: 0.2}, opacity: 1}}
              exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
              <GallerySection 
                numberOfImages={10}
                heading={"Makeup"}
                sourceFolder={"makeup"}
                id={"makeup"}
              />
            </motion.div>
          )}

          {activeSection === "doplnky" && (
            <motion.div
              initial={{x: window.innerWidth, transition: {duration: 0.2}, opacity: 0}} 
              animate={{x: 0, transition: {duration: 0.2}, opacity: 1}}
              exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
              <GallerySection
                numberOfImages={22}
                heading={"Doplňky"}
                sourceFolder={"doplnky"}
                id={"doplnky"}
              />
          </motion.div>
        )}

        </motion.div>
      </div>
    </div>
  </>
  )
}