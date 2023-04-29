import { useEffect, useState } from 'react';
import '../../sass/components/menu-burger.scss';

const MenuBurger = ({ burgerActive, menuOpen }) => {
  return (
    <div
      className={`menu-burger ${menuOpen ? 'active' : ''}`}
      onClick={burgerActive}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuBurger;
