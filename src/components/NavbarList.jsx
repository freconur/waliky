import React from 'react'
import '../styles/NavbarList.css'
import MenuList from './MenuList'
// import '../styles/Navbar_res.css'
const NavbarList = () => {
  return (
    <ul className="Navbar__list Navbar__list--none">
      <MenuList/>
    </ul >
  )
}

export default NavbarList
