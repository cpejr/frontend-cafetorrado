import React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { FiPower } from 'react-icons/fi';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import './Header.css';

function Header() {
  return (
    <div className="headerContainer">
      <h1 className="date">
        {format(new Date(), 'MMM dd, hh:mm', { locale: ptBR })}
      </h1>
      <div className="buttons">
        <button className="crack" type="button">
          <BiPlayCircle size={23} color="#E0E0E0" />
        </button>

        <button className="power" type="button">
          <FiPower size={23} color="#E0E0E0" />
        </button>
      </div>
    </div>
  );
}

export default Header;
