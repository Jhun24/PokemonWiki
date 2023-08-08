import PokemonEntity from '@/Domain/Entity/pokemon';

type GetPokemonType = {
  offset: number;
};

interface PokemonRepository {
  getPokemon({ offset }: GetPokemonType): Promise<PokemonEntity[]>;
}

export default PokemonRepository;
