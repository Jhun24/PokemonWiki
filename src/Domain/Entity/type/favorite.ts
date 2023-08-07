import { ItemDataType } from './item';
import { PokemonDataType } from './pokemon';

type FavoriteType = {
  type: string;
  item: ItemDataType | PokemonDataType;
};

export type { FavoriteType };
