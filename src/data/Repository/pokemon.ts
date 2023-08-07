import PokemonRepository from '@/Domain/Repository/pokemon';
import PokemonEntity from '@/Domain/Entity/pokemon';
import ApiDataSource from '@/data/DataSource/api';

class PokemonRepositoryImpl implements PokemonRepository {
  apiDataSource: ApiDataSource;
  constructor() {
    this.apiDataSource = new ApiDataSource();
  }
  async getPokemon(): Promise<PokemonEntity[]> {
    const res = await this.apiDataSource.getAPIDataList({});
    let dataArray: PokemonEntity[] = [];
    for (const d of res.results) {
      const url = d.url;
      const data = await this.apiDataSource.getPokemonDetailData({ url });
      dataArray.push(data);
    }
    return dataArray;
  }
}
