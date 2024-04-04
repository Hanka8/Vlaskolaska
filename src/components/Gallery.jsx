import React, { useState, useEffect } from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
  {
    original: "images/pripravy/1.webp",
    thumbnail: "images/pripravy/1.webp",
  }, {
    original: "images/pripravy/2.webp",
    thumbnail: "images/pripravy/2.webp",
  }, {
    original: "images/pripravy/3.webp",
    thumbnail: "images/pripravy/3.webp",
  }, {
    original: "images/pripravy/4.webp",
    thumbnail: "images/pripravy/4.webp",
  }, {
    original: "images/pripravy/5.webp",
    thumbnail: "images/pripravy/5.webp",
  }, {
    original: "images/pripravy/6.webp",
    thumbnail: "images/pripravy/6.webp",
  }, {
    original: "images/pripravy/7.webp",
    thumbnail: "images/pripravy/7.webp",
  }, {
    original: "images/pripravy/8.webp",
    thumbnail: "images/pripravy/8.webp",
  }, {
    original: "images/pripravy/9.webp",
    thumbnail: "images/pripravy/9.webp",
  }, {
    original: "images/pripravy/10.webp",
    thumbnail: "images/pripravy/10.webp",
  }, {
    original: "images/pripravy/11.webp",
    thumbnail: "images/pripravy/11.webp",
  }, {
    original: "images/pripravy/12.webp",
    thumbnail: "images/pripravy/12.webp",
  }, {
    original: "images/pripravy/13.webp",
    thumbnail: "images/pripravy/13.webp",
  }, {
    original: "images/pripravy/14.webp",
    thumbnail: "images/pripravy/14.webp",
  }, {
    original: "images/pripravy/15.webp",
    thumbnail: "images/pripravy/15.webp",	
  }, {
    original: "images/pripravy/16.webp",
    thumbnail: "images/pripravy/16.webp",
  }, {
    original: "images/pripravy/17.webp",
    thumbnail: "images/pripravy/17.webp",
  }, {
    original: "images/pripravy/18.webp",
    thumbnail: "images/pripravy/18.webp",
  }, {
    original: "images/pripravy/19.webp",
    thumbnail: "images/pripravy/19.webp",
  }, {
    original: "images/pripravy/20.webp",
    thumbnail: "images/pripravy/20.webp",
  }, {
    original: "images/pripravy/21.webp",
    thumbnail: "images/pripravy/21.webp",
  }, {
    original: "images/pripravy/22.webp",
    thumbnail: "images/pripravy/22.webp",
  }, {
    original: "images/pripravy/23.webp",
    thumbnail: "images/pripravy/23.webp",
  }, {
    original: "images/pripravy/24.webp",
    thumbnail: "images/pripravy/24.webp",
  }, {
    original: "images/pripravy/25.webp",
    thumbnail: "images/pripravy/25.webp",
  }, {
    original: "images/pripravy/26.webp",
    thumbnail: "images/pripravy/26.webp",
  }, {
    original: "images/pripravy/27.webp",
    thumbnail: "images/pripravy/27.webp",
  }, {
    original: "images/pripravy/28.webp",
    thumbnail: "images/pripravy/28.webp",
  }, {
    original: "images/pripravy/29.webp",
    thumbnail: "images/pripravy/29.webp",
  }, {
    original: "images/pripravy/30.webp",
    thumbnail: "images/pripravy/30.webp",
  }, {
    original: "images/pripravy/31.webp",
    thumbnail: "images/pripravy/31.webp",
  }, {
    original: "images/pripravy/32.webp",
    thumbnail: "images/pripravy/32.webp",
  }
];

const images2 = [
  {
    original: "images/nevesty/1.webp",
    thumbnail: "images/nevesty/1.webp",
  },
  {
    original: "images/nevesty/2.webp",
    thumbnail: "images/nevesty/2.webp",
  },
  {
    original: "images/nevesty/3.webp",
    thumbnail: "images/nevesty/3.webp",
  },
  {
    original: "images/nevesty/4.webp",
    thumbnail: "images/nevesty/4.webp",
  },
  {
    original: "images/nevesty/5.webp",
    thumbnail: "images/nevesty/5.webp",
  },
  {
    original: "images/nevesty/6.webp",
    thumbnail: "images/nevesty/6.webp",
  },
  {
    original: "images/nevesty/7.webp",
    thumbnail: "images/nevesty/7.webp",
  },
  {
    original: "images/nevesty/8.webp",
    thumbnail: "images/nevesty/8.webp",
  },
  {
    original: "images/nevesty/9.webp",
    thumbnail: "images/nevesty/9.webp",
  },
  {
    original: "images/nevesty/10.webp",
    thumbnail: "images/nevesty/10.webp",
  },
  {
    original: "images/nevesty/11.webp",
    thumbnail: "images/nevesty/11.webp",
  },
];

export default function Gallery() {

  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 315;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);

  }, [scrolled]);

  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page page-gallery'>
        <div className='page-logo'>
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
          <h2 className='h-2 mi-10' id="pripravy">Přípravy</h2>	
          <ImageList variant="masonry" className='mi-10 mt-2 mb-5' cols={3} gap={35}>
            {images.map((item) => (
              <ImageListItem key={item.original}>
                <img className='gallery-img'
                  srcSet={`${item.original}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.original}?w=248&fit=crop&auto=format`}
                  alt={item.original}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <h2 className='h-2 mi-10' id="nevesty">Nevěsty</h2>
          <ImageList variant="masonry" className='mi-10 mt-2' cols={3} gap={35}>
            {images2.map((item) => (
              <ImageListItem key={item.original}>
                <img
                  srcSet={`${item.original}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.original}?w=248&fit=crop&auto=format`}
                  alt={item.original}
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
