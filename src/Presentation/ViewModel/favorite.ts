import { PokemonRepository } from "@/Domain/Repository/pokemon";
import { ItemRepository } from "@/Domain/Repository/item";
import PokemonRepositoryImpl from "@/Data/Repository/pokemon";
import ItemRepositoryImpl from "@/Data/Repository/item";
import PokemonEntity from "@/Domain/Entity/pokemon";
import ItemEntity from "@/Domain/Entity/item";

type GetFavoriteType = {
  username: string;
}

type saveFavoriteItemType = {
  username: string;
  itemEntity: ItemEntity;
}

type saveFavoritePokemonType = {
  username: string;
  pokemonEntity: PokemonEntity;
}

class FavoriteViewModel{
  private pokemonRepository: PokemonRepository;
  private itemRepository: ItemRepository;

  constructor(){
    this.pokemonRepository = new PokemonRepositoryImpl();
    this.itemRepository = new ItemRepositoryImpl();
  }

  async getFavoriteItem({username}: GetFavoriteType): Promise<ItemEntity[] | null>{
    const res = await this.itemRepository.getItemInFavorite({username});
    return res;
  }

  async getFavoritePokemon({username}: GetFavoriteType): Promise<PokemonEntity[]>{
    const res = await this.pokemonRepository.getPokemonInFavorite({username});
    return res;
  }

  async saveFavoriteItem({username, itemEntity}: saveFavoriteItemType): Promise<boolean>{
    try {
      await this.itemRepository.saveItemToFavorite(username, itemEntity);
      return true;
    } catch (error) {
      return false;
    }
  }

  async saveFavoritePokemon({username, pokemonEntity}: saveFavoritePokemonType): Promise<boolean>{
    try {
      await this.pokemonRepository.savePokemonToFavorite(username, pokemonEntity);
      return true;
    } catch (error) {
      return false;
    }
  }
};

export default FavoriteViewModel;