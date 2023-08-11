import { ITEM_SERVER_URL, POKEMON_SERVER_URL } from '@/Const/.';
import {
  APIResource,
  ApiRequestType,
  ApiResponseType,
  ItemApiResponseData,
  PokemonApiResponseType,
} from '@/Data/Model/api';
import { resolve } from 'path';

class ApiDataSource {
  async getPokemonDataList({
    next,
    limit = 20,
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

  getPokemonLocalDataList({
    offset,
    limit = 20,
  }: ApiRequestType): Promise<PokemonApiResponseType[]> {
    const stringLocalData: string | null = localStorage.getItem('pokemon');
    if (stringLocalData === null) return new Promise((resolve) => resolve([]));
    const pokemonLocalData: PokemonApiResponseType[] =
      JSON.parse(stringLocalData);
    const returnData: PokemonApiResponseType[] = pokemonLocalData.slice(
      offset,
      offset + limit
    );
    return new Promise((resolve) => resolve(returnData));
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
    limit = 20,
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

  getItemLocalDataList({
    offset,
    limit = 20,
  }: ApiRequestType): Promise<ItemApiResponseData[]> {
    const stringLocalData: string | null = localStorage.getItem('item');
    if (stringLocalData === null) return new Promise((resolve) => resolve([]));
    const itemLocalData: ItemApiResponseData[] = JSON.parse(stringLocalData);
    const returnData: ItemApiResponseData[] = itemLocalData.slice(
      offset,
      offset + limit
    );
    return new Promise((resolve) => resolve(returnData));
  }

  savePokemonDataToLocal(
    pokemonData: PokemonApiResponseType[]
  ): Promise<number> {
    const stringLocalData: string | null = localStorage.getItem('pokemon');
    if (stringLocalData === null) {
      localStorage.setItem('pokemon', JSON.stringify(pokemonData));
      return new Promise((resolve) => resolve(20));
    }
    const pokemonLocalData: PokemonApiResponseType[] =
      JSON.parse(stringLocalData);
    const saveData: PokemonApiResponseType[] =
      pokemonLocalData.concat(pokemonData);
    localStorage.setItem('pokemon', JSON.stringify(saveData));
    return new Promise((resolve) => resolve(saveData.length));
  }

  saveItemDataToLocal(itemData: ItemApiResponseData[]): Promise<number> {
    const stringLocalData: string | null = localStorage.getItem('item');
    if (stringLocalData === null) {
      localStorage.setItem('item', JSON.stringify(itemData));
      return new Promise((resolve) => resolve(20));
    }
    const itemLocalData: ItemApiResponseData[] = JSON.parse(stringLocalData);
    const saveData: ItemApiResponseData[] = itemLocalData.concat(itemData);
    localStorage.setItem('item', JSON.stringify(saveData));
    return new Promise((resolve) => resolve(saveData.length));
  }
}

export default ApiDataSource;
