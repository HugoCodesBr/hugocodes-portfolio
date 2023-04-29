import '../sass/components/header.scss';
import LightHLogo from '../assets/hugocodes-horizontal-light.png';
import ThemeChanger from './ThemeChanger';
import MenuContent from './Menu/MenuContent';
import { useEffect, useRef, useState } from 'react';
import MenuBurger from './Menu/MenuBurger';

const Header = ({ changeTheme, darkTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function burgerActive() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={`header`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#">
              <img src={LightHLogo} alt="" />
            </a>
          </div>
          <div className="header__menu">
            <MenuContent menuOpen={menuOpen} />
            <ThemeChanger changeTheme={changeTheme} darkTheme={darkTheme} />
            <MenuBurger burgerActive={burgerActive} menuOpen={menuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
