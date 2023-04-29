import { useEffect, useState } from 'react';
import '../sass/components/theme-changer.scss';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeChanger = ({ changeTheme, darkTheme }) => {
  return (
    <div
      className={`theme-changer ${darkTheme ? 'dark' : ''}`}
      onClick={changeTheme}
    >
      <BsSun />
      <div className={`changer__circle ${darkTheme ? 'dark' : ''}`}>
        {darkTheme ? <BsMoon /> : <BsSun />}
      </div>
      <BsMoon />
    </div>
  );
};

export default ThemeChanger;
