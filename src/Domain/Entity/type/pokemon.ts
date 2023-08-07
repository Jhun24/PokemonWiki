type PokemonDataType = {
    id: number;
    image: string;
    name: string;
    types: PokemonType[];
    url: string;
  };

type PokemonType = {
slot: number;
type: NameAPIResource;
};

type NameAPIResource = {
    name: string;
    url: string;
  };


export type {
    PokemonDataType,
}