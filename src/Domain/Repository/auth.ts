import UserEntity from "@/Domain/Entity/user";

type GetUserDataType = {
  isAuth: boolean;
}
type LoginType = {
  password: string;
  username: string;
}

interface AuthRepository {
  getUserData({isAuth}: GetUserDataType): Promise<UserEntity>;
  login({password, username}: LoginType): Promise<UserEntity>;
  logout(): Promise<void>;
}

export type { AuthRepository };
