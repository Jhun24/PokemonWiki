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

type UserLocalStorageRequestType = Pick<AuthResponseType, 'username'>;

type UserLocalStorageResponseType = Pick<
  AuthResponseType,
  'email' | 'image' | 'username'
>;

export type {
  AuthRequestType,
  AuthResponseType,
  UserLocalStorageRequestType,
  UserLocalStorageResponseType,
};
