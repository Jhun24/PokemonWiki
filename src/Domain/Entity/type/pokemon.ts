type getPokemonType = {
  id: number;
};

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

type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NameAPIResource;
};

type PokemonTypePast = {
  generation: NameAPIResource;
  types: PokemonType[];
};

type PokemonHeldItem = {
  item: NameAPIResource;
  version_details: PokemonHeldItemVersion[];
};

type PokemonHeldItemVersion = {
  version: NameAPIResource;
  rarity: number;
};

type PokemonMove = {
  move: NameAPIResource;
  version_group_details: PokemonMoveVersion[];
};

type PokemonMoveVersion = {
  move_learn_method: NameAPIResource;
  version_group: NameAPIResource;
  level_learned_at: number;
};

type PokemonStat = {
  stat: NameAPIResource;
  effort: number;
  base_stat: number;
};

type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
};

type VersionGameIndex = {
  game_index: number;
  version: NameAPIResource;
};

type PokemonDetailType = {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: NameAPIResource[];
  game_indices: VersionGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_types: PokemonTypePast[];
  species: NameAPIResource[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};

export type {
  NameAPIResource,
  PokemonAbility,
  PokemonDataType,
  PokemonDetailType,
  PokemonHeldItem,
  PokemonMove,
  PokemonSprites,
  PokemonStat,
  PokemonType,
  PokemonTypePast,
  VersionGameIndex,
};
