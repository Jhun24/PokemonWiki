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

const getAPIDataList = async ({
  limit,
  offset,
  next,
  type = 'pokemon',
}: ApiRequestType): Promise<ApiResponseType> => {
  const URL: string =
    typeof next !== 'undefined'
      ? next
      : `${getServerURL({ type })}/?offset=${offset}&limit=${limit}`;
  const res = await fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await res.json();
};

const getLocalDataList = ({
  limit,
  offset,
  type = 'pokemon',
}: LocalRequestType): Promise<LocalResponseType> => {
  const localStringData = localStorage.getItem(type);
  if (localStringData === null)
    return new Promise((resolve) => resolve({ results: false }));
  const data: NameAPIResource[] = JSON.parse(localStringData);
  if (data.length < limit + offset)
    return new Promise((resolve) => resolve({ results: false }));
  return new Promise((resolve) => resolve({ results: data }));
};

const getPokemonDetailData = async ({
  url,
}: APIResource): Promise<PokemonApiResponseType> => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return (await res.json()) as Promise<PokemonApiResponseType>;
};

const getItemDetailData = async ({
  url,
}: APIResource): Promise<ItemApiResponseData> => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return await res.json();
};

const translatePokemonData = async ({
  id,
  name,
  types,
  url,
}: PokemonApiResponseType & APIResource): Promise<PokemonDataType> => {
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
};

const translateItemData = async ({
  category,
  id,
  name,
  sprites,
  url,
}: ItemApiResponseData & APIResource): Promise<ItemDataType> => {
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
};

export { getAPIDataList, getLocalDataList };
