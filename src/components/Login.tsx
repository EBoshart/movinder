
import * as React from 'react';

import history from '../history'

import { register } from '../apiservice';

export interface IHomeState { email: string, desiredPassword: string }


export class Login extends React.Component<{}, IHomeState> {

    public onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ email: e.target.value })

    public onPassWordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ desiredPassword: e.target.value })

    public submit = () =>
        register(this.state).then(x => {
            if (x.successful) {
                history.push('/movie/')
            }
        }).catch(x => history.push('/movie/'));

    public render() {

        return (
            <div className="App">

                <p className="App-intro">
                    Login
                </p>
                <div>
                    <label htmlFor="email">
                        Email:                    </label>

                    <input id="email" type="text" required={true} onChange={this.onNameChange} list="emails" placeholder="email" />
                    <datalist id="emails">
                        <option>BruceWayne@gotham.com</option>
                        <option>ClarkKent@krypton.com</option>
                        <option>PeterParker@web.com</option>
                    </datalist>
                    <div>
                        <label htmlFor="pw">      Password:  </label>
                        <input id="pw" placeholder="pw" onChange={this.onPassWordChange} />
                    </div>
                    <button onClick={this.submit}> submit</button>

                </div>
            </div>

        );
    }
}
