import {ItemDataType} from '@/Domain/Entity/type/item';
import {PokemonDataType } from '@/Domain/Entity/type/pokemon';

type FavoriteType = {
    type: string;
    item: ItemDataType | PokemonDataType;
  };

export type { FavoriteType };