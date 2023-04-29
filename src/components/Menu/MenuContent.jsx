import { useEffect, useState } from 'react';
import '../../sass/components/menucontent.scss';

const MenuContent = ({ menuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? 'active' : ''}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
