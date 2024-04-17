import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuButton({ toggleDrawer, drawerOpen, scrolledMenu, gallery, scrolled }) {
  return (
    ! drawerOpen && (
    <button className={`menu-btn ${scrolledMenu ? "scrolled-menu" : ""} ${gallery? "gallery" : ""} ${scrolled ? "scrolled" : ""}`} 
            onClick={toggleDrawer("right", true)}>
      <RxHamburgerMenu color={`${scrolledMenu ? "#eefbfcff" : "#805f46ff"}`} />
    </button>
    )
  )
}
