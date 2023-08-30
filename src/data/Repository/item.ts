import ItemEntity from '@/Domain/Entity/item';
import ApiDataSource from '@/Data/DataSource/api';
import { ItemRepository } from '@/Domain/Repository/item';
import { ITEM_SERVER_URL } from '@/Const';

class ItemRepositoryImpl implements ItemRepository {
  private apiDataSource: ApiDataSource;

  constructor() {
    this.apiDataSource = new ApiDataSource();
  }
  async getItem({ offset }: { offset: number }): Promise<ItemEntity[]> {
    const cacheRes = await this.apiDataSource.getCacheItemData({offset});
    if(cacheRes !== null) return cacheRes;
    const res = await this.apiDataSource.getItemDataList({ offset });
    let dataArray: ItemEntity[] = [];
    for (const d of res.results) {
      const url = d.url;
      await this.apiDataSource.cacheData({url});
      const data = await this.apiDataSource.getItemDetailData({ url });
      dataArray.push(data);
    }
    return dataArray;
  }

  async getItemDetail({ id }: { id: number; }): Promise<ItemEntity> {
    const url = `${ITEM_SERVER_URL}/${id}`;
    const cacheRes = await this.apiDataSource.getCacheItem({url});
    if(cacheRes !== null) return cacheRes;
    const res = await this.apiDataSource.getItemDetailData({url});
    return res;
  }

  getItemInFavorite({ username }: { username: string }): Promise<ItemEntity[]> {
    return new Promise((resolve) => resolve([]));
  }

  async saveItemToFavorite(
    username: string,
    itemEntity: ItemEntity
  ): Promise<void> {
    const localStringData: string | null = localStorage.getItem(
      `${username}-item`
    );
    if (localStringData === null) {
      localStorage.setItem(
        `${username}-item`,
        JSON.stringify([itemEntity])
      );
    } else {
      let localItemData: ItemEntity[] = JSON.parse(localStringData);
      if(localItemData.length > 5) return Promise.reject("Item Local Storage Over");
      localItemData.push(itemEntity);
      localStorage.setItem(
        `${username}-item`,
        JSON.stringify(localItemData)
      );
    }
  }
}

export default ItemRepositoryImpl;
