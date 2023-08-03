import { LocalStorage } from 'node-localstorage';

import { AUTH_URL } from '@/const/.';
import {
  AuthRequestType,
  AuthResponseType,
  UserLocalStorageRequestType,
  UserLocalStorageResponseType,
} from '@/data/Model/auth';

global.localStorage = new LocalStorage('./scratch');

const Login = async ({
  password,
  username,
}: AuthRequestType): Promise<AuthResponseType> => {
  const res = await fetch(`${AUTH_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  return res.json();
};

const Logout = async ({ username }: UserLocalStorageRequestType) => {
  localStorage.removeItem(username);
};

const setDummyData = async () => {
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

  localStorage.setItem('userData', JSON.stringify(dummyUser));
};

export { Login, Logout, setDummyData };
