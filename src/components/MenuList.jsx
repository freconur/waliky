import React from "react";
import { Link } from 'react-router-dom'
const MenuList = () => {
  return (
    <>
      {/* <Link to="/signin" className="Navbar__list--section Menu__list">
        Registrate
      </Link> */}
      {/* <Link to="/blog" className="Navbar__list--section Menu__list">
        Blog
      </Link> */}
      <Link to="/contactanos" className="Navbar__list--section Menu__list">
        Contactanos
      </Link>
      <Link to="/nosotros" className="Navbar__list--section Menu__list">
        Nosotros
      </Link>
    </>
  );
};

export default MenuList;
