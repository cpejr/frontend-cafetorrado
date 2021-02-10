/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import Divider from '../../atoms/divider';

import { DrawerMenu, DrawerHeader, OutrasInformacoes } from './insideDrawer';
import { useToggle } from '../../../hooks';

import './styles.css';

const drawerWidth = 240;
const closedWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: closedWidth,
    [theme.breakpoints.up('sm')]: {
      width: closedWidth,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// export default function MiniDrawer({ children, valuesInfo }) {
//   const classes = useStyles();
//   const [open, drawerToggle] = useToggle(true);

//   return (
//     <div className={classes.root}>
//       <CssBaseline />

//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       />

//       <Drawer
//         variant="permanent"
//         className={`drawer ${clsx(classes.drawer, {
//           [classes.drawerOpen]: open,
//           [classes.drawerClose]: !open,
//         })}`}
//         classes={{
//           paper: clsx({
//             [classes.drawerOpen]: open,
//             [classes.drawerClose]: !open,
//           }),
//         }}
//       >
//         <DrawerHeader drawerToggle={drawerToggle} />
//         <DrawerMenu drawerOpen={open} />
//         <OutrasInformacoes drawerOpen={open} valuesInfo={valuesInfo} />
//       </Drawer>

//       <main className={`${classes.content} content`}>{children}</main>
//     </div>
//   );
// }

const DrawerComponent = ({ valuesInfo }) => {
  const [open, toggle] = useToggle(true);
  return (
    <div
      className={
        open ? 'drawer-content' : 'drawer-content drawer-content-close'
      }
    >
      <div className="app-bar-content">
        <button type="button" className="app-bar" onClick={toggle}>
          <MenuIcon />
          <span>Menu</span>
        </button>
      </div>
      <Divider />

      <div className="menu">
        <div className="link-menu" href="/">
          <SearchIcon />
          <span>Selecionar Receita</span>
        </div>
        <Divider />

        <div className="link-menu" href="/">
          <AddToPhotosIcon />
          <span>Adicionar Receita</span>
        </div>
        <Divider />

        <div className="link-menu" href="/">
          <InsertChartIcon />
          <span>Monitoramento</span>
        </div>

        {open && (
          <div className="monitoramento-opcoes">
            <form>
              <div className="radio-group">
                <label>
                  <input type="radio" name="automatico" />
                  Automatico
                </label>
              </div>

              <br />

              <div className="radio-group">
                <label>
                  <input type="radio" name="manual" />
                  Manual
                </label>
              </div>
            </form>
          </div>
        )}
        <Divider />
      </div>

      {open && (
        <div className="outras-infos">
          <h1>Mais Informações:</h1>
          <p>
            Pressão: <span>{valuesInfo.pressao} atm</span>
          </p>
          <p>
            Umidade: <span>{valuesInfo.umidade}%</span>
          </p>
          <p>
            Massa de Grãos: <span>{valuesInfo.massaGraos}g</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DrawerComponent;
