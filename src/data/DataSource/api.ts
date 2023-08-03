import { LocalStorage } from 'node-localstorage';

import { ITEM_SERVER_URL, POKEMON_SERVER_URL } from '@/const/.';
import {
  ApiRequestType,
  ApiResponseType,
  GetServerURLType,
  LocalRequestType,
  LocalResponseType,
  NameAPIResource,
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
  return res.json();
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

export { getAPIDataList, getLocalDataList };
