import { AuthRepository } from '@/Domain/Repository/auth';
import AuthDataSource from '@/Data/DataSource/auth';
import UserEntity from '@/Domain/Entity/user';

class AuthRepositoryImpl implements AuthRepository {
  authDataSource: AuthDataSource;
  userEntity: UserEntity | null;
  constructor() {
    this.authDataSource = new AuthDataSource();
    this.userEntity = null;
  }
  async getUserData(): Promise<UserEntity | boolean> {
    if (this.userEntity === null) return false;
    return this.userEntity;
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
  async logout({ username }: { username: string }): Promise<void> {
    await this.authDataSource.logout({ username });
  }
  async setDummy(): Promise<void> {
    await this.authDataSource.setDummyData();
  }
}

export default AuthRepositoryImpl;