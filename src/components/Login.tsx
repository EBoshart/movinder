
import * as React from 'react';
import logo from '../logo.svg';

import history from '../history'

import { register } from '../apiservice';




/*export interface IHomeProps{ text?: string }*/
export interface IHomeState { email: string, desiredPassword: string }


export class Login extends React.Component<{}, IHomeState> {

    public onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ email: e.target.value })

    public onPassWordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ desiredPassword: e.target.value })

    public submit = () =>
         register(this.state).then(x => {
           if(x.successful) {
             history.push('/movie/' + Math.random())
           }
         });

    public render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                    <img src={logo} className="App-logo" alt="logo" />

                </header>
                <p className="App-intro">
                    Login
                </p>
                <div>
                    <label>
                        Email:
                    <input type="text" onChange={this.onNameChange} list="emails" placeholder="email" />
                        <datalist id="emails">
                            <option>BruceWayne@gotham.codsdsdm</option>
                            <option>ClarkKent@krypton.com</option>
                            <option>PeterParker@web.com</option>
                        </datalist>
                        <div>
                            Password:
                   <input placeholder="pw" onChange={this.onPassWordChange} />
                        </div>
                    </label>
                    <input type="submit" onClick={this.submit} />

                </div>
            </div>

        );
    }
}
