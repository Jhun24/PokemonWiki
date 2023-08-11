import PokemonEntity from '@/Domain/Entity/pokemon';
import PokemonRepository from '@/Domain/Repository/pokemon';

type ExecuteType = {
  offset: number;
};

class GetPokemonUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute({ offset }: ExecuteType): Promise<PokemonEntity[]> {
    const localData = await this.pokemonRepository.getPokemonLocalData({
      offset,
    });
    if (localData.length !== 0) return localData;
    const res = await this.pokemonRepository.getPokemon({ offset });
    return res;
  }
}

export default GetPokemonUseCase;
