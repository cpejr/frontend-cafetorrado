/*eslint-disable*/
import React,{useContext} from 'react';
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
import { useLocation, Route,useHistory } from 'react-router-dom';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import {ThemeContext} from "../../Context/ThemeContext"
import clsx from 'clsx';
import Theme from '../theme';

import StyledRadio from './StyledRadio';
import { Namespace } from 'socket.io';


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
  const classes = useStyles();

  const menuItens = [
    {
      title: 'Selecionar Receita',
      icon: <SearchIcon />,
    },
    {
      title: 'Adicionar Receita',
      icon: <AddToPhotosIcon />,
    },

  ];
  const {toggleTheme} = useContext(ThemeContext);

const history= useHistory();
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
      <FormControl className={`${classes.nested} menu-monitoramento-radio ${drawerOpen? '': 'closed'}`}>
        <RadioGroup
          defaultValue=""
          className={clsx({ [classes.hide]: !drawerOpen })}
        >
          <FormControlLabel
            value="automatic"
            control={<StyledRadio />}
            onClick={() => {
                history.push('/automatic');
              }}
            label ="Automático"       
          />
          <FormControlLabel
            value="manual"
            control={<StyledRadio />}
            label="Manual"
          />
        </RadioGroup>
      </FormControl>
      
        <ListItem button onClick={toggleTheme}>
          <ListItemIcon className="menu-icon"><Brightness6Icon/></ListItemIcon>
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
