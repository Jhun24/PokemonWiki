import { PokemonListType, ItemListType } from '.';

type DetailProps = {
  type: "pokemon" | "item";
  id: number;
}

type DetailPokemonProps = {
  username: string;
  pokemon: PokemonListType;
}

type DetailItemProps = {
  username: string;
  item: ItemListType;
}

export type { DetailProps, DetailItemProps, DetailPokemonProps }