import { PokemonRepository } from "@/Domain/Repository/pokemon";
import { ItemRepository } from "@/Domain/Repository/item";
import PokemonRepositoryImpl from "@/Data/Repository/pokemon";
import ItemRepositoryImpl from "@/Data/Repository/item";
import PokemonEntity from "@/Domain/Entity/pokemon";
import ItemEntity from "@/Domain/Entity/item";

type GetDataType = {
  offset: number;
};

class DataViewModel {
  private pokemonRepository: PokemonRepository;
  private itemRepository: ItemRepository; 
  constructor(){ 
    this.pokemonRepository = new PokemonRepositoryImpl();
    this.itemRepository = new ItemRepositoryImpl();
  }

  async getPokemonData({offset}: GetDataType): Promise<PokemonEntity[]>{
    const res = await this.pokemonRepository.getPokemon({offset});
    return res;
  }

  async getItemData({offset}: GetDataType): Promise<ItemEntity[]>{
    const res = await this.itemRepository.getItem({offset});
    return res;
  }
}

export default DataViewModel;