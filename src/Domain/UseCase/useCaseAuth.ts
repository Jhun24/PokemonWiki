import { AuthRepository } from "@/Domain/Repository/auth";
import UserEntity from "@/Domain/Entity/user";

type ExecuteType = {
  password: string;
  username: string;
}

class UseCaseAuth {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository){
    this.authRepository = authRepository;
  }
  
  async execute({password, username}: ExecuteType): Promise<UserEntity>{
    const res = await this.authRepository.login({password, username});
    return res;
  }
}

export default UseCaseAuth;