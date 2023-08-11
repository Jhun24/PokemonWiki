import { AuthRepository } from '@/Domain/Repository/auth';
import UserEntity from '@/Domain/Entity/user';

type ExecuteType = {
  password: string;
  username: string;
};

class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute({ password, username }: ExecuteType): Promise<UserEntity> {
    const checkUserRes = await this.authRepository.getDummyData({
      password,
      username,
    });
    if (!checkUserRes) return Promise.reject(new Error('User Not Found'));
    const res = await this.authRepository.login({ password, username });
    await this.authRepository.saveCredential(res);
    return res;
  }
}

export default LoginUseCase;
