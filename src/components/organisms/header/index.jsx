import React from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import SettingsIcon from '@material-ui/icons/Settings';
import './styles.css';

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="time">12:22</div>

      <div className="buttons">
        <PowerSettingsNewIcon />
        <Brightness6Icon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default HeaderComponent;
