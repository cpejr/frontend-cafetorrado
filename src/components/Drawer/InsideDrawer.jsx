import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from 'react-router-dom';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { MdFlashAuto } from 'react-icons/md';
import { GiHand } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import clsx from 'clsx';
import { ThemeContext } from '../../Context/ThemeContext';

import './NewDrawer.css';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(5),
  },
  hide: {
    display: 'none',
  },
}));

const DrawerHeader = ({ drawerToggle }) => (
  <List className="header">
    <ListItem button onClick={drawerToggle}>
      <ListItemIcon>
        <MenuIcon className="menu-icon" />
      </ListItemIcon>
      <ListItemText> Menu </ListItemText>
    </ListItem>
  </List>
);

const DrawerMenu = ({ drawerOpen }) => {
  const menuItens = [
    {
      title: 'Início',
      icon: <FaHome />,
      route: '',
    },
    {
      title: 'Selecionar Receita',
      icon: <SearchIcon />,
      route: 'RecipeSelection',
    },
    {
      title: 'Modo automático',
      icon: <MdFlashAuto />,
      route: 'automatic',
    },
    {
      title: 'Modo manual',
      icon: <GiHand />,
      route: 'manual',
    },

  ];
  const { toggleTheme } = useContext(ThemeContext);

  const history = useHistory();
  return (
    <List className="menu-bar">
      {menuItens.map(({ title, icon, route }) => (
        <ListItem button key={title} onClick={() => history.push(`/${route}`)}>
          <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
          <ListItemText className="menu-text" primary={title} />
        </ListItem>
      ))}

      <ListItem button onClick={toggleTheme}>
        <ListItemIcon className="menu-icon"><Brightness6Icon /></ListItemIcon>
        <ListItemText className="menu-text" primary="Temas" />
      </ListItem>

    </List>

  );
};

const OutrasInformacoes = ({ drawerOpen, valuesInfo }) => {
  const classes = useStyles();
  return (

    <div className={`outras-info ${clsx({ [classes.hide]: !drawerOpen })}`}>
      {!(useLocation().pathname === '/automatic') && drawerOpen && (
        <div className="other-infos">
          <h1>Outras Informações</h1>
          <p>
            <strong>Pressão: </strong>
            {valuesInfo.pressao}
            {' '}
            ATM
          </p>
          <p>
            <strong>Umidade: </strong>
            {valuesInfo.umidade}
            {' '}
            %
          </p>
          <p>
            <strong>Massa de Grãos: </strong>
            {valuesInfo.massaGraos}
            {' '}
            g
          </p>
        </div>
      )}

    </div>
  );
};

export { DrawerMenu, DrawerHeader, OutrasInformacoes };
