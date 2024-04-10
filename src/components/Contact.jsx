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
          <div className='page-logo'>
              <img src="images/contact.svg" alt="kontakt"/>
          </div>
          <div className='page-content contact'>
              <p className='text big emphasized contact'>Karolína Čechová</p>
              <p className='text big emphasized contact'>IČO: 21104387</p>
              <a className='link' href="mailto:karolinacechova22@gmail.com">karolinacechova22@gmail.com</a>
                {/* <MdAlternateEmail size={30}/> */}
              <div className='contacts-flex mt-2'>
                
                <a className='link-ico' href="https://api.whatsapp.com/send?phone=732928740">
                  <FaWhatsapp size={30}/>
                </a>
                <a className='link-ico' href="https://www.instagram.com/vlaskolaska/">
                  <FaInstagram size={30}/>
                </a>
                <a className='link-ico' href='https://maps.app.goo.gl/CAkFdRvhrEF8vnvq9'>
                  <SlLocationPin size={30}/>
                </a>
              </div>
          </div>
      </div>
    </>
  )
}
