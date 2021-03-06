import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import Logo from "../assets/images/waliky-logo.png";
import iconMenu from "../assets/icons/bars-solid.svg";
import { useAuth } from "../context/AuthContext";
import UserName from "./UserName";
import NavbarList from "./NavbarList";
import MenuBurger from "./MenuBurger";
import "../styles/Navbar_res.css";
import ButtonWhatsapp from "./ButtonWhatsapp";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  const { user } = useAuth();
  const userNavbar = user?.email;

  const handleClick = () => {
    setToogle(!toogle);
  };

  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__container-logo">
          <Link to="/">
            <img className="Navbar-logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <NavbarList />
        <div className="userOption">
          {userNavbar ? <UserName /> : <AuthButton />}
        </div>
      </div>
      <div className="Navbar__menuBurger" onClick={handleClick}>
        <div className="iconMenu__container">
          <img className="iconMenu__image" src={iconMenu} alt="iconMenu" />
        </div>
      </div>


			{/* valores del menu usuario */}


			{/* valores del menu burger */}
      {/* <ul className={`Menu ${toogle ? "Menu-active" : ""}`}>
        
        <li className="Menu__li">
          <Link className="Menu__list" to="/">
            Blog
          </Link>
        </li>
        <li className="Menu__li">
          <Link className="Menu__list" to="/">
            Contactanos
          </Link>
        </li>
        <li className="Menu__li">
          <Link className="Menu__list" to="/">
            Nosotros
          </Link>
        </li>
        <li className="Menu__li">
          <Link className="Menu__list" to="/">
            categoria
          </Link>
        </li>
      </ul> */}
      <MenuBurger toogle={toogle} />
      <ButtonWhatsapp /> 
    </div>
  );
};

export default Navbar;
