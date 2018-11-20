
import React, {Fragment} from 'react';
import './App.css';
import history from './history'

import { Home } from './components/Home';
import { Login } from './components/Login';
import { Movie } from './components/Movie';





import { BrowserRouter, Route, Router, Switch  } from "react-router-dom";

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Fragment>
      <BrowserRouter>
      <Router history = {history}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/movie/:id" component={Movie} />

          </Switch>
      </Router>
      </BrowserRouter>
      </Fragment>

    );
  }
}
