import PokemonRepository from '@/Domain/Repository/pokemon';
import PokemonEntity from '@/Domain/Entity/pokemon';

type ExecuteType = {
  username: string;
};

class GetFavoritePokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute({ username }: ExecuteType): Promise<PokemonEntity[]> {
    const res = await this.pokemonRepository.getPokemonInFavorite({ username });
    return res;
  }
}

export default GetFavoritePokemonUseCase;
