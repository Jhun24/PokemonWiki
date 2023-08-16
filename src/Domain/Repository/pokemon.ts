import PokemonEntity from '@/Domain/Entity/pokemon';

type GetPokemonType = {
  offset: number;
};

type GetPokemonInFavoriteType = {
  username: string;
};

interface PokemonRepository {
  getPokemon({ offset }: GetPokemonType): Promise<PokemonEntity[]>;
  getPokemonInFavorite({
    username,
  }: GetPokemonInFavoriteType): Promise<PokemonEntity[]>;
  getPokemonLocalData({ offset }: GetPokemonType): Promise<PokemonEntity[]>;
  savePokemonToFavorite(
    username: string,
    pokemonEntity: PokemonEntity
  ): Promise<void>;
}

export type { PokemonRepository };
