import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertChartIcon from '@material-ui/icons/InsertChart';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(5),
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

const DrawerMenu = () => {
  const classes = useStyles();

  return (
    <List className="menu-bar">
      {menuItens.map(({ title, icon }) => (
        <ListItem className="menu-icon" button key={title}>
          <ListItemIcon className="menu-icon">{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}

      {/* Monitoramento */}
      <ListItem className="menu-icon">
        <ListItemIcon className="menu-icon">
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Monitoramento" />
      </ListItem>

      <FormControl component="fieldset" className={classes.nested}>
        <RadioGroup
        // aria-label="gender"
        // name="gender1"
        // value={value}
        // onChange={handleChange}
        >
          <FormControlLabel
            value="automatico"
            control={<Radio />}
            label="Automático"
          />
          <FormControlLabel value="manual" control={<Radio />} label="Manual" />
        </RadioGroup>
      </FormControl>
    </List>
  );
};

const OutrasInformacoes = () => {
  return (
    <>
      <h3>Outras informações</h3>
      <h4>Outras também</h4>
    </>
  );
};

export { DrawerMenu, DrawerHeader, OutrasInformacoes };
