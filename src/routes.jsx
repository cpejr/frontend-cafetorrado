/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RevisaoResultados from './Pages/RevisaoResultados';
import Teste from './components/theme';
import TemplateWithDrawer from './templates/index';
import Automatico from './Pages/TelaAutomatico/Automatico';
import manual from './Pages/Telamanual/manual';

const valuesInfo = {
  pressao: 8.9,
  umidade: 79,
  massaGraos: 2468,
};

const RouterComponent = ({ data }) => {
  return (
    <Router>
      <TemplateWithDrawer valuesInfo={valuesInfo}>
        <Switch>
          <Route path="/" exact>
            <h1>Página Home</h1>
            <Link to="/teste">Ir para teste</Link>
            <br />
            <Link to="/revisaoresult">Ir para Revisão de Resultados</Link>
            <br />
            <Link to="/automatico">Ir para Tela Automático</Link>
            <Link to="/manual">Ir para Tela Manual</Link>
          </Route>

          <Route path="/automatico">
            <Automatico data={data} />
          </Route>

          <Route path="/revisaoresult" component={RevisaoResultados} />

          <Route path="/teste">
            <Teste />
            <h1>Página de testes</h1>
            <Link to="/">Ir para Home</Link>
          </Route>
        </Switch>
      </TemplateWithDrawer>
    </Router>
  );
};

export default RouterComponent;
