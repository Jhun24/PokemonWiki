import PokemonEntity from '@/Domain/Entity/pokemon';
import PokemonRepository from '@/Domain/Repository/pokemon';

type ExecuteType = {
  offset: number;
};

class UseCaseGetPokemonList {
  private pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async execute({ offset }: ExecuteType): Promise<PokemonEntity[]> {
    const res = await this.pokemonRepository.getPokemon({ offset });
    return res;
  }
}

export default UseCaseGetPokemonList;
