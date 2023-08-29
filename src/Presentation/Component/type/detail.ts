import { PokemonListType, ItemListType } from '.';

type DetailProps = {
  type: "pokemon" | "item";
  id: number;
}

type DetailPokemonProps = {
  pokemon: PokemonListType;
}

type DetailItemProps = {
  item: ItemListType;
}

export type { DetailProps, DetailItemProps, DetailPokemonProps }