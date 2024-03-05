import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuButton({ toggleDrawer, drawerOpen }) {
  return (
    ! drawerOpen && (
    <button className='menu-btn' onClick={toggleDrawer("right", true)}>
      <RxHamburgerMenu />
    </button>
    )
  )
}
