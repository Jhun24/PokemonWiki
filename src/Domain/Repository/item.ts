import ItemEntity from '@/Domain/Entity/item';

type GetItemDataType = {
  offset: number;
};

type GetItemInFavoriteType = {
  username: string;
};

interface ItemRepository {
  getItem({ offset }: GetItemDataType): Promise<ItemEntity[]>;
  getItemInFavorite({ username }: GetItemInFavoriteType): Promise<ItemEntity[]>;
  saveItemToFavorite(usernmae: string, itemEntity: ItemEntity): Promise<void>;
}

export type { ItemRepository };
