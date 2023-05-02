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
          <a href="#techs">Tecnologias</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
