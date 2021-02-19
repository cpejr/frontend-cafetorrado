/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import { useLocation, Route } from 'react-router-dom';
import Theme from '../../theme';
import Divider from '../../atoms/divider';

import './styles.css';

const DrawerComponent = ({ open, toggle, valuesInfo }) => {
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
                  <Route
                    render={({ history }) => (
                      <input
                        type="radio"
                        onClick={() => {
                          history.push('/automatico');
                        }}
                        name="automatico"
                      />
                    )}
                  />
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
        <div className="link-menu">
          <Theme>
            <spam>Temas</spam>
          </Theme>
        </div>
        <Divider />
      </div>

      {!(useLocation().pathname === '/automatico') && open && (
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
