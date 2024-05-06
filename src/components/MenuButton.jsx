import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MenuButton({ toggleDrawer, drawerOpen, scrolledMenu, gallery, scrolled }) {

  const isUnder600screen = useMediaQuery('(max-width:600px)');

  return (
    ! drawerOpen && (
    <button className={`menu-btn ${scrolledMenu ? "scrolled-menu" : ""} ${gallery? "gallery" : ""} ${scrolled ? "scrolled" : ""}`} 
            onClick={toggleDrawer("right", true)}>
      <RxHamburgerMenu color={`${scrolledMenu ? isUnder600screen ? "#805f46ff" : "#eefbfcff" : "#805f46ff"}`} />
    </button>
    )
  )
}
