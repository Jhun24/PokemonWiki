import {
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
} from './type/pokemon';

class PokemonEntity {
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

  constructor({
    abilities,
    base_experience,
    forms,
    game_indices,
    height,
    held_items,
    id,
    is_default,
    location_area_encounters,
    moves,
    name,
    order,
    past_types,
    species,
    sprites,
    stats,
    types,
    weight,
  }: PokemonDetailType) {
    this.abilities = abilities;
    this.base_experience = base_experience;
    this.forms = forms;
    this.game_indices = game_indices;
    this.height = height;
    this.held_items = held_items;
    this.id = id;
    this.is_default = is_default;
    this.location_area_encounters = location_area_encounters;
    this.moves = moves;
    this.name = name;
    this.order = order;
    this.past_types = past_types;
    this.species = species;
    this.sprites = sprites;
    this.stats = stats;
    this.types = types;
    this.weight = weight;
  }
}

export default PokemonEntity;
