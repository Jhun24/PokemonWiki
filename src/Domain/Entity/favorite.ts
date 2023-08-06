type NameAPIResource = {
  name: string;
  url: string;
};

type ItemSprites = {
  default: string;
};

type PokemonType = {
  slot: number;
  type: NameAPIResource;
};

type ItemDataType = {
  category: NameAPIResource;
  id: number;
  image: ItemSprites;
  name: string;
  url: string;
};

type PokemonDataType = {
  id: number;
  image: string;
  name: string;
  types: PokemonType[];
  url: string;
};

class FavoriteEntity {
  item: ItemDataType | PokemonDataType;
}

export default FavoriteEntity;
