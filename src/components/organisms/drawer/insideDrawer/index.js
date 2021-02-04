import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertChartIcon from '@material-ui/icons/InsertChart';

import clsx from 'clsx';
import StyledRadio from '../../../atoms/styledRadio';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(5),
  },
  hide: {
    display: 'none',
  },
}));

const DrawerHeader = ({ drawerToggle }) => {
  return (
    <List className="header">
      <ListItem button onClick={drawerToggle}>
        <ListItemIcon>
          <MenuIcon className="menu-icon" />
        </ListItemIcon>
        <ListItemText> Menu </ListItemText>
      </ListItem>
    </List>
  );
};

const DrawerMenu = ({ drawerOpen }) => {
  const classes = useStyles();

  const menuItens = [
    {
      title: 'Buscar Perfil',
      icon: <SearchIcon />,
    },
    {
      title: 'Adicionar Perfil',
      icon: <AddToPhotosIcon />,
    },
  ];

  return (
    <List className="menu-bar">
      {menuItens.map(({ title, icon }) => (
        <ListItem button key={title}>
          <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
          <ListItemText className="menu-text" primary={title} />
        </ListItem>
      ))}

      {/* Monitoramento */}
      <ListItem>
        <ListItemIcon className="menu-icon">
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText className="menu-text" primary="Monitoramento" />
      </ListItem>
      <FormControl className={`${classes.nested} menu-monitoramento-radio`}>
        <RadioGroup
          defaultValue="automatico"
          className={clsx({ [classes.hide]: !drawerOpen })}
        >
          <FormControlLabel
            value="automatico"
            control={<StyledRadio />}
            label="Automático"
          />
          <FormControlLabel
            value="manual"
            control={<StyledRadio />}
            label="Manual"
          />
        </RadioGroup>
      </FormControl>
    </List>
  );
};

const OutrasInformacoes = ({ drawerOpen, valuesInfo }) => {
  const classes = useStyles();
  return (
    <div className={`outras-info ${clsx({ [classes.hide]: !drawerOpen })}`}>
      <h1>Outras Informações</h1>
      <p>
        <strong>Pressão: </strong>
        {valuesInfo.pressao} ATM
      </p>
      <p>
        <strong>Umidade: </strong>
        {valuesInfo.umidade} %
      </p>
      <p>
        <strong>Massa de Grãos: </strong>
        {valuesInfo.massaGraos} g
      </p>
    </div>
  );
};

export { DrawerMenu, DrawerHeader, OutrasInformacoes };
