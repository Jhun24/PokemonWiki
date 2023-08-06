type NameAPIResource = {
  name: string;
  url: string;
};

type ItemSprites = {
  default: string;
};

type PokemonType = {
  slot: number;
  type: NameAPIResource;
};

type ItemDataType = {
  category: NameAPIResource;
  id: number;
  image: ItemSprites;
  name: string;
  url: string;
};

type PokemonDataType = {
  id: number;
  image: string;
  name: string;
  types: PokemonType[];
  url: string;
};

type ItemType = {
  type: string;
  item: ItemDataType | PokemonDataType;
};

class FavoriteEntity {
  item: ItemType[] | null;
  type: string;
  constructor() {
    this.item = null;
    this.type = 'all';
  }

  getItemList() {
    if (this.item === null) return null;
    if (this.type === 'pokemon') {
      let returnItem: ItemType[] = [];
      for (const d of this.item) {
        if (d.type === 'pokemon') {
          returnItem.push(d);
        }
      }
      if(returnItem.length === 0) return null;
      return returnItem;
    }
    if (this.type === 'item') {
      let returnItem: ItemType[] = [];
      for (const d of this.item) {
        if (d.type === 'item') {
          returnItem.push(d);
        }
      }
      if(returnItem.length === 0) return null;
      return returnItem;
    }
    return this.item;
  }
}

export default FavoriteEntity;
