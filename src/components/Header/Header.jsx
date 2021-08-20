import { React, useState } from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { FiPower } from 'react-icons/fi';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ReactComponent as Logo } from './vector-logo.svg';
import data from '../RevisionGraph/data';
import MainGraph from '../MainGraph/MainGraph';

import './Header.css';

function Header() {
  const [colorPower, setColorPower] = useState('var(--fontColorComponents)');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    changeColorPower();
    setShowDropdown(!showDropdown);
  };

  const changeColorPower = () => {
    if (colorPower === 'var(--fontColorComponents)') {
      setColorPower('#0029FF');
    } else setColorPower('var(--fontColorComponents)');
  };

  return (
    <div className="header-container">
      <p className="date">
        {format(new Date(), 'MMM dd, hh:mm', { locale: ptBR })}
      </p>

      <Logo className="logo" />

      <button className="power" type="button">
        <FiPower size={23} color={colorPower} onClick={handleClick} />
      </button>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-child">
            <a href="http://wwww.seudominio.com/pagina1.html"> Desligar </a>
            <a href="http://wwww.seudominio.com/pagina1.html"> Wake Up </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
