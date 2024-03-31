import React from 'react'
import { FaWhatsapp, FaAt, FaInstagram } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className='page'>
        <div className='page-logo'>
            <img src="images/contact.svg" alt="kontakt"/>
        </div>
        <div className='page-content'>
            <p className='h-2'>Karolína Čechová, IČO: 21104387</p>
            <div className='contacts-flex mt-2'>
              <FaWhatsapp size={30}/>
              <a className='link' href="https://api.whatsapp.com/send?phone=732928740">+420732928740</a>
            </div>
            <div className='contacts-flex'>
              <MdAlternateEmail size={30}/>
              <a className='link' href="mailto:karolinacechova22@gmail.com">karolinacechova22@gmail.com</a>
            </div>
            <div className='contacts-flex'>
              <FaInstagram size={30}/>
              <a className='link' href="https://www.instagram.com/vlaskolaska/">vlaskolaska</a>
            </div>
            <div className='contacts-flex'>
              <SlLocationPin size={30}/>
              <a className='link' href='https://maps.app.goo.gl/CAkFdRvhrEF8vnvq9'>Praha 13</a>
            </div>
        </div>
    </div>
  )
}
