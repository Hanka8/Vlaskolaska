import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Intro from './components/Landing/Intro';
import About from './components/About';
import Process from './components/Process';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import Services from './components/Services';
import Contact from './components/Contact';

//styles
import './styles/general.css';
import './styles/intro.css';
import './styles/menu.css';
import "./styles/gallery.css";
import "./styles/contact.css";

  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/omne" element={<About />} />
        <Route path="/proces" element={<Process />} />
        <Route path="/sluzby" element={<Services />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/videa" element={<VideoGallery />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </div>
  );

export default App;
