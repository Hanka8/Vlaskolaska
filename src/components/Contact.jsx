import React from 'react'
import { FaWhatsapp, FaAt, FaInstagram, FaHome } from "react-icons/fa"

export default function Contact() {
  return (
    <div className='page'>
        <div className='page-logo'>
            <img src="images/about.svg" alt="booking process" />
        </div>
        <div className='page-content'>
            <FaWhatsapp size={30}/>
            <FaAt size={30}/>
            <FaInstagram size={30}/>
            <FaHome size={30}/>
        </div>
    </div>
  )
}
