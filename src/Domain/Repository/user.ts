import UserEntity from '@/Domain/Entity/user';
import FavoriteEntity from '@/Domain/Entity/favorite';

type GetUserDataType = {
  isAuth: boolean;
};

type GetFavoriteType = {
  username: string;
};

interface UserRepository {
  getUserData({ isAuth }: GetUserDataType): Promise<UserEntity>;
  getFavorite({ username }: GetFavoriteType): Promise<FavoriteEntity>;
}

export type { UserRepository };
