import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import history from '../services/history';

// Components
import Home from '../pages/Home';
import Repositories from '../pages/Repositories';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repositories/:user" component={Repositories} />
      </Switch>
    </Router>
  );
}
