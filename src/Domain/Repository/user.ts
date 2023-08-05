import UserEntity from "../Entity/user";

type GetUserDataType = {
  isAuth: boolean;
}

type GetFavoriteType = {
  limit: number;
  offset: number;
  username: string; 
}

interface UserRepository {
  getUserData({isAuth}: GetUserDataType): Promise<UserEntity>;
  getFavorite({limit, offset, username}: GetFavoriteType): Promise<>;
}

export type { UserRepository };