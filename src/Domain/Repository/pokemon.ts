import PokemonEntity from '@/Domain/Entity/pokemon';

type GetPokemonType = {
  offset: number;
};

type GetPokemonInFavoriteType = {
  username: string;
}

interface PokemonRepository {
  getPokemon({ offset }: GetPokemonType): Promise<PokemonEntity[]>;
  getPokemonInFavorite({username}: GetPokemonInFavoriteType): Promise<PokemonEntity[]>;
  savePokemonToFavorite(pokemonEntity: PokemonEntity): Promise<void>;
}

export default PokemonRepository;
