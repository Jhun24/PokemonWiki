import { POKEMON_SERVER_URL } from '@/const/.';
import { PokemonRequestType, PokemonResponseType } from '@/data/Model/pokemon';

const GetPokemonList = async ({
  limit,
  offset,
  next,
}: PokemonRequestType): Promise<PokemonResponseType> => {
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

export { GetPokemonList };
