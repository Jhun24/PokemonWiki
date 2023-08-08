type NameAPIResource = {
  name: string;
  url: string;
};

type APIResource = {
  url: string;
};

type VerboseEffect = {
  effect: string;
  short_effect: string;
  language: NameAPIResource;
};

type VersionGroupFlavorText = {
  text: string;
  language: NameAPIResource;
};

type GenerationGameIndex = {
  game_index: number;
  generation: NameAPIResource;
};

type Name = {
  name: string;
  language: NameAPIResource;
};

type ItemHolderPokemon = {
  pokemon: NameAPIResource;
  version_details: ItemHolderPokemonVersionDetail[];
};

type ItemHolderPokemonVersionDetail = {
  rarity: number;
  version: NameAPIResource;
};

type ItemSprites = {
  default: string;
};

type MachineVersionDetail = {
  machine: APIResource;
  version_group: NameAPIResource;
};
type ItemDetailType = {
  attributes: NameAPIResource[];
  baby_trigger_for: APIResource;
  category: NameAPIResource;
  cost: number;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  fling_effect: NameAPIResource;
  fling_power: number;
  game_indices: GenerationGameIndex[];
  held_by_pokemon: ItemHolderPokemon;
  id: number;
  machines: MachineVersionDetail[];
  name: string;
  names: Name[];
  sprites: ItemSprites;
};

export type {
  ItemDetailType,
  NameAPIResource,
  VerboseEffect,
  VersionGroupFlavorText,
  GenerationGameIndex,
  Name,
  ItemSprites,
  ItemHolderPokemon,
  APIResource,
  MachineVersionDetail,
};
