import { FavoriteType } from './type/favorite';
import { ItemDetailType } from './type/item';
import { PokemonDataType } from './type/pokemon';

class FavoriteEntity {
  item: FavoriteType[] | null;
  type: string;
  constructor() {
    this.item = null;
    this.type = 'all';
  }

  getItemList() {
    if (this.item === null) return null;
    if (this.type === 'pokemon') {
      let returnItem: FavoriteType[] = [];
      for (const d of this.item) {
        if (d.type === 'pokemon') {
          returnItem.push(d);
        }
      }
      if (returnItem.length === 0) return null;
      return returnItem;
    }
    if (this.type === 'item') {
      let returnItem: FavoriteType[] = [];
      for (const d of this.item) {
        if (d.type === 'item') {
          returnItem.push(d);
        }
      }
      if (returnItem.length === 0) return null;
      return returnItem;
    }
    return this.item;
  }
  saveItem({ category, id, image, name, url }: ItemDetailType) {
    const saveData: FavoriteType = {
      type: 'item',
      item: {
        category: category,
        id: id,
        image: image,
        name: name,
        url: url,
      },
    };
    return saveData;
  }
  savePokemon({ id, image, name, types, url }: PokemonDataType) {
    const saveData: FavoriteType = {
      type: 'pokemon',
      item: {
        id: id,
        image: image,
        name: name,
        types: types,
        url: url,
      },
    };
    return saveData;
  }
}

export default FavoriteEntity;
