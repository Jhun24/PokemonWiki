import { AUTH_URL } from '@/const/.';
import { UserRequestType, UserResponseType } from '@/data/Model/auth';

const Login = async ({
  password,
  username,
}: UserRequestType): Promise<UserResponseType> => {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  return res.json();
};

const Logout = async () => {};

const setDummyData = async () => {};
