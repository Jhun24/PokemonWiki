import ItemEntity from '@/Domain/Entity/item';

type GetItemDataType = {
  offset: number;
};

interface ItemRepository {
  getItem({ offset }: GetItemDataType): Promise<ItemEntity[]>;
}

export type { ItemRepository };
