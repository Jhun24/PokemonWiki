import { AUTH_URL } from '@/Const';
import {
  AuthRequestType,
  AuthResponseType,
  LogoutType,
} from '@/Data/Model/auth';

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
}

export default AuthDataSource;
