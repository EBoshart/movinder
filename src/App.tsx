
import React, { Fragment } from 'react';
import './App.css';
import history from './history'

import { Home } from './components/Home';
import { Login } from './components/Login';
import { Movie } from './components/Movie';





import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
export const images = ['https://eu.movieposter.com/posters/archive/main/226/MPW-113357', 'http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/04/avengers-infinity-war-imax-720x1045.jpg'];


export class App extends React.Component<{}, {}> {
    public render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Router history={history}>
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route key='test' path="/movie" component={Movie} />
                            { /*<Route path="/foo/:bar">
              {({ bar } : { bar : string }) => <Movie key={bar}/>}
            </Route> */}

                        </Switch>
                    </Router>
                </BrowserRouter>
            </Fragment>

        );
    }
}
