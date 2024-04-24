import React from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer';
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";

export default function Contact() {

  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page contact'>
          <h1 className='page-logo'>
              <img src="images/contact.svg" alt="kontakt"/>
              <span className='visually-hidden'>kontakt</span>
          </h1>
          <div className='page-content contact'>
            <section>
              <p className='text big emphasized contact'>Karolína Čechová</p>
              <p className='text big contact'>IČO: 21104387</p>
              <a className='text big contact hover-scale' href="mailto:karolinacechova22@gmail.com">karolinacechova22@gmail.com</a>
              <div className='contacts-flex mt-2'>
                
                <a className='hover-scale contact-ico' href="https://api.whatsapp.com/send?phone=732928740">
                  <FaWhatsapp size={40}/>
                </a>
                <a className='hover-scale contact-ico' href="https://www.instagram.com/vlaskolaska/">
                  <FaInstagram size={40}/>
                </a>
                <a className='hover-scale contact-ico' href='https://maps.app.goo.gl/CAkFdRvhrEF8vnvq9'>
                  <SlLocationPin size={40}/>
                </a>
              </div>
              </section>
              <section className='recommendations-section'>
                <h2 className='text big emphasized contact'>doporučuji</h2>
                <a className='contact-ico' href='https://www.instagram.com/face_c.a.s.e/'>
                  <FaInstagram className='hover-scale' size={40}/>
                  <span> face_c.a.s.e</span>
                </a>
              </section>
          </div>
      </div>
    </>
  )
}
