import React from "react";
import '../styles/MenuBurger.css'
import MenuList from "./MenuList";
const MenuBurger = ({toogle}) => {
  return (
      <ul className={`Menu ${toogle ? "Menu-active" : ""}`}>
        <MenuList/>
      </ul>
  );
};

export default MenuBurger;
