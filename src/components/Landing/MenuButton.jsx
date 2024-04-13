import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuButton({ toggleDrawer, drawerOpen, scrolled }) {
  return (
    ! drawerOpen && (
    <button className={`menu-btn ${scrolled ? "scrolled" : ""}`} onClick={toggleDrawer("right", true)}>
      <RxHamburgerMenu />
    </button>
    )
  )
}
