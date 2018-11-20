import * as React from 'react';
import logo from '../logo.svg';

import {Link} from 'react-router-dom';






export class Home extends React.Component<{}, {}> {

   public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          Movinder
        </p>
        <div>go to login</div>
        <Link to='/login'>Login</Link>

      </div>

    );
  }
}
