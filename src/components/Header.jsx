import '../sass/components/header.scss';
import LightHLogo from '../assets/hugocodes-horizontal-light.png';
import HorizontalLogo from '../assets/hugocodes-horizontal.png';
import ThemeChanger from './ThemeChanger';
import MenuContent from './Menu/MenuContent';
import { useEffect, useRef, useState } from 'react';
import MenuBurger from './Menu/MenuBurger';

const Header = ({ changeTheme, darkTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  function burgerActive() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header ${scrollActive ? 'change-color' : ''} ${
        darkTheme ? 'dark' : ''
      }`}
    >
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#">
              <img
                src={scrollActive && !darkTheme ? HorizontalLogo : LightHLogo}
                alt=""
              />
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
