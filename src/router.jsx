import Intro from './components/Landing/Intro';
import About from './components/About';
import Process from './components/Process';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import Services from './components/Services';
import Contact from './components/Contact';

//styles
import './styles/general.css'
import './styles/intro.css'
import './styles/menu.css'
import "./styles/gallery.css"
import "./styles/contact.css"

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    { path: '/', element: <Intro /> },
    { path: "/omne", element: <About />},
    { path: "/proces", element: <Process /> },
    { path: "/sluzby", element: <Services /> },
    { path: "/galerie", element: <Gallery /> },
    { path: "/videa", element: <VideoGallery />},
    { path: "/kontakt", element: <Contact /> }
]);