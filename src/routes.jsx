import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Teste from './Components/teste';
import RevisaoResultados from './pages/RevisaoResultados';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Página Home</h1>
          <Link to="/teste">Ir para teste</Link>
          <br />
          <Link to="/revisaoresult">Ir para revisão de resultados</Link>
        </Route>

        <Route path="/teste">
          <Teste />
          <h1>Página de testes</h1>
          <Link to="/">Ir para Home</Link>
        </Route>

        <Route path="/revisaoresult" component={RevisaoResultados} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
