import { AuthRequestType, AuthResponseType } from "@/data/Model/auth";

interface AuthRepository {
  getUserData(isAuth: Boolean): Promise<AuthResponseType>;
  login(req: AuthRequestType): Promise<AuthResponseType>;
  logout(): Promise<void>;
}

export type { AuthRepository };
