import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ScrollToTop } from './components'

import { routes as r } from './routes';


const routes = r.map((route, index) =>
  <Route
    key={index}
    exact={route.path === '/'}
    path={route.path}
    component={route.component}
  />
);

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Switch>
            {routes}
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

