import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ResultsRevision } from './Pages/ResultsRevision';
import TemplateWithDrawer from './templates';
import Automatic from './Pages/AutomaticPage/Automatic';
import Manual from './Pages/ManualPage/Manual';
// eslint-disable-next-line import/no-named-as-default
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import RecipeSelection from './Pages/RecipeSelection/RecipeSelection';
import './components/Animations/Animations.css';
import WifiModal from './components/WifiModal/WifiModal';
import EditRoast from './Pages/EditRoast/EditRoast';
import { socket } from './index';
import wakeuptable from './Pages/WakeupTable/wakeuptable';
import { isAuthenticated } from './services/auth';

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

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={() => (isAuthenticated()
        ? <Component {...rest} />
        : <Redirect to="/" />)}

    />
  );

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
                      <Route path="/Login" exact component={Login} />
                      <PrivateRoute path="/" exact component={Home} />
                      <PrivateRoute path="/RecipeSelection" component={RecipeSelection} />
                      <PrivateRoute path="/Manual" component={Manual} />
                      <PrivateRoute path="/ResultsRevision" component={ResultsRevision} />
                      <PrivateRoute path="/automatic" component={Automatic} />
                      <PrivateRoute path="/editRoast" component={EditRoast} />
                      <PrivateRoute path="/wakeuptable" component={wakeuptable} />
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
