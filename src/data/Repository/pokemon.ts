import {PokemonRepository} from '@/Domain/Repository/pokemon';
import PokemonEntity from '@/Domain/Entity/pokemon';
import ApiDataSource from '@/Data/DataSource/api';
import { CACHE_NAME, CACHE_VERSION, POKEMON_SERVER_URL} from '@/Const';

class PokemonRepositoryImpl implements PokemonRepository {
  private apiDataSource: ApiDataSource
  constructor() {
    this.apiDataSource = new ApiDataSource();
  }


  async getPokemon({ offset }: { offset: number }): Promise<PokemonEntity[]> {
    const cacheRes = await this.apiDataSource.getCachePokemonData({offset});
    if(cacheRes !== null) return cacheRes;
    const res = await this.apiDataSource.getPokemonDataList({ offset });
    let dataArray: PokemonEntity[] = [];
    for (const d of res.results) {
      const url = d.url;
      await this.apiDataSource.cacheData({url});
      const data = await this.apiDataSource.getPokemonDetailData({ url });
      dataArray.push(data);
    }
    return dataArray;
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
