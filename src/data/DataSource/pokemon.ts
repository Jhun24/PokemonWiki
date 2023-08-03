import { LocalStorage } from 'node-localstorage';

import { POKEMON_SERVER_URL } from '@/const/.';
import {
  ApiRequestType,
  ApiResponseType,
  LocalRequestType,
  LocalResponseType,
  NameAPIResource,
} from '../Model/api';

global.localStorage = new LocalStorage('./scratch');

const getPokemonList = async ({
  limit,
  offset,
  next,
}: ApiRequestType): Promise<ApiResponseType> => {
  const URL: string =
    typeof next !== 'undefined'
      ? next
      : `${POKEMON_SERVER_URL}/?offset=${offset}&limit=${limit}`;
  const res = await fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
};

const getPokemonLocalList = ({
  limit,
  offset,
}: LocalRequestType): Promise<LocalResponseType> => {
  const localStringData = localStorage.getItem('pokemon');
  if (localStringData === null)
    return new Promise((resolve) => resolve({ results: false }));
  const data: NameAPIResource[] = JSON.parse(localStringData);
  if (data.length < limit + offset)
    return new Promise((resolve) => resolve({ results: false }));
  return new Promise((resolve) => resolve({ results: data }));
};

export { getPokemonList, getPokemonLocalList };
