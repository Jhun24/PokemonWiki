import { AuthRepository } from '@/Domain/Repository/auth';
import UserEntity from '@/Domain/Entity/user';

class LogoutUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(): Promise<void> {
    await this.authRepository.logout();
  }
}

export default LogoutUseCase;
