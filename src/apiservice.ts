import axios from 'axios';
import { IHomeState } from './components/Login';

axios.defaults.baseURL = 'http://localhost:8880/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

 interface IregisterResult { successful: boolean }

export const register = (body: IHomeState) =>
  axios.post<IregisterResult>('register/new',  body).then(x => x.data)
