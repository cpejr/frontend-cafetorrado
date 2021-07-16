import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { io } from 'socket.io-client';
import ResultsRevision from './Pages/ResultsRevision';
import Teste from './components/theme';
import TemplateWithDrawer from './templates';
import Automatic from './Pages/AutomaticPage/Automatic';
import Manual from './Pages/ManualPage/Manual';
import Home from './Pages/Home/Home';
import RecipeSelection from './Pages/RecipeSelection/RecipeSelection';
import './components/Animations/Animations.css';
import WifiModal from './components/WifiModal/WifiModal';
import { socket } from '.';

const valuesInfo = {
  pressão: 8.9,
  umidade: 79,
  massaGraos: 2468,
};
const RouterComponent = () => {
  useEffect(() => {
    socket.on('wifiStatus', (state) => {
      setWifiState(state);
    });
  }, []);

  const [wifiState, setWifiState] = useState(true);

  return (
    <Router>
      <TemplateWithDrawer valuesInfo={valuesInfo}>
        <Route
          render={({ location }) => (
            wifiState ? (
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
            ) : (
              <WifiModal />
            )
          )}
        />
      </TemplateWithDrawer>
    </Router>
  );
};

export default RouterComponent;
