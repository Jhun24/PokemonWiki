import { AuthRepository } from '@/Domain/Repository/auth';
import AuthDataSource from '@/Data/DataSource/auth';
import UserEntity from '@/Domain/Entity/user';

type DummyDataType = {
  password: string;
  username: string;
};

class AuthRepositoryImpl implements AuthRepository {
  constructor(
    private authDataSource: AuthDataSource,
    private userEntity: UserEntity
  ) {}
  async getCredential(): Promise<UserEntity | null> {
    const stringLocalData: string | null = localStorage.getItem('userData');
    if (stringLocalData === null) return null;
    this.userEntity = new UserEntity(JSON.parse(stringLocalData));
    return this.userEntity;
  }

  async getDummyData({
    password,
    username,
  }: {
    password: string;
    username: string;
  }): Promise<boolean> {
    const dummyData: DummyDataType[] = [
      {
        password: '0lelplR',
        username: 'kminchelle',
      },
      {
        password: '9uQFF1Lh',
        username: 'atuny0',
      },
    ];

    for (const d of dummyData) {
      if (d.password === password && d.username === username) return true;
    }

    return false;
  }

  async login({
    password,
    username,
  }: {
    password: string;
    username: string;
  }): Promise<UserEntity> {
    const res = await this.authDataSource.login({ password, username });
    this.userEntity = new UserEntity(res);
    return this.userEntity;
  }

  async logout(): Promise<void> {
    localStorage.removeItem('userData');
  }

  async saveCredential(userEntity: UserEntity): Promise<void> {
    localStorage.setItem('userData', JSON.stringify(userEntity));
  }
}

export default AuthRepositoryImpl;
