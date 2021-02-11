import React from 'react';
import RevisaoResultados from './pages/RevisaoResultados';
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
