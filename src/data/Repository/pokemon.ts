import PokemonRepository from '@/Domain/Repository/pokemon';
import PokemonEntity from '@/Domain/Entity/pokemon';
import ApiDataSource from '@/Data/DataSource/api';

class PokemonRepositoryImpl implements PokemonRepository {
  apiDataSource: ApiDataSource;
  constructor() {
    this.apiDataSource = new ApiDataSource();
  }
  async getPokemon({ offset }: { offset: number }): Promise<PokemonEntity[]> {
    const res = await this.apiDataSource.getPokemonDataList({ offset });
    let dataArray: PokemonEntity[] = [];
    for (const d of res.results) {
      const url = d.url;
      const data = await this.apiDataSource.getPokemonDetailData({ url });
      dataArray.push(data);
    }
    return dataArray;
  }
}

export default PokemonRepositoryImpl;
