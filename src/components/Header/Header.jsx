import { React, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { sendESPData } from '../Functions/RequestHandler/RequestHandler';
import { ReactComponent as Logo } from './vector-logo.svg';

import './Header.css';

function Header() {
  const [colorPower, setColorPower] = useState('var(--fontColorComponents)');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    changeColorPower();
    setShowDropdown(!showDropdown);
  };

  const handleDropdownModes = (e) => {
    if (e.target.innerText === 'Desligar') {
      sendESPData({ ItfModReq: 0 });
    } else if (e.target.innerText === 'Shutdown') {
      sendESPData({ ItfModReq: 7 });
    } else {
      sendESPData({ ItfModReq: 3 });
    }
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
          <button onClick={handleDropdownModes} type="button">Desligar</button>
          <button onClick={handleDropdownModes} type="button">Shutdown</button>
          <button onClick={handleDropdownModes} type="button">Interbateladas</button>
        </div>
      )}
    </div>
  );
}

export default Header;
