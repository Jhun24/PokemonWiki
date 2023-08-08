import UserEntity from '@/Domain/Entity/user';

type LoginType = {
  password: string;
  username: string;
};

type LogoutType = {
  username: string;
};

interface AuthRepository {
  getUserData(): Promise<UserEntity | boolean>;
  login({ password, username }: LoginType): Promise<UserEntity>;
}

export type { AuthRepository };
