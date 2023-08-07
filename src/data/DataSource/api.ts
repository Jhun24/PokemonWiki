import { LocalStorage } from 'node-localstorage';

import { IMAGE_URL, ITEM_SERVER_URL, POKEMON_SERVER_URL } from '@/const/.';
import {
  APIResource,
  ApiRequestType,
  ApiResponseType,
  GetServerURLType,
  ItemApiResponseData,
  ItemDataType,
  LocalRequestType,
  LocalResponseType,
  NameAPIResource,
  PokemonApiResponseType,
  PokemonDataType,
} from '../Model/api';

global.localStorage = new LocalStorage('./scratch');
const getServerURL = ({ type = 'pokemon' }: GetServerURLType): string => {
  if (type === 'item') return ITEM_SERVER_URL;
  return POKEMON_SERVER_URL;
};
class ApiDataSource {
  async getAPIDataList({
    next,
    limit = 20,
    offset = 20,
    type = 'pokemon',
  }: ApiRequestType): Promise<ApiResponseType> {
    const URL: string =
      typeof next !== 'undefined'
        ? next
        : `${getServerURL({ type })}/?offset=${offset}&limit=${limit}`;
    const res = await fetch(URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  }

  async getLocalDataList({
    limit = 20,
    offset = 20,
    type = 'pokemon',
  }: LocalRequestType): Promise<LocalResponseType> {
    const localStringData = localStorage.getItem(type);
    if (localStringData === null)
      return new Promise((resolve) => resolve({ results: false }));
    const data: NameAPIResource[] = JSON.parse(localStringData);
    if (data.length < limit + offset)
      return new Promise((resolve) => resolve({ results: false }));
    return new Promise((resolve) => resolve({ results: data }));
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

  async translatePokemonData({
    id,
    name,
    types,
    url,
  }: PokemonApiResponseType & APIResource): Promise<PokemonDataType> {
    const data: PokemonDataType = {
      id: id,
      image: `${IMAGE_URL}/id`,
      name: name,
      types: types,
      url: url,
    };

    const localStringData = localStorage.getItem('pokemon');
    if (localStringData === null) {
      const saveData: PokemonDataType[] = [data];
      localStorage.setItem('pokemon', JSON.stringify(saveData));
    } else {
      const localArrayData: PokemonDataType[] = JSON.parse(localStringData);
      const updateData: PokemonDataType[] = [data];
      const saveData: PokemonDataType[] = localArrayData.concat(updateData);
      localStorage.removeItem('pokemon');
      localStorage.setItem('pokemon', JSON.stringify(saveData));
    }

    return data;
  }

  async translateItemData({
    category,
    id,
    name,
    sprites,
    url,
  }: ItemApiResponseData & APIResource): Promise<ItemDataType> {
    const data: ItemDataType = {
      category: category,
      id: id,
      image: sprites,
      name: name,
      url: url,
    };

    const localStringData = localStorage.getItem('item');
    if (localStringData === null) {
      const saveData: ItemDataType[] = [data];
      localStorage.setItem('pokemon', JSON.stringify(saveData));
    } else {
      const localArrayData: ItemDataType[] = JSON.parse(localStringData);
      const updateData: ItemDataType[] = [data];
      const saveData: ItemDataType[] = localArrayData.concat(updateData);
      localStorage.removeItem('item');
      localStorage.setItem('item', JSON.stringify(saveData));
    }

    return data;
  }
}

export default ApiDataSource;
