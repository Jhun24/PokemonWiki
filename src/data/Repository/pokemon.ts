import PokemonRepository from '@/Domain/Repository/pokemon';
import PokemonEntity from '@/Domain/Entity/pokemon';
import ApiDataSource from '@/Data/DataSource/api';

class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private apiDataSource: ApiDataSource) {}
  async getPokemon({ offset }: { offset: number }): Promise<PokemonEntity[]> {
    const res = await this.apiDataSource.getPokemonDataList({ offset });
    let dataArray: PokemonEntity[] = [];
    for (const d of res.results) {
      const url = d.url;
      const data = await this.apiDataSource.getPokemonDetailData({ url });
      dataArray.push(data);
    }
    await this.apiDataSource.savePokemonDataToLocal(dataArray);
    return dataArray;
  }

  async getPokemonLocalData({
    offset,
  }: {
    offset: number;
  }): Promise<PokemonEntity[]> {
    const localData = await this.apiDataSource.getPokemonLocalDataList({
      offset,
    });
    return localData;
  }

  getPokemonInFavorite({
    username,
  }: {
    username: string;
  }): Promise<PokemonEntity[]> {
    const localStringData: string | null = localStorage.getItem(
      `${username}-pokemon`
    );
    if (localStringData === null) return new Promise((resolve) => resolve([]));
    const localPokemonData: PokemonEntity[] = JSON.parse(localStringData);
    return new Promise((resolve) => resolve(localPokemonData));
  }

  async savePokemonToFavorite(
    username: string,
    pokemonEntity: PokemonEntity
  ): Promise<void> {
    const localStringData: string | null = localStorage.getItem(
      `${username}-pokemon`
    );
    if (localStringData === null) {
      localStorage.setItem(
        `${username}-pokemon`,
        JSON.stringify([pokemonEntity])
      );
    } else {
      let localPokemonData: PokemonEntity[] = JSON.parse(localStringData);
      localPokemonData.push(pokemonEntity);
      localStorage.setItem(
        `${username}-pokemon`,
        JSON.stringify(localPokemonData)
      );
    }
  }
}

export default PokemonRepositoryImpl;
