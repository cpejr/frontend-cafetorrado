import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Teste from './components/theme';
import Automatico from './Pages/TelaAutomatico/Automatico';

const RouterComponent = ({ data }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Página Home</h1>
          <Link to="/teste">Ir para teste</Link>
        </Route>

        <Route path="/automatico">
          <Automatico data={data} />
        </Route>

        <Route path="/teste">
          <Teste />
          <h1>Página de testes</h1>
          <Link to="/">Ir para Home</Link>
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
