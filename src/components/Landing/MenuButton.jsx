import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuButton({ toggleDrawer }) {
  return (
    <button className='menu-btn' onClick={toggleDrawer("right", true)}>
      <RxHamburgerMenu />
    </button>
  )
}
