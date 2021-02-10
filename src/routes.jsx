import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
import Teste from './components/theme';
import TemplateWithDrawer from './templates';
import Automatico from './Pages/TelaAutomatico/Automatico';

const valuesInfo = {
  pressao: 8.9,
  umidade: 79,
  massaGraos: 2468,
};

const RouterComponent = () => {
  return (
    <Router>
      <TemplateWithDrawer valuesInfo={valuesInfo}>
        <Switch>
          <Route path="/" exact>
            <h1>Página Home</h1>
            <Link to="/teste">Ir para teste</Link>
          </Route>

          <Route path="/automatico">
            <Automatico />
          </Route>

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
