import { AuthRepository } from '@/Domain/Repository/auth';
import UserEntity from '@/Domain/Entity/user';

class AutoLoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(): Promise<UserEntity | boolean> {
    const res = await this.authRepository.getAutoLogin();
    if (res === null) return new Promise((resolve) => resolve(false));
    return new Promise((resolve) => resolve(res));
  }
}

export default AutoLoginUseCase;
