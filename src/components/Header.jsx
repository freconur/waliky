import React from 'react'
import headerImage from '../assets/images/bannerFelizcumpleanos.png'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className="header">
        <img className="header__image" src={headerImage} alt="logo" />
    </div>
  )
}

export default Header
