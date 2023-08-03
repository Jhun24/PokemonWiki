type NameAPIResource = {
  name: string;
  url: string;
};

type PokemonDataType = {
  id: number;
  image: string;
  name: string;
  type: string;
  url: string;
};

type PokemonRequestType = {
  limit: number;
  offset: number;
  next?: string;
};

type PokemonResponseType = {
  count: number;
  next: string;
  previous: string;
  results: NameAPIResource[];
};

export type { PokemonDataType, PokemonRequestType, PokemonResponseType };
