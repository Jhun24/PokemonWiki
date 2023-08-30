import ItemEntity from '@/Domain/Entity/item';

type GetItemDataType = {
  offset: number;
};

type GetItemDetailType = {
  id: number;
}

type GetItemInFavoriteType = {
  username: string;
};

interface ItemRepository {
  getItem({ offset }: GetItemDataType): Promise<ItemEntity[]>;
  getItemDetail({ id }: GetItemDetailType): Promise<ItemEntity>;
  getItemInFavorite({ username }: GetItemInFavoriteType): Promise<ItemEntity[]>;
  saveItemToFavorite(username: string, itemEntity: ItemEntity): Promise<void>;
}

export type { ItemRepository };
