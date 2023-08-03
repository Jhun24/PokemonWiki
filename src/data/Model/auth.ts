type AuthRequestType = {
  password: string;
  username: string;
};

type AuthResponseType = {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
};

type LogoutType = Pick<AuthResponseType, 'username'>;

export type { AuthRequestType, AuthResponseType, LogoutType };
