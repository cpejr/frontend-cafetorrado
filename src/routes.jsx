/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ResultsRevision from './Pages/ResultsRevision';
import Teste from './components/theme';
import TemplateWithDrawer from './Templates/index';
import Automatic from './Pages/AutomaticPage/Automatic';
import Manual from './Pages/ManualPage/Manual';

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
            <Link to="/ResultsRevision">Ir para Revisão de Resultados</Link>
            <br />
            <Link to="/Automatic">Ir para Tela Automático</Link>
            <br />
            <Link to="/Manual">Ir para Tela Manual</Link>
          </Route>

          <Route path="/Automatic">
            <Automatic data={data} />
          </Route>

          <Route path="/Manual">
             <Manual data={data} /> 
          </Route>

          <Route path="/ResultsRevision" component={ResultsRevision} />

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
