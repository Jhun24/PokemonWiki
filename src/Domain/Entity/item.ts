import {
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
} from './type/item';

class ItemEntity {
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

  constructor({
    attributes,
    baby_trigger_for,
    category,
    cost,
    effect_entries,
    flavor_text_entries,
    fling_effect,
    fling_power,
    game_indices,
    held_by_pokemon,
    id,
    machines,
    name,
    names,
    sprites,
  }: ItemDetailType) {
    this.attributes = attributes;
    this.baby_trigger_for = baby_trigger_for;
    this.category = category;
    this.cost = cost;
    this.effect_entries = effect_entries;
    this.flavor_text_entries = flavor_text_entries;
    this.fling_effect = fling_effect;
    this.fling_power = fling_power;
    this.game_indices = game_indices;
    this.held_by_pokemon = held_by_pokemon;
    this.id = id;
    this.machines = machines;
    this.name = name;
    this.names = names;
    this.sprites = sprites;
  }
}

export default ItemEntity;
