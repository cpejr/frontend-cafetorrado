/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ResultsRevision from './Pages/ResultsRevision';
import Teste from './components/theme';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TemplateWithDrawer from './Templates';
import Automatic from './Pages/AutomaticPage/Automatic';
import Manual from './Pages/ManualPage/Manual';
import '../src/components/Animations/Animations.css'
import { StylesProvider } from '@material-ui/core';
import ResultsSelection from './Pages/RevenueSelection/Selection.jsx';

const valuesInfo = {
  pressão: 8.9,
  umidade: 79,
  massaGraos: 2468,
}
const RouterComponent = () => {
  return (
    <Router>
      <TemplateWithDrawer valuesInfo = {valuesInfo}>
        <Route
          render={({ location }) => (
            <div>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route path="/" exact>
                      <h1>Página Home</h1>
                      <Link to="/teste">Ir para teste</Link>

                      <br />
                      <Link to="/ResultsRevision">
                        Ir para Revisão de Resultados
                      </Link>
                      <br />
                      <Link to="/automatic">Ir para Tela Automático</Link>
                      <br />
                      <Link to="/Manual">Ir para Tela Manual</Link>
                      <br />
                      <Link to="/RevenueSelection">Ir para Seleção de Receita</Link>
                    </Route>
                   
                      
                    <Route path="/RevenueSelection" component={ResultsSelection}>
                    </Route>

                    <Route path="/Manual">
                      <Manual />
                    </Route>

                    <Route
                      path="/ResultsRevision"
                      component={ResultsRevision}
                    />

                    <Route path="/automatic">
                      <Automatic  />
                    </Route>
                    <Route path="/Manual">
                      <Manual data={data} />
                    </Route>

                    <Route path="/ResultsRevision" component={ResultsRevision}>
                      <ResultsRevision />
                    </Route>

                    <Route path="/teste">
                      <Teste />
                      <h1>Página de testes</h1>
                      <Link to="/">Ir para Home</Link>
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </TemplateWithDrawer>
    </Router>
  );
};

export default RouterComponent;
