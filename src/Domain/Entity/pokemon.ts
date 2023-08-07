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
  image: string;
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
  url: string;
  weight: number;

  constructor({
    abilities,
    base_experience,
    forms,
    game_indices,
    height,
    held_items,
    id,
    image,
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
    url,
    weight,
  }: PokemonDetailType & PokemonDataType) {
    this.abilities = abilities;
    this.base_experience = base_experience;
    this.forms = forms;
    this.game_indices = game_indices;
    this.height = height;
    this.held_items = held_items;
    this.id = id;
    this.image = image;
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
    this.url = url;
    this.weight = weight;
  }

  getPokemon(): PokemonDataType {
    const returnData: PokemonDataType = {
      id: this.id,
      image: this.image,
      name: this.name,
      types: this.types,
      url: this.url,
    };
    return returnData;
  }
  getPokemonDetail(): PokemonDetailType {
    const returnData: PokemonDetailType = {
      abilities: this.abilities,
      base_experience: this.base_experience,
      forms: this.forms,
      game_indices: this.game_indices,
      height: this.height,
      held_items: this.held_items,
      id: this.id,
      is_default: this.is_default,
      location_area_encounters: this.location_area_encounters,
      moves: this.moves,
      name: this.name,
      order: this.order,
      past_types: this.past_types,
      species: this.species,
      sprites: this.sprites,
      stats: this.stats,
      types: this.types,
      weight: this.weight,
    };
    return returnData;
  }
}

return PokemonEntity;
