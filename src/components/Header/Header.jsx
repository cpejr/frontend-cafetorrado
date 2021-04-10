import { React, useState } from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { FiPower } from 'react-icons/fi';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import data from '../RevisionGraph/data';
import MainGraph from '../MainGraph/MainGraph';

import './Header.css';

function Header() {
  const [colorPower, setColorPower] = useState('var(--fontColorComponents)');

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
      <div className="buttons">
        <button className="power" type="button">
          <FiPower size={23} color={colorPower} onClick={changeColorPower} />
        </button>
      </div>
    </div>
  );
}

export default Header;
