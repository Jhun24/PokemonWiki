type NameAPIResource = {
    name: string;
    url: string;
  };
  
  type ItemSprites = {
    default: string;
  };
  
  type ItemDataType = {
    category: NameAPIResource;
    id: number;
    image: ItemSprites;
    name: string;
    url: string;
  };
  
  export type { ItemDataType };