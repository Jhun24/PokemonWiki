import ItemEntity from '@/Domain/Entity/item';
import ApiDataSource from '@/Data/DataSource/api';
import { ItemRepository } from '@/Domain/Repository/item';

class ItemRepositoryImpl implements ItemRepository {
  private apiDataSource: ApiDataSource;

  constructor() {
    this.apiDataSource = new ApiDataSource();
  }
  async getItem({ offset }: { offset: number }): Promise<ItemEntity[]> {
    const res = await this.apiDataSource.getItemDataList({ offset });
    let dataArray: ItemEntity[] = [];
    for (const d of res.results) {
      const url = d.url;
      const data = await this.apiDataSource.getItemDetailData({ url });
      dataArray.push(data);
    }
    return dataArray;
  }

  getItemInFavorite({ username }: { username: string }): Promise<ItemEntity[]> {
    return new Promise((resolve) => resolve([]));
  }

  getItemLocalData({ offset }: { offset: number }): Promise<ItemEntity[]> {
    return new Promise((resolve) => resolve([]));
  }

  async saveItemToFavorite(
    usernmae: string,
    itemEntity: ItemEntity
  ): Promise<void> {
    const localStringData: string | null = localStorage.getItem(
      `${usernmae}-item`
    );
  }
}

export default ItemRepositoryImpl;
