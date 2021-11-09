import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  MdFlashAuto, MdInput, MdBrightness6, MdMenu, MdSearch,
} from 'react-icons/md';
import { GiHand } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { ThemeContext } from '../../Context/ThemeContext';
import './NewDrawer.css';
import { sendESPData } from '../Functions/RequestHandler/RequestHandler';

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
        <MdMenu className="menu-icon" />
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
      icon: <MdSearch />,
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
    {
      title: 'Wake Up Table',
      icon: <MdInput />,
      route: 'wakeuptable',
    },
  ];
  const { toggleTheme } = useContext(ThemeContext);

  const history = useHistory();
  return (
    <List className="menu-bar">
      {menuItens.map(({ title, icon, route }) => (
        <ListItem
          button
          key={title}
          onClick={() => {
            if (route === 'manual') {
              sendESPData({ ItfModReq: 1 });
            } else if (route === 'automatic') {
              sendESPData({ ItfModReq: 2 });
            }
            history.push(`/${route}`);
          }}
        >
          <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
          <ListItemText className="menu-text" primary={title} />
        </ListItem>
      ))}

      <ListItem button onClick={toggleTheme}>
        <ListItemIcon className="menu-icon"><MdBrightness6 /></ListItemIcon>
        <ListItemText className="menu-text" primary="Temas" />
      </ListItem>

    </List>

  );
};

export { DrawerMenu, DrawerHeader };
