import React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { FiPower } from 'react-icons/fi';
import Theme from '../theme';

import './Header.css';

function Header() {
  const now = new Date();
  const monthNumber = new Date().getMonth();
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Decembro',
  ];
  const monthName = monthNames[monthNumber];
  return (
    <div className="headerContainer">
      <h1 className="date">
        {`${now.getDate()} ${monthName}, ${now.getHours()}:${now.getMinutes()}  `}
      </h1>
      <div className="buttons">
        <button className="theme" type="button">
          <Theme />
        </button>

        <button className="crack" type="button">
          <BiPlayCircle size={24} color="#E0E0E0" />
        </button>

        <button className="power" type="button">
          <FiPower size={24} color="#E0E0E0" />
        </button>
      </div>
    </div>
  );
}

export default Header;
