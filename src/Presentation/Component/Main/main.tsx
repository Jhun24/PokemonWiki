import { useState, useEffect, MouseEventHandler } from 'react';
import { List, ListBox } from '@/Presentation/Component';
import { MainType, PokemonListType, ItemListType } from '@/Presentation/Component/type';
import { DataViewModel } from '@/Presentation/ViewModel';

import style from '@/Presentation/Component/style/Main.module.css';

const Main = ({type}: MainType) => {

  const [pokemonData, setPokemonData] = useState<PokemonListType[]>([]);
  const [itemData, setItemData] = useState<ItemListType[]>([]);
  const [offset, setOffset] = useState(0);
  const dataViewModel = new DataViewModel();

  const getPokemonData = async () => {
    const res: PokemonListType[] = await dataViewModel.getPokemonData({offset});
    setPokemonData(res);
    setOffset(offset + 20);
  };

  const getItemList = async () => {

    setOffset(offset + 20);
  };

  const onListItemClick: MouseEventHandler<HTMLDivElement> = (e) => {

  }

  const renderPokemon = (data: PokemonListType[]): JSX.Element[] => {
    const res =  data.map((element) => {
      return <List id={element.id} image={element.sprites.front_default} name={element.name} type={element.types} onClick={onListItemClick}/>
    });
    return res;
  }

  useEffect(() => {
    if(type === "pokemon"){
      getPokemonData();
    }
  }, []);

  return(
    <div className={style.List}>
      <ListBox>
          {renderPokemon(pokemonData)}
      </ListBox>
    </div>
  );
};

export default Main;
