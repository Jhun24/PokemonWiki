import UserEntity from '@/Domain/Entity/user';

type LoginType = {
  password: string;
  username: string;
};

interface AuthRepository {
  getCredential(): Promise<UserEntity | null>;
  getDummyData({ password, username }: LoginType): Promise<boolean>;
  login({ password, username }: LoginType): Promise<UserEntity>;
  logout(): Promise<void>;
  saveCredential(userEntity: UserEntity): Promise<void>;
}

export type { AuthRepository };
