type UserRequestType = {
  password: string;
  username: string;
};

type UserResponseType = {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
};

export type { UserRequestType, UserResponseType };
