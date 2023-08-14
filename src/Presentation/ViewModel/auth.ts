import AutoLoginUseCase from '@/Domain/UseCase/AutoLoginUseCase';
import LoginUseCase from '@/Domain/UseCase/LoginUseCase';
import LogoutUseCase from '@/Domain/UseCase/LogoutUseCase';
import { AuthRepository } from '@/Domain/Repository/auth';
import AuthRepositoryImpl from '@/Data/Repository/auth';
import AuthDataSource from '@/Data/DataSource/auth';
import UserEntity from '@/Domain/Entity/user';

type LoginType = {
  username: string;
  password: string;
};

class AuthViewModel {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepositoryImpl(new AuthDataSource());
  }

  async autoLogin(): Promise<UserEntity | boolean> {
    const useCase = new AutoLoginUseCase(this.authRepository);
    const res = await useCase.execute();
    if (!res) return false;
    return res;
  }

  async login({ username, password }: LoginType): Promise<UserEntity> {
    const useCase = new LoginUseCase(this.authRepository);
    const res = await useCase.execute({ username, password });
    return res;
  }

  async logout(): Promise<void> {
    const useCase = new LogoutUseCase(this.authRepository);
    await useCase.execute();
  }
}

export default AuthViewModel;
