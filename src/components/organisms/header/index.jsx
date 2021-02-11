import React from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import SettingsIcon from '@material-ui/icons/Settings';
import './styles.css';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="time">
        <p>{format(new Date(), 'MMM dd, hh:mm', { locale: ptBR })}</p>
      </div>

      <div className="buttons">
        <button type="button" className="icon">
          <SettingsIcon />
        </button>
        <button type="button" className="icon">
          <Brightness6Icon />
        </button>
        <button type="button" className="icon">
          <PowerSettingsNewIcon />
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
