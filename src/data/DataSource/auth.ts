import { LocalStorage } from 'node-localstorage';

import { AUTH_URL } from '@/const/.';
import {
  AuthRequestType,
  AuthResponseType,
  LogoutType,
} from '@/data/Model/auth';

global.localStorage = new LocalStorage('./scratch');
class AuthDataSource {
  async login({
    password,
    username,
  }: AuthRequestType): Promise<AuthResponseType> {
    const res = await fetch(`${AUTH_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    return res.json();
  }

  async logout({ username }: LogoutType): Promise<void> {
    localStorage.removeItem(username);
  }

  async setDummyData(): Promise<void> {
    const dummyUser: AuthRequestType[] = [
      {
        password: '0lelplR',
        username: 'kminchelle',
      },
      {
        password: 'atuny0',
        username: '9uQFF1Lh',
      },
    ];
    if (localStorage.getItem('userData') === null)
      localStorage.setItem('userData', JSON.stringify(dummyUser));
  }
}

export default AuthDataSource;
