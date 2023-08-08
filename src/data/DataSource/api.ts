import { ITEM_SERVER_URL, POKEMON_SERVER_URL } from '@/Const/.';
import {
  APIResource,
  ApiRequestType,
  ApiResponseType,
  GetServerURLType,
  ItemApiResponseData,
  PokemonApiResponseType,
} from '@/Data/Model/api';

const getServerURL = ({ type = 'pokemon' }: GetServerURLType): string => {
  if (type === 'item') return ITEM_SERVER_URL;
  return POKEMON_SERVER_URL;
};
class ApiDataSource {
  async getAPIDataList({
    next,
    limit = 20,
    offset,
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
}

export default ApiDataSource;
