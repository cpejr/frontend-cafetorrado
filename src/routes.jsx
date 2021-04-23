import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ResultsRevision from './Pages/ResultsRevision';
import Teste from './components/theme';
import TemplateWithDrawer from './Templates';
import Automatic from './Pages/AutomaticPage/Automatic';
import Manual from './Pages/ManualPage/Manual';
import Home from './Pages/Home/Home';
import RecipeSelection from './Pages/RecipeSelection/RecipeSelection';
import './components/Animations/Animations.css';

const valuesInfo = {
  pressão: 8.9,
  umidade: 79,
  massaGraos: 2468,
};
const RouterComponent = () => (
  <Router>
    <TemplateWithDrawer valuesInfo={valuesInfo}>
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
                  <Route path="/" exact component={Home} />
                  <Route path="/RecipeSelection" component={RecipeSelection} />
                  <Route path="/Manual" component={Manual} />
                  <Route path="/ResultsRevision" component={ResultsRevision} />
                  <Route path="/automatic" component={Automatic} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    </TemplateWithDrawer>
  </Router>
);

export default RouterComponent;
