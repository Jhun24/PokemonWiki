import { AuthRepository } from "@/Domain/Repository/auth";
import UserEntity from "@/Domain/Entity/user";

class GetUserCredentialUseCase{
  constructor( private authRepository: AuthRepository){ }

  async execute(): Promise<UserEntity | null>{
    const res = await this.authRepository.getCredential();
    if(res === null) return null;
    return res;
  }
}

export default GetUserCredentialUseCase;