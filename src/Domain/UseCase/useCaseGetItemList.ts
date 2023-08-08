import ItemEntity from '@/Domain/Entity/item';
import { ItemRepository } from '@/Domain/Repository/item';

type ExecuteType = {
  offset: number;
};

class UseCaseGetItemList {
  private itemRepository: ItemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  async execute({ offset }: ExecuteType): Promise<ItemEntity[]> {
    const res = await this.itemRepository.getItem({ offset });
    return res;
  }
}

export default UseCaseGetItemList;
