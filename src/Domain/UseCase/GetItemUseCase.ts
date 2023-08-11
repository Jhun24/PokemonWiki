import ItemEntity from '@/Domain/Entity/item';
import { ItemRepository } from '@/Domain/Repository/item';

type ExecuteType = {
  offset: number;
};

class GetItemUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute({ offset }: ExecuteType): Promise<ItemEntity[]> {
    const res = await this.itemRepository.getItem({ offset });
    return res;
  }
}

export default GetItemUseCase;
