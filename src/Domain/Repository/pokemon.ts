import PokemonEntity from '@/Domain/Entity/pokemon';

interface PokemonRepository {
  getPokemon(): Promise<PokemonEntity[]>;
}

export default PokemonRepository;
