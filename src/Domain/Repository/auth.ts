import UserEntity from '@/Domain/Entity/user';

type LoginType = {
  password: string;
  username: string;
};

interface AuthRepository {
  login({ password, username }: LoginType): Promise<UserEntity>;
}

export type { AuthRepository };
