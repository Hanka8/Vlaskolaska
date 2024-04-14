import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuButton({ toggleDrawer, drawerOpen, scrolled, gallery }) {
  return (
    ! drawerOpen && (
    <button className={`menu-btn ${scrolled ? "scrolled" : ""} ${gallery? "gallery" : ""} `} 
            onClick={toggleDrawer("right", true)}>
      <RxHamburgerMenu color={`${scrolled ? "#eefbfcff" : "#805f46ff"}`} />
    </button>
    )
  )
}
