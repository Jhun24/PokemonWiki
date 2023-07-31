type UserRequestType = {
  id: string;
  password: string;
}

type UserResponseType = {
  email: string;
  id: string;
  image: string;
  name: string;
}

export type {
  UserRequestType,
  UserResponseType,
};
