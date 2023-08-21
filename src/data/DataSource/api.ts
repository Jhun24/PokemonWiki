import { CACHE_NAME, ITEM_SERVER_URL, POKEMON_SERVER_URL } from '@/Const';
import {
  APIResource,
  ApiRequestType,
  ApiResponseType,
  CacheDataType,
  CacheDataListType,
  ItemApiResponseData,
  PokemonApiResponseType,
} from '@/Data/Model/api';

const LIMIT = 5;

class ApiDataSource {

  async cacheData({ url }: CacheDataType): Promise<void> {
    caches.open(CACHE_NAME).then((cache) => cache.add(url));
  }

  async getCacheItemData({ offset }: CacheDataListType): Promise<ItemApiResponseData[] | null> {
    const cacheStorage = await caches.open(CACHE_NAME);
    let resArray: ItemApiResponseData[] = [];
    for(let i = offset; i < (offset + LIMIT); i++){
      const cacheURL = `${ITEM_SERVER_URL}/${i}`;
      const cachedResponse = await cacheStorage.match(cacheURL);
      if(typeof cachedResponse === "undefined" || !cachedResponse.ok) return null;
      const res: ItemApiResponseData = await cachedResponse.json();
      resArray.push(res);
    }
    return resArray;
  }

  async getCachePokemonData({ offset }: CacheDataListType): Promise<PokemonApiResponseType[] | null> {
    const cacheStorage = await caches.open(CACHE_NAME);
    let resArray: PokemonApiResponseType[] = [];
    for(let i = offset; i < (offset + LIMIT); i++){
      const cacheURL = `${POKEMON_SERVER_URL}/${i}`;
      const cachedResponse = await cacheStorage.match(cacheURL);
      if(typeof cachedResponse === "undefined" || !cachedResponse.ok) return null;
      const res: PokemonApiResponseType = await cachedResponse.json();
      resArray.push(res);
    }
    return resArray;
  }

  async getPokemonDataList({
    next,
    limit = LIMIT,
    offset,
  }: ApiRequestType): Promise<ApiResponseType> {
    const res = await fetch(
      next ?? `${POKEMON_SERVER_URL}/?offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return await res.json();
  }

  async getPokemonDetailData({
    url,
  }: APIResource): Promise<PokemonApiResponseType> {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return await res.json();
  }

  async getItemDetailData({ url }: APIResource): Promise<ItemApiResponseData> {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return await res.json();
  }

  async getItemDataList({
    offset,
    next,
    limit = LIMIT,
  }: ApiRequestType): Promise<ApiResponseType> {
    const res = await fetch(
      next ?? `${ITEM_SERVER_URL}/?offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return await res.json();
  }
}

export default ApiDataSource;
