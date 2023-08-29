import PokemonEntity from '@/Domain/Entity/pokemon';

type GetPokemonType = {
  offset: number;
};

type GetPokemonDetailType = {
  id: number;
};

type GetPokemonInFavoriteType = {
  username: string;
};

interface PokemonRepository {
  getPokemon({ offset }: GetPokemonType): Promise<PokemonEntity[]>;
  getPokemonDetail({ id }: GetPokemonDetailType): Promise<PokemonEntity>;
  getPokemonInFavorite({
    username,
  }: GetPokemonInFavoriteType): Promise<PokemonEntity[]>;
  savePokemonToFavorite(
    username: string,
    pokemonEntity: PokemonEntity
  ): Promise<void>;
}

export type { PokemonRepository };
